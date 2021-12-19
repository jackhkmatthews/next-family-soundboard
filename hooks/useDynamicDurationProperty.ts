import { RefObject, useEffect, useRef } from "react";

export function useDynamicDurationProperty(
  property: string,
  shouldFlicker: boolean
): {
  elementRef: RefObject<HTMLElement>;
} {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      elementRef.current?.style.setProperty(property, Math.random() + "s");
    }, 1000);

    if (!shouldFlicker) {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [shouldFlicker, property]);

  return { elementRef };
}
