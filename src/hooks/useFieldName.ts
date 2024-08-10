import { useEffect, useRef } from "react";

import { getUniqueTime } from "@src/utils";

export const useFieldName = (name?: string, fallbackPrefix?: string) => {
  const nameRef = useRef("");

  useEffect(() => {
    nameRef.current = name || `${fallbackPrefix}-${getUniqueTime()}`;
  }, [name, fallbackPrefix]);

  return { name: nameRef.current };
};
