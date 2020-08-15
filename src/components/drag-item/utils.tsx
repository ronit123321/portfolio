import * as React from "react";

export const setPointerCapture = (
  ref: React.RefObject<HTMLDivElement>,
  pointerId: number
): void => {
  if (ref.current) {
    ref.current.setPointerCapture(pointerId);
  }
};

export const releasePointerCapture = (
  ref: React.RefObject<HTMLDivElement>,
  pointerId: number
): void => {
  if (ref.current) {
    ref.current.releasePointerCapture(pointerId);
  }
};
