/* 
 * Shared gallery component using next/image.
 * Mirrors previous DOM-based "Load More" behavior:
 * - Initial batch renders immediately.
 * - Optionally auto-loads one extra batch when the button scrolls into view,
 *   only if more than one button batch remains (matches old logic).
 * - Button hides when all images are rendered.
 *
 * UI/UX: pixel-identical. Styling stays in existing CSS (.gallery-main, etc.).
 */
"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

type GalleryProps = {
  images: GalleryImage[];
  sizes?: string;
  firstBatch?: number;
  autoBatch?: number;
  buttonBatch?: number;
  priorityCount?: number;
};

const DEFAULT_FIRST_BATCH = 6;
const DEFAULT_AUTO_BATCH = 6;
const DEFAULT_BUTTON_BATCH = 6;

export function Gallery({
  images,
  sizes = "(max-width: 600px) 50vw, (max-width: 1024px) 33vw, 300px",
  firstBatch = DEFAULT_FIRST_BATCH,
  autoBatch = DEFAULT_AUTO_BATCH,
  buttonBatch = DEFAULT_BUTTON_BATCH,
  priorityCount = 0,
}: GalleryProps) {
  const [visibleCount, setVisibleCount] = useState(firstBatch);
  const [autoLoaded, setAutoLoaded] = useState(false);
  const loadMoreRef = useRef<HTMLButtonElement | null>(null);

  const shouldAutoLoad = useMemo(() => {
    const remainingAfterFirst = images.length - firstBatch;
    return remainingAfterFirst > buttonBatch;
  }, [images.length, firstBatch, buttonBatch]);

  useEffect(() => {
    if (!shouldAutoLoad || autoLoaded) return;
    const btn = loadMoreRef.current;
    if (!btn) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + autoBatch, images.length));
          setAutoLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" }
    );

    observer.observe(btn);
    return () => observer.disconnect();
  }, [autoBatch, images.length, shouldAutoLoad, autoLoaded]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + buttonBatch, images.length));
  };

  const isAllShown = visibleCount >= images.length;

  return (
    <>
      <div className="gallery-main">
        <ul className="gallery-list" id="galleryList">
          {images.slice(0, visibleCount).map((img, index) => (
            <li key={img.src}>
              <a href="#" className="gallery-item-link" onClick={(e) => e.preventDefault()}>
                <figure>
                  <Image
                    src={img.src.replace(/ /g, '%20')}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="image-show"
                    priority={index < priorityCount}
                    sizes={sizes}
                    style={{ height: 'auto', width: '100%' }}
                  />
                  <figcaption>{img.caption}</figcaption>
                </figure>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="load-more-container">
        {!isAllShown && (
          <button
            className="ubuntu-regular"
            id="loadMoreBtn"
            onClick={handleLoadMore}
            ref={loadMoreRef}
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
}

export default Gallery;
