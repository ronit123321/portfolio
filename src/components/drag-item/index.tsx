import * as React from "react";
import { setPointerCapture, releasePointerCapture } from "./utils";

interface DragItemProps<T> {
  id: string;
  onDragStart(): T;
  onDrag(deltaX: number, deltaY: number, initial: T): void;
  onDragStop?(): void;
  className?: string;
  style?: React.CSSProperties;
}

interface DraggingState<T> {
  startMouseX: number;
  startMouseY: number;
  initial: T;
}

function DragItemNoMemo<T = any>({
  id,
  style,
  onDragStart,
  onDrag,
  onDragStop,
  className,
  children,
}: React.PropsWithChildren<DragItemProps<T>>) {
  const [dragging, setDragging] = React.useState<DraggingState<T> | null>(null);
  const ref = React.useRef<HTMLDivElement>(null);

  const down = (event: React.PointerEvent) => {
    if (!dragging) {
      const initial = onDragStart();
      setPointerCapture(ref, event.pointerId);
      setDragging({
        startMouseX: event.nativeEvent.clientX,
        startMouseY: event.nativeEvent.clientY,
        initial,
      });
    }
    event.preventDefault();
    event.stopPropagation();
  };

  const up = (event: React.PointerEvent) => {
    if (dragging) {
      releasePointerCapture(ref, event.pointerId);
      setDragging(null);
      if (onDragStop) {
        onDragStop();
      }
    }
    event.preventDefault();
    event.stopPropagation();
  };

  const move = (event: React.PointerEvent) => {
    if (dragging) {
      const deltaX = event.nativeEvent.clientX - dragging.startMouseX;
      const deltaY = event.nativeEvent.clientY - dragging.startMouseY;
      onDrag(deltaX, deltaY, dragging.initial);
    }
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      style={style}
      className={className}
      id={id}
      ref={ref}
      onPointerDown={down}
      onPointerUp={up}
      onLostPointerCapture={up}
      onPointerMove={move}
    >
      {children}
    </div>
  );
}

export const DragItem = React.memo(DragItemNoMemo) as typeof DragItemNoMemo;
