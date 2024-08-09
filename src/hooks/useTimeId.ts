import { useEffect, useRef } from "react";

import { getUniqueTime } from "@src/utils";

export const useTimeId = (prefix: string = "unique-time") => {
  const idRef = useRef<string>("");

  useEffect(() => {
    idRef.current = `${prefix}-${getUniqueTime()}`;
  }, [prefix]);

  return {
    id: idRef.current,
  };
};
