"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { MouseEvent } from "react"
import SketchyButton from "@/components/ui/SketchyButton"
import SketchyBadge from "@/components/ui/SketchyBadge"
import { 
  Zap, 
  MousePointer2, 
  PencilLine, 
  PenTool, 
  Layers, 
  Palette, 
  Ratio,
  Shapes,
  Eraser,
  StickyNote,
  Compass
} from "lucide-react"

export default function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 200 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const moveX1 = useTransform(springX, [-0.5, 0.5], [60, -60])
  const moveY1 = useTransform(springY, [-0.5, 0.5], [60, -60])
  const moveX2 = useTransform(springX, [-0.5, 0.5], [-40, 40])
  const moveY2 = useTransform(springY, [-0.5, 0.5], [-40, 40])
  const moveX3 = useTransform(springX, [-0.5, 0.5], [90, -90])
  const moveY3 = useTransform(springY, [-0.5, 0.5], [70, -70])
  const moveX4 = useTransform(springX, [-0.5, 0.5], [-70, 70])
  const moveY4 = useTransform(springY, [-0.5, 0.5], [-50, 50])

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-dots flex flex-col items-center justify-start"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ x: moveX1, y: moveY1 }}
          className="absolute top-20 left-[5%] text-primary/10"
        >
          <PenTool size={100} strokeWidth={1.5} className="-rotate-12" />
        </motion.div>

        <motion.div 
          style={{ x: moveX2, y: moveY2 }}
          className="absolute top-32 right-[8%] text-secondary/20"
        >
          <Layers size={90} strokeWidth={1.5} className="rotate-12" />
        </motion.div>

        <motion.div 
          style={{ x: moveX3, y: moveY3 }}
          className="absolute bottom-32 left-[10%] text-accent-dark/15"
        >
          <Palette size={110} strokeWidth={1.5} className="-rotate-6" />
        </motion.div>

        <motion.div 
          style={{ x: moveX1, y: moveY2 }}
          className="absolute bottom-48 right-[12%] text-primary-dark/10"
        >
          <Ratio size={80} strokeWidth={1.5} className="rotate-45" />
        </motion.div>

        <motion.div 
          style={{ x: moveX4, y: moveY4 }}
          className="absolute top-24 left-[35%] text-accent/20"
        >
          <StickyNote size={70} strokeWidth={1.5} className="-rotate-6" />
        </motion.div>

        <motion.div 
          style={{ x: moveX2, y: moveY1 }}
          className="absolute bottom-20 left-[40%] text-secondary-dark/15"
        >
          <Shapes size={90} strokeWidth={1.5} className="rotate-12" />
        </motion.div>

        <motion.div 
          style={{ x: moveX3, y: moveY4 }}
          className="absolute top-[40%] left-[2%] text-primary/15"
        >
          <Eraser size={60} strokeWidth={1.5} className="-rotate-45" />
        </motion.div>

        <motion.div 
          style={{ x: moveX4, y: moveY2 }}
          className="absolute top-[45%] right-[2%] text-secondary/20"
        >
          <Compass size={85} strokeWidth={1.5} className="rotate-12" />
        </motion.div>
      </div>

      <div className="sketchy-container relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8 flex justify-center">
            <SketchyBadge variant="primary">
              <Zap className="w-4 h-4 mr-1" />
              Lightning-fast canvas
            </SketchyBadge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Sketch your{" "}
            <span className="relative inline-block">
              <span className="text-primary">ideas</span>
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full h-4"
                viewBox="0 0 200 20"
                fill="none"
              >
                <path
                  d="M3 15 Q 50 5, 100 12 T 197 10"
                  stroke="hsl(var(--primary))"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
            <br />
            at the speed of thought
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            The simplest way to draw, sketch, and take quick notes. 
            No complexity, just a lightning-fast canvas for your creativity.
          </p>

          <div className="flex justify-center mb-24">
            <SketchyButton variant="primary" size="lg" className="text-xl px-10 py-5 flex items-center gap-3">
              <PencilLine className="w-6 h-6" />
              Start Drawing
            </SketchyButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            <motion.div
              whileHover={{ rotate: [-0.2, 0.2, 0], scale: 1.005 }}
              className="bg-card border-3 border-primary rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-sketchy-lg overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-primary/20 bg-muted/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400 border border-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-400 border border-green-500" />
                </div>
                <div className="flex-1 text-center text-sm text-muted-foreground">
                  godraw.app/canvas/untitled
                </div>
              </div>
              
              <div className="relative aspect-video bg-background bg-grid-sketchy p-8 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute inset-0"
                >
                  <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
                    <motion.rect
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                      x="50"
                      y="50"
                      width="200"
                      height="100"
                      rx="10"
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="10 5"
                    />
                    <motion.text
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8 }}
                      x="90"
                      y="105"
                      fill="hsl(var(--primary))"
                      fontSize="18"
                      fontFamily="Shantell Sans"
                      fontWeight="bold"
                    >
                      Big Idea 💡
                    </motion.text>

                    <motion.circle
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      cx="450"
                      cy="120"
                      r="70"
                      stroke="hsl(var(--secondary))"
                      strokeWidth="3"
                      fill="hsl(var(--secondary) / 0.1)"
                    />
                    <motion.text
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2 }}
                      x="405"
                      y="125"
                      fill="hsl(var(--secondary-dark))"
                      fontSize="16"
                      fontFamily="Shantell Sans"
                      fontWeight="bold"
                    >
                      Collaboration
                    </motion.text>

                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 1.5 }}
                      d="M260 100 Q 350 50, 375 110"
                      stroke="hsl(var(--accent-dark))"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, delay: 2.3 }}
                      d="M365 100 L 375 110 L 365 125"
                      stroke="hsl(var(--accent-dark))"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 1.8 }}
                      d="M100 250 Q 250 180, 400 280 T 700 250"
                      stroke="hsl(var(--primary))"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />
                    
                    <motion.rect
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, delay: 2.1 }}
                      x="580"
                      y="60"
                      width="160"
                      height="100"
                      stroke="hsl(var(--accent-dark))"
                      strokeWidth="3"
                      fill="hsl(var(--accent) / 0.2)"
                      rx="2"
                    />
                     <motion.text
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5 }}
                      x="600"
                      y="100"
                      fill="hsl(var(--foreground))"
                      fontSize="14"
                      fontFamily="Shantell Sans"
                    >
                      - Easy to use
                    </motion.text>
                     <motion.text
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.7 }}
                      x="600"
                      y="125"
                      fill="hsl(var(--foreground))"
                      fontSize="14"
                      fontFamily="Shantell Sans"
                    >
                      - No login
                    </motion.text>
                  </svg>
                </motion.div>

                <motion.div
                  animate={{ 
                    x: [0, 150, 300, 200, 450],
                    y: [0, 50, -20, 80, 20],
                  }}
                  transition={{ 
                    duration: 5, 
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                  }}
                  className="absolute top-10 left-10 pointer-events-none z-20"
                >
                  <div className="relative">
                    <MousePointer2 className="w-8 h-8 text-primary fill-primary" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping" />
                    <div className="absolute top-8 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full whitespace-nowrap">
                      You
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none z-20" />
    </section>
  )
}