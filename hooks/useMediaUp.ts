import { useCallback, useEffect, useRef, useState } from "react";

export function useMediaUp<T>(queries: string[], values: T[], defaultValue: T) {
  const mediaQueryLists = useRef<MediaQueryList[]>([]);
  const [value, setValue] = useState<T>(defaultValue);

  const updateValue = useCallback(() => {
    const index =
      mediaQueryLists.current.filter((mql) => mql.matches).length - 1;
    setValue(values[index] || defaultValue);
  }, [values, defaultValue]);

  useEffect(() => {
    console.log("effect");
    mediaQueryLists.current = queries.map((q) => window.matchMedia(q));
    updateValue();
    mediaQueryLists.current.forEach((query) =>
      query.addEventListener("change", updateValue)
    );
    return () => {
      mediaQueryLists.current.forEach((query) =>
        query.removeEventListener("change", updateValue)
      );
    };
  }, [queries, updateValue]);

  return value;
}
