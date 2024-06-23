import { FunctionComponent, ReactNode, createRef, useEffect } from "react";

import clsx from "clsx";
import { renderToStaticMarkup } from "react-dom/server";

import { getCurrentTime } from "@src/utils/helpers";

import {
  CheckCircleFilledIcon,
  CloseIcon,
  InfoCircleFilledIcon,
  WarningCircleFilledIcon,
} from "../Icon";

type CreateToastProps = {
  type: "success" | "info" | "warning" | "error";
  title: ReactNode;
  content: ReactNode;
  statusIcon: FunctionComponent<{ className: string }>;
  onClose?: () => void;
};

type ToastParams = Pick<CreateToastProps, "title" | "content">;

interface ToastInstance {
  success: (params: ToastParams) => void;
  info: (params: ToastParams) => void;
  warning: (params: ToastParams) => void;
  error: (params: ToastParams) => void;
}

export let toastIns: ToastInstance;

export const Toast = () => {
  const toastList: Record<string, number | undefined> = {};
  const toastQueueRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (!toastIns) {
      toastIns = {
        success,
        info,
        warning,
        error,
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createToast = ({
    type,
    title,
    content,
    statusIcon: StatusIcon,
  }: CreateToastProps) => {
    const toastId = `toast-${getCurrentTime()}`;
    const toastContainer = document.createElement("div");

    toastContainer.id = toastId;
    toastContainer.className = `toast-container ${type}`;
    toastContainer.innerHTML = renderToStaticMarkup(
      <>
        <StatusIcon className="status-icon" />
        <div className="content">
          <h4 className="title">{title}</h4>
          <div className="description">{content}</div>
        </div>
        <CloseIcon className="close-icon" />
      </>
    );

    toastQueueRef.current?.appendChild(toastContainer);
    const closeToast = () => {
      clearTimeout(toastList[toastId]);
      toastList[toastId] = undefined;
      toastContainer.remove();
    };

    const closeIcon = toastContainer.getElementsByClassName(
      "close-icon"
    )[0] as HTMLElement;

    closeIcon.onclick = closeToast;
    toastList[toastId] = setTimeout(closeToast, 500000);
  };

  const success = ({ title, content }: ToastParams) => {
    createToast({
      type: "success",
      title,
      content,
      statusIcon: CheckCircleFilledIcon,
    });
  };

  const info = ({ title, content }: ToastParams) => {
    createToast({
      type: "info",
      title,
      content,
      statusIcon: InfoCircleFilledIcon,
    });
  };

  const warning = ({ title, content }: ToastParams) => {
    createToast({
      type: "warning",
      title,
      content,
      statusIcon: WarningCircleFilledIcon,
    });
  };

  const error = ({ title, content }: ToastParams) => {
    createToast({
      type: "error",
      title,
      content,
      statusIcon: WarningCircleFilledIcon,
    });
  };

  return (
    <div
      ref={toastQueueRef}
      className={clsx("usy-toast-container position-top-right")}
    />
  );
};
