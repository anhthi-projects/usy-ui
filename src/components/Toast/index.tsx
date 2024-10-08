import { FC, FunctionComponent, ReactNode, createRef, useEffect } from "react";

import clsx from "clsx";
import { createPortal } from "react-dom";
import { renderToStaticMarkup } from "react-dom/server";

import { useMounted } from "@src/hooks/useMounted";
import { getUniqueTime } from "@src/utils";

import { ExtraCompProps } from "../../types/extra-comp.props";
import {
  CheckCircleIcon,
  CloseIcon,
  InfoCircleIcon,
  ExclamationCircleIcon,
  BanIcon,
} from "../Icon";

type ToastType = "success" | "info" | "warning" | "error";
type PushToastProps = {
  type: ToastType;
  title: ReactNode;
  description: ReactNode;
  statusIcon: FunctionComponent<{ className: string }>;
  timeout?: number;
  onClose?: () => void;
};

type ToastParams =
  | string
  | Pick<PushToastProps, "title" | "description" | "timeout">;

interface ToastInstance {
  success: (params: ToastParams) => void;
  info: (params: ToastParams) => void;
  warning: (params: ToastParams) => void;
  error: (params: ToastParams) => void;
}

type ToastProps = {
  containerElement?: HTMLElement;
} & ExtraCompProps;

export let toastIns: ToastInstance;

export const Toast: FC<ToastProps> = ({
  containerElement,
  className,
  testId,
}) => {
  const toastList: Record<string, number | undefined> = {};
  const toastQueueRef = createRef<HTMLDivElement>();
  const { isMounted } = useMounted();

  useEffect(() => {
    if (!toastIns && isMounted) {
      toastIns = {
        success,
        info,
        warning,
        error,
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  /**
   * Notify functions
   */

  const getPushToastRestProps = (params: ToastParams) => {
    return {
      title: typeof params === "object" ? params.title : undefined,
      description: typeof params === "object" ? params.description : params,
      timeout: typeof params === "object" ? params.timeout : 5000,
    };
  };

  const success = (params: ToastParams) => {
    pushToast({
      type: "success",
      statusIcon: CheckCircleIcon,
      ...getPushToastRestProps(params),
    });
  };

  const info = (params: ToastParams) => {
    pushToast({
      type: "info",
      statusIcon: InfoCircleIcon,
      ...getPushToastRestProps(params),
    });
  };

  const warning = (params: ToastParams) => {
    pushToast({
      type: "warning",
      statusIcon: ExclamationCircleIcon,
      ...getPushToastRestProps(params),
    });
  };

  const error = (params: ToastParams) => {
    pushToast({
      type: "error",
      statusIcon: BanIcon,
      ...getPushToastRestProps(params),
    });
  };

  /**
   * Render
   */

  const pushToast = ({
    type,
    title,
    description,
    statusIcon: StatusIcon,
    timeout,
  }: PushToastProps) => {
    const toastContainer = document.createElement("div");

    const toastId = `toast-${getUniqueTime()}`;
    toastContainer.id = toastId;
    toastContainer.className = `toast-container ${type}`;
    testId && toastContainer.setAttribute("data-testid", testId);
    toastContainer.innerHTML = renderToStaticMarkup(
      <>
        <StatusIcon className="status-icon" />
        <div className="content">
          {title && <h4 className="title">{title}</h4>}
          {description && <div className="description">{description}</div>}
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
    toastList[toastId] = setTimeout(closeToast, timeout || 5000);
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
