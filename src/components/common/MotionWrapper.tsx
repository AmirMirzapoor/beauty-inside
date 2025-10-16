'use client';

import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import type { CSSProperties, ElementType, ReactNode } from 'react';

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  tag?: ElementType;
  className?: string;
  style?: CSSProperties;
}

const MotionWrapper = ({
  children,
  tag = 'div',
  className,
  style,
  ...props
}: MotionWrapperProps) => {
  const MotionComponent = motion[tag as keyof typeof motion] as typeof motion.div;

  if (!MotionComponent) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <MotionComponent className={className} style={style} {...props}>
      {children}
    </MotionComponent>
  );
};

export default MotionWrapper;