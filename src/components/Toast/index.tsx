import { FC, FunctionComponent, ReactNode, createRef, useEffect } from "react";

import clsx from "clsx";
import { createPortal } from "react-dom";
import { renderToStaticMarkup } from "react-dom/server";

import { useMounted } from "@src/hooks/useMounted";
import { ExtraCompProps } from "@src/interfaces/extra-comp-props.interface";
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

interface ToastProps {
  containerElement?: HTMLElement;
}

export let toastIns: ToastInstance;

export const Toast: FC<ToastProps & ExtraCompProps> = ({
  containerElement,
  className,
  testId,
}) => {
  const toastList: Record<string, number | undefined> = {};
  const toastQueueRef = createRef<HTMLDivElement>();
  const { isMounted } = useMounted();

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
    testId && toastContainer.setAttribute("data-testid", testId);
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
    toastList[toastId] = setTimeout(closeToast, 5000);
  };

  /**
   * Notify functions
   */

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

  const renderToast = () => {
    return (
      <div
        ref={toastQueueRef}
        className={clsx("usy-toast-container position-top-right", className)}
      />
    );
  };

  return isMounted
    ? createPortal(renderToast(), containerElement || document.body)
    : null;
};
