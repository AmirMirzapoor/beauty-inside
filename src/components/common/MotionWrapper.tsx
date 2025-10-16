"use client";

import { motion, type MotionProps, type HTMLMotionProps } from "framer-motion";
import type { ElementType, ReactNode, CSSProperties } from "react";

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  tag?: keyof typeof motion; // نوع تگ (مثل 'div', 'section', 'article')
  className?: string;
  style?: CSSProperties;
}

const MotionWrapper = ({
  children,
  tag = "div",
  className,
  style,
  ...props
}: MotionWrapperProps) => {
  // تبدیل ایمن motion object به رکورد تگ‌ها
  const MotionComponents = motion as unknown as Record<string, ElementType>;
  const MotionComponent = MotionComponents[tag] ?? motion.div;

  return (
    <MotionComponent
      className={className}
      style={style}
      {...(props as HTMLMotionProps<"div">)}
    >
      {children}
    </MotionComponent>
  );
};

export default MotionWrapper;
