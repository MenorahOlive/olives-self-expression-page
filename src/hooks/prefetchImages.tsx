import { useEffect } from "react";

export default function usePrefetchImages(
  images: {
    src: string;
    alt: string;
  }[],
) {
  async function prefetchImages() {
    const promises = [];

    for (let i = 0; i < images.length; i++) {
      const p = fetch(images[i].src);

      promises.push(p);
    }

    await Promise.all(promises);
  }

  useEffect(() => {
    prefetchImages();
  }, []);
}
