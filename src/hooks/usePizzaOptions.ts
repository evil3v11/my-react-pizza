import { useCallback, useState } from "react";

export const usePizzaOptions = () => {
  const [activeType, setActiveType] = useState(0);
  const [activeSizeIdx, setActiveSizeIdx] = useState(0);

  const handleTypeChange = useCallback(
    (typeIdx: number) => setActiveType(typeIdx),
    [],
  );
  const handleSizeIdxChange = useCallback(
    (sizeIdx: number) => setActiveSizeIdx(sizeIdx),
    [],
  );

  return { activeType, handleTypeChange, activeSizeIdx, handleSizeIdxChange };
};
