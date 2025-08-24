"use client";
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  // Memoizar los breakpoints para evitar recálculos
  const cardsBreakpoints = useMemo(() => 
    content.map((_, index) => index / cardLength), 
    [content, cardLength]
  );

  // Optimizar el cálculo del breakpoint más cercano
  const findClosestBreakpoint = useCallback((latest: number) => {
    let closestIndex = 0;
    let minDistance = Math.abs(latest - cardsBreakpoints[0]);
    
    for (let i = 1; i < cardsBreakpoints.length; i++) {
      const distance = Math.abs(latest - cardsBreakpoints[i]);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = i;
      }
    }
    return closestIndex;
  }, [cardsBreakpoints]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const closestBreakpointIndex = findClosestBreakpoint(latest);
    setActiveCard(closestBreakpointIndex);
  });

  // Colores corporativos de Lex Realis - Memoizados para mejor rendimiento
  const backgroundColors = useMemo(() => [
    "#BF7F11", // Color principal dorado
    "#A66B0F", // Variación más oscura
    "#8B5A0D", // Variación aún más oscura
  ], []);

  const linearGradients = useMemo(() => [
    "linear-gradient(to bottom right, #BF7F11, #A66B0F)", // Dorado principal
    "linear-gradient(to bottom right, #A66B0F, #8B5A0D)", // Dorado oscuro
    "linear-gradient(to bottom right, #BF7F11/90, #A66B0F/90)", // Dorado con transparencia
  ], []);

  // Memoizar el gradiente actual para evitar recálculos
  const backgroundGradient = useMemo(() => 
    linearGradients[activeCard % linearGradients.length], 
    [linearGradients, activeCard]
  );

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <motion.div 
              key={item.title + index} 
              className="my-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-2xl font-bold text-white">
                {item.title}
              </h2>
              <p className="text-lg mt-10 max-w-sm text-gray-100">
                {item.description}
              </p>
            </motion.div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName,
        )}
        key={activeCard} // Forzar re-render solo cuando cambia la tarjeta activa
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};
