"use client";
import React, { CSSProperties, ComponentProps, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import useFramerAnimations from "./useFramerAnimations";

interface ScrollAnimationWrapperProps extends ComponentProps<"div"> {
  rest?: any;
  viewport?: boolean;
  viewportLarge?: boolean;
  customViewport?: string;
  animation?: "default" | "footer" | "partners";
  variants?: boolean;
  initial?: boolean;
  custom?: number;
  className?: string;
  style?: CSSProperties | undefined;
  tag?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "p"
    | "li"
    | "ul"
    | "section"
    | "button"
    | "video"
    | "div";
  type?: string;
}

const MotionWrapper = ({
  children,
  rest,
  animation = "default",
  variants = false,
  initial = false,
  custom = 0,
  className,
  viewport = false,
  viewportLarge = false,
  customViewport,
  style,
  tag = "div",
}: PropsWithChildren<ScrollAnimationWrapperProps>) => {
  const defaultAnimation = useFramerAnimations();
  const footerAnimation = useFramerAnimations("lowYMove");
  const partnersAnimation = useFramerAnimations("partnersDelay");

  const resultAnimation =
    animation === "default"
      ? defaultAnimation
      : animation === "footer"
      ? footerAnimation
      : animation === "partners"
      ? partnersAnimation
      : defaultAnimation;

  const getViewportStyles = () => {
    if (customViewport) {
      return { margin: customViewport }; // Not working
    } else if (viewport) {
      return { margin: `20% 0% -10% 0%` };
    } else if (viewportLarge) {
      return { margin: `20% 0% -20% 0%` };
    }
    return null;
  };

  const motionProps = {
    ...(initial && { initial: "hidden", whileInView: "visible" }),
    ...(variants && { variants: resultAnimation }),
    ...(custom && { custom }),
    className,
    ...(viewport || viewportLarge ? { viewport: getViewportStyles() } : {}),
    style,
    ...rest,
  };

  const MotionTag = motion[tag] || motion.div;

  return <MotionTag {...motionProps}>{children}</MotionTag>;
};

export default MotionWrapper;
