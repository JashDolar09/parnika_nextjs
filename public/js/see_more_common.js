const galleryList = document.getElementById("galleryList");
const loadMoreBtn = document.getElementById("loadMoreBtn");

if (galleryList && typeof galleryImages !== "undefined") {

    const captionText = galleryList.dataset.caption || "";

    // Settings (smaller first load = faster page)
    const FIRST_BATCH = 6;
    const AUTO_BATCH = 6;
    const BUTTON_BATCH = 6;

    let currentIndex = 0;
    let autoLoaded = false;

    function createImageItem(src) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");

        a.href = "#";
        a.className = "gallery-item-link";

        img.src = src;
        img.alt = "Product Image";
        img.loading = "lazy";          // ⭐ BIG SPEED BOOST
        img.decoding = "async";
        img.width = 300;               // Prevent layout shift
        img.height = 420;
        img.className = "image-show";

        figcaption.textContent = captionText;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        a.appendChild(figure);
        li.appendChild(a);

        return li;
    }

    function loadImages(count) {
        const fragment = document.createDocumentFragment();
        const endIndex = Math.min(currentIndex + count, galleryImages.length);

        for (let i = currentIndex; i < endIndex; i++) {
            fragment.appendChild(createImageItem(galleryImages[i]));
        }

        galleryList.appendChild(fragment);
        currentIndex = endIndex;

        if (currentIndex >= galleryImages.length && loadMoreBtn) {
            loadMoreBtn.style.display = "none";
        }
    }

    // Intersection Observer (better than scroll event)
    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !autoLoaded) {
            autoLoaded = true;
            loadImages(AUTO_BATCH);
        }
    }, { rootMargin: "150px" });

    observer.observe(loadMoreBtn);

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            loadImages(BUTTON_BATCH);
        });
    }

    // Initial fast load
    loadImages(FIRST_BATCH);

    document.addEventListener("click", e => {
        if (e.target.closest(".gallery-item-link")) {
            e.preventDefault();
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll("#galleryList li");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    const ITEMS_PER_CLICK = 6;
    let visibleCount = 6;

    // Hide all except first 6
    items.forEach((item, index) => {
        if (index >= visibleCount) {
            item.style.display = "none";
        }
    });

    loadMoreBtn.addEventListener("click", () => {
        let shown = 0;

        items.forEach((item, index) => {
            if (item.style.display === "none" && shown < ITEMS_PER_CLICK) {
                item.style.display = "block";
                shown++;
            }
        });

        visibleCount += ITEMS_PER_CLICK;

        // Hide button if all images are shown
        if (visibleCount >= items.length) {
            loadMoreBtn.style.display = "none";
        }
    });
});