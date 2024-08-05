import { useMemo } from "react";

import { getCurrentTime } from "@src/utils";

export const useFieldName = (name?: string, fallbackPrefix?: string) => {
  const nameMemo = useMemo(() => {
    return name || `${fallbackPrefix}-${getCurrentTime()}`;
  }, [name, fallbackPrefix]);

  return { nameMemo };
};
