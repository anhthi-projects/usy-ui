import { ChangeEvent, FC, useRef, useState } from "react";

import clsx from "clsx";

import { ExtraCompProps } from "@src/types/extra-comp.props";
import { WidthProps } from "@src/types/width-height.props";

import { CloseCircleFilledIcon } from "../Icon";

type PureTagsProps = {
  tags?: string[];
  placeholder?: string;
  widthProps?: WidthProps;
  onAdd?: (tag: string) => void;
  onRemove?: (tag: string) => void;
};

type TagsProps = PureTagsProps &
  Partial<Pick<ExtraCompProps, "className" | "testId">>;

export const Tags: FC<TagsProps> = ({
  tags: initTags,
  placeholder = "New tag...",
  widthProps,
  onAdd,
  onRemove,
  className,
  testId,
}) => {
  const [tags, setTags] = useState(initTags || []);
  const [inputTag, setInputTag] = useState("");
  const inputTagRef = useRef<HTMLInputElement>(null);

  const handleInputTagChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputTag(target.value);
  };

  const addTag = () => {
    if (inputTag) {
      onAdd?.(inputTag);
      setTags([...tags, inputTag]);
      setInputTag("");
      inputTagRef.current?.focus();
    }
  };

  const removeTag = (selectedTag: string) => {
    const updatedTags = [...tags].filter((tagItem) => tagItem !== selectedTag);
    onRemove?.(selectedTag);
    setTags(updatedTags);
  };

  return (
    <div
      className={clsx("usy-tags-container", className)}
      style={{ ...widthProps }}
      data-testid={testId}
    >
      {tags.map((tagItem) => {
        return (
          <span
            key={tagItem}
            className="tag-item"
            data-testid={`${testId}-tag-item`}
          >
            {tagItem}
            <CloseCircleFilledIcon onClick={() => removeTag(tagItem)} />
          </span>
        );
      })}
      <input
        value={inputTag}
        placeholder={placeholder}
        onChange={handleInputTagChange}
        onBlur={addTag}
        ref={inputTagRef}
        className="tag-input"
        data-testid={`${testId}-tag-input`}
      />
    </div>
  );
};
