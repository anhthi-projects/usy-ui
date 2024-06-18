import { FC } from "react";

import clsx from "clsx";

type Image = {
  url: string;
  shape: "big" | "wide" | "tall" | "normal";
  alt?: string;
};

interface ImageGalleryProps {
  images: Image[];
  testId?: string;
}

export const ImageGallery: FC<ImageGalleryProps> = ({ images, testId }) => {
  return (
    <div className={clsx("usy-image-gallery")} data-testid={testId}>
      {images.map(({ url, shape, alt }) => (
        <div key={url} className={clsx("image-container", shape)}>
          <img src={url} className="image" alt={alt} />
        </div>
      ))}
    </div>
  );
};
