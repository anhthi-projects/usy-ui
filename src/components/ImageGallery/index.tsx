import { FC } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/types/extra-comp.props";

type Image = {
  url: string;
  shape: "big" | "wide" | "tall" | "normal";
  alt?: string;
};

type ImageGalleryProps = {
  images: Image[];
} & Partial<Pick<ExtraCompProps, "className" | "testId">>;

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
