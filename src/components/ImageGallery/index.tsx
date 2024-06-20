import { FC } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";

type Image = {
  url: string;
  shape: "big" | "wide" | "tall" | "normal";
  alt?: string;
};

interface ImageGalleryProps extends ExtraCompProps {
  images: Image[];
}

export const ImageGallery: FC<ImageGalleryProps> = ({
  images,
  className,
  testId,
}) => {
  return (
    <div className={clsx("usy-image-gallery", className)} data-testid={testId}>
      {images.map(({ url, shape, alt }) => (
        <div key={url} className={clsx("image-container", shape)}>
          <img src={url} className="image" alt={alt} />
        </div>
      ))}
    </div>
  );
};
