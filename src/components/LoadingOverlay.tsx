// components/LoadingOverlay.tsx
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";
import { profile } from "@/data/profile";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Variant = "blueprint" | "mosaic";

interface LoadingOverlayProps {
  onComplete: () => void;
  variant?: Variant;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  onComplete,
  variant = "blueprint",
}) => {
  const { progress, loaded, total } = useProgress();
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  // Flatten skills
  const allSkills = useMemo(
    () =>
      [
        ...profile.languages,
        ...profile.frameworks,
        ...profile.cloud,
        ...profile.tools,
      ]
        .map((s) => s.label)
        .slice(0, 24),
    []
  );

  // Auto-complete logic
  useEffect(() => {
    // Safety timeout: close in 4.5s even if assets are lagging
    const timeout = setTimeout(() => setIsVisible(false), 4500);

    // Close quickly if everything finished
    if (progress === 100 && loaded === total && total > 0) {
      const done = setTimeout(() => setIsVisible(false), 900);
      return () => clearTimeout(done);
    }

    return () => clearTimeout(timeout);
  }, [progress, loaded, total]);

  // Fire onComplete after fade
  useEffect(() => {
    if (!isVisible) {
      const t = setTimeout(onComplete, 500);
      return () => clearTimeout(t);
    }
  }, [isVisible, onComplete]);

  // Reduced-motion fallback (clean, accessible)
  if (prefersReducedMotion) {
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center space-y-6">
              <h1 className="text-display">{profile.name}</h1>
              <p className="text-sm text-muted-foreground">
                Preparing your experience…
              </p>
              <div className="w-64 h-2 bg-muted rounded-full mx-auto overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {Math.round(progress)}% • {allSkills[progress % allSkills.length] || "Loading"}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Subtle colored glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-primary/15 blur-3xl rounded-full" />
            <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-secondary/15 blur-3xl rounded-full" />
          </div>

          {variant === "blueprint" ? (
            <BlueprintLoader name={profile.name} progress={progress} />
          ) : (
            <MosaicLoader skills={allSkills} progress={progress} />
          )}

          {/* Global progress indicator */}
          <div className="absolute bottom-14 w-full flex flex-col items-center gap-3">
            <div className="w-80 h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.p
              className="text-xs text-muted-foreground font-mono"
              key={Math.floor(progress)} // refresh text subtly as % changes
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              aria-live="polite"
            >
              {Math.round(progress)}% • Optimizing portfolio assets…
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* =============== Variant 1: Blueprint Sketch =============== */
const BlueprintLoader: React.FC<{ name: string; progress: number }> = ({
  name,
  progress,
}) => {
  // Animated stroke helper
  const strokeAnim = (delay = 0) => ({
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration: 1.2, ease: [0.42, 0, 0.58, 1] as any, delay },
  });

  const initials = useMemo(
    () =>
      name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase(),
    [name]
  );

  return (
    <div className="relative text-center space-y-10">
      {/* “Drafting” header */}
      <div className="relative inline-block">
        <motion.h1
          className="text-display tracking-wide"
          initial={{ letterSpacing: "0.5em", opacity: 0 }}
          animate={{ letterSpacing: "0.02em", opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {name}
        </motion.h1>

        {/* Moving guideline (drafting shimmer) */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* SVG “blueprint” of devices */}
      <div className="relative w-[520px] h-[260px] mx-auto">
        <svg
          viewBox="0 0 520 260"
          className="w-full h-full"
          aria-label="Blueprint device wireframes"
        >
          {/* Grid */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" className="text-primary/15" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Laptop outline */}
          <motion.path
            d="M60 60 H320 V170 H60 Z M40 170 H340"
            fill="none"
            stroke="currentColor"
            className="text-primary"
            strokeWidth="2"
            strokeLinecap="round"
            {...strokeAnim(0.1)}
          />
          {/* Phone outline */}
          <motion.rect
            x="360"
            y="70"
            width="90"
            height="150"
            rx="14"
            ry="14"
            fill="none"
            stroke="currentColor"
            className="text-secondary"
            strokeWidth="2"
            {...strokeAnim(0.3)}
          />
          {/* Cursor / pen */}
          <motion.circle
            cx={120 + (progress * 1.6)}
            cy={100 + Math.sin(progress / 8) * 5}
            r="4"
            className="text-primary"
            fill="currentColor"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Initials in the “screen” */}
          <motion.text
            x="190"
            y="130"
            textAnchor="middle"
            className="fill-current text-primary"
            style={{ fontSize: 36, fontWeight: 700 }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {initials}
          </motion.text>

          {/* Guiding dimensions */}
          <motion.path
            d="M60 50 V60 M320 50 V60 M60 55 H320"
            fill="none"
            stroke="currentColor"
            className="text-primary/60"
            strokeWidth="1"
            {...strokeAnim(0.6)}
          />
          <motion.path
            d="M350 70 H360 M350 220 H360 M355 70 V220"
            fill="none"
            stroke="currentColor"
            className="text-secondary/60"
            strokeWidth="1"
            {...strokeAnim(0.8)}
          />
        </svg>
      </div>

      <p className="text-sm text-muted-foreground">
        Drafting interface • Aligning grids • {Math.round(progress)}%
      </p>
    </div>
  );
};

/* =============== Variant 2: Mosaic Skill Grid =============== */
const MosaicLoader: React.FC<{ skills: string[]; progress: number }> = ({
  skills,
  progress,
}) => {
  // Build a neat grid (6 x 4 by default)
  const cols = 6;
  const rows = 4;
  const total = cols * rows;
  const items = useMemo(() => {
    const base = [...skills];
    while (base.length < total) base.push(...skills);
    return base.slice(0, total);
  }, [skills, total]);

  return (
    <div className="relative">
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-center mb-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Curating your workspace…
      </motion.h2>

      <div
        className="grid gap-2 mx-auto"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          width: cols * 120,
          maxWidth: "92vw",
        }}
      >
        {items.map((label, i) => {
          const delay = (i % cols) * 0.03 + Math.floor(i / cols) * 0.03;
          const flip = {
            initial: { rotateY: 90, opacity: 0, y: 8 },
            animate: { rotateY: 0, opacity: 1, y: 0 },
            transition: { duration: 0.45, delay },
          };
          return (
            <motion.div
              key={`${label}-${i}`}
              className="h-16 sm:h-20 rounded-xl border bg-card/80 backdrop-blur text-sm sm:text-base flex items-center justify-center px-3 text-center"
              {...flip}
              whileHover={{ scale: 1.03 }}
            >
              <span className="truncate">{label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Sweep highlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-120%" }}
        animate={{ x: "120%" }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
      />

      {/* Collapse-out when nearly done */}
      <AnimatePresence>
        {progress > 92 && (
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0.2, 1] }}
          />
        )}
      </AnimatePresence>

      <p className="mt-8 text-sm text-muted-foreground text-center">
        Loading assets • {Math.round(progress)}%
      </p>
    </div>
  );
};
