import {
  ForwardRefExoticComponent,
  RefAttributes,
  createRef,
  useEffect,
} from "react";

export const withMargin = <CompProps,>(
  BaseComponent: ForwardRefExoticComponent<
    CompProps & RefAttributes<HTMLElement>
  >
) => {
  const compRef = createRef<HTMLElement>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function EnhancedComponent(props: any) {
    useEffect(() => {
      if (compRef.current) {
        compRef.current.style.marginBottom = "50px";
      }
    }, []);

    return (
      <>
        <BaseComponent ref={compRef} {...props} />
      </>
    );
  };
};
