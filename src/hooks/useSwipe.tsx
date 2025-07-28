import { useState, useCallback } from 'react';
import { PanInfo, useAnimation } from 'framer-motion';

interface SwipeHandlers {
  onDragEnd: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
  onViewProfile: () => void;
  x: number;
}

export const useSwipe = (
  onLike: () => void,
  onPass: () => void,
  onViewProfile: () => void
): SwipeHandlers => {
  const [x, setX] = useState(0);
  const controls = useAnimation();

  const onDragEnd = useCallback(
    async (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const threshold = 100;

      if (info.offset.x > threshold) {
        await controls.start({ x: '100%', opacity: 0 });
        onLike();
      } else if (info.offset.x < -threshold) {
        await controls.start({ x: '-100%', opacity: 0 });
        onPass();
      } else {
        controls.start({ x: 0, opacity: 1 });
      }
      setX(0);
    },
    [controls, onLike, onPass]
  );

  return {
    onDragEnd,
    onViewProfile,
    x,
  };
};
