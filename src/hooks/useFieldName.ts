import { useMemo } from "react";

import { getUniqueTime } from "@src/utils";

export const useFieldName = (name?: string, fallbackPrefix?: string) => {
  const nameMemo = useMemo(() => {
    return name || `${fallbackPrefix}-${getUniqueTime()}`;
  }, [name, fallbackPrefix]);

  return { nameMemo };
};
