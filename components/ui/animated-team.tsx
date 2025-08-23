"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  specialization: string;
  education: string;
  experience: string;
  description: string;
  image: string;
};

export const AnimatedTeam = ({
  team,
  autoplay = false,
}: {
  team: TeamMember[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % team.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + team.length) % team.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50;
    const { offset } = info;
    
    if (offset.x > swipeThreshold) {
      // Swipe right - go to previous
      handlePrev();
    } else if (offset.x < -swipeThreshold) {
      // Swipe left - go to next
      handleNext();
    }
  };

  // Generate random rotations only on client side
  const randomRotations = useMemo(() => {
    if (!isClient) return team.map(() => 0);
    return team.map(() => Math.floor(Math.random() * 21) - 10);
  }, [team.length, isClient]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="mx-auto max-w-sm px-4 py-12 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12 md:py-20">
      {/* Mobile Version with Swipe */}
      <div className="block md:hidden">
        <div className="relative w-full mb-8">
          {/* Image Container */}
          <div className="relative h-80 w-full mb-6">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              className="relative h-full w-full"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={team[active].image}
                    alt={team[active].name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Mobile Info */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-center px-4"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {team[active].name}
            </h3>
            <p className="text-sm text-primary font-semibold mb-4">
              {team[active].role}
            </p>
            
            <div className="space-y-3 mb-6">
              <div>
                <h4 className="font-semibold text-sm text-primary mb-1">Especialización</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{team[active].specialization}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm text-primary mb-1">Formación</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{team[active].education}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-sm text-primary mb-1">Experiencia</h4>
                <p className="text-sm font-medium text-primary">{team[active].experience}</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 px-4">
              {team[active].description}
            </p>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
            
            <div className="flex gap-2">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === active ? "bg-[#BF7F11]" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:block">
        <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {team.map((member, index) => (
                  <motion.div
                    key={member.image}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotations[index],
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotations[index],
                      zIndex: isActive(index)
                        ? 40
                        : team.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotations[index],
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col justify-between py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {team[active].name}
              </h3>
              <p className="text-sm text-primary font-semibold mb-4">
                {team[active].role}
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-1">Especialización</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{team[active].specialization}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-1">Formación</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{team[active].education}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-1">Experiencia</h4>
                  <p className="text-sm font-medium text-primary">{team[active].experience}</p>
                </div>
              </div>

              <motion.p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {team[active].description.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            
            <div className="flex items-center justify-between pt-8">
              <div className="flex gap-2">
                {team.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                      index === active ? "bg-[#BF7F11]" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <ChevronLeft className="h-5 w-5 transition-transform duration-300 group-hover/button:rotate-12" />
                </button>
                <button
                  onClick={handleNext}
                  className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
