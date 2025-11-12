'use client';

import { motion, type MotionProps } from 'framer-motion';
import type { ElementType, ReactNode, CSSProperties } from 'react';

type MotionTag = keyof typeof motion;

interface MotionWrapperProps<T extends MotionTag = 'div'> extends MotionProps {
  children: ReactNode;
  tag?: T;
  className?: string;
  style?: CSSProperties;
}

const MotionWrapper = <T extends MotionTag = 'div'>({
  children,
  tag = 'div' as T,
  className,
  style,
  ...motionProps
}: MotionWrapperProps<T>) => {
  const MotionComponent = motion[tag] as ElementType;

  if (!MotionComponent) {
    const Fallback = tag as ElementType;
    return (
      <Fallback className={className} style={style}>
        {children}
      </Fallback>
    );
  }

  return (
    <MotionComponent className={className} style={style} {...motionProps}>
      {children}
    </MotionComponent>
  );
};

export default MotionWrapper;