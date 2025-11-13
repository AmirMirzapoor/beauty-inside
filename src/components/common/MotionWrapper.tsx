'use client';

import { motion, type MotionProps } from 'framer-motion';
import { memo } from 'react';
import type { ElementType, ReactNode, CSSProperties } from 'react';

type MotionTag = keyof typeof motion;

interface MotionWrapperProps<T extends MotionTag = 'div'> extends Omit<MotionProps, 'ref'> {
  children: ReactNode;
  tag?: T;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

const MotionWrapper = memo(<T extends MotionTag = 'div'>({
  children,
  tag = 'div' as T,
  className,
  style,
  id,
  ...motionProps
}: MotionWrapperProps<T>) => {
  const MotionComponent = motion[tag] as ElementType;

  if (!MotionComponent) {
    const Fallback = tag as ElementType;
    console.warn(`Motion tag "${tag}" not found, falling back to regular element`);
    return (
      <Fallback id={id} className={className} style={style}>
        {children}
      </Fallback>
    );
  }

  return (
    <MotionComponent 
      id={id} 
      className={className} 
      style={style} 
      {...motionProps}
    >
      {children}
    </MotionComponent>
  );
});

MotionWrapper.displayName = 'MotionWrapper';

export default MotionWrapper;