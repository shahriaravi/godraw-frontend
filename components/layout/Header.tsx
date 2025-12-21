"use client";

import SketchyButton from "@/components/ui/SketchyButton";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="hidden md:flex relative w-full justify-center px-4 pt-10"
      >
        <nav
          className={cn(
            "bg-card/95 backdrop-blur-md border-3 border-primary px-8 py-3",
            "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]",
            "shadow-sketchy"
          )}
        >
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <motion.div
                whileHover={{ rotate: [-5, 5, 0], scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative w-8 h-8"
              >
                <Image
                  src="/images/icon-512.png"
                  alt="GoDraw Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              <span className="text-xl font-bold text-primary tracking-tight">
                Go<span className="text-secondary">Draw</span>
              </span>
            </Link>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="relative group flex flex-col items-center justify-center px-1"
                    whileHover="hover"
                  >
                    <span className="text-foreground/80 group-hover:text-primary font-bold text-sm transition-colors relative z-10">
                      {link.name}
                    </span>
                    <div className="absolute -bottom-2 left-0 w-full h-3 pointer-events-none z-0">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                      >
                        <motion.path
                          d="M0 5 Q 50 10 100 5"
                          fill="none"
                          stroke="hsl(var(--secondary))"
                          strokeWidth="3"
                          strokeLinecap="round"
                          variants={{
                            hover: { pathLength: 1, opacity: 1 },
                            initial: { pathLength: 0, opacity: 0 }
                          }}
                          initial="initial"
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="w-0.5 h-6 bg-primary/10 rotate-12 rounded-full" />

              <div className="flex items-center gap-3">
                <SketchyButton
                  variant="primary"
                  size="sm"
                  className="text-sm px-6 py-2"
                >
                  Log in
                </SketchyButton>
              </div>
            </div>
          </div>
        </nav>
      </motion.header>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="md:hidden relative w-full px-4 pt-6"
      >
        <nav
          className={cn(
            "bg-card/95 backdrop-blur-md border-3 border-primary px-4 py-3",
            "rounded-[255px_15px_225px_15px/15px_225px_15px_255px]",
            "shadow-sketchy"
          )}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: [-5, 5, 0], scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative w-7 h-7"
              >
                <Image
                  src="/images/icon-512.png"
                  alt="GoDraw Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              <span className="text-lg font-bold text-primary tracking-tight">
                Go<span className="text-secondary">Draw</span>
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "mt-3 bg-card/95 backdrop-blur-md border-3 border-primary p-4",
                "rounded-[25px_15px_25px_15px/15px_25px_15px_25px]",
                "shadow-sketchy relative z-50"
              )}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-foreground/80 hover:text-primary hover:bg-primary/5 font-bold text-base py-3 px-4 rounded-lg transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <div className="h-0.5 bg-primary/10 my-2 rounded-full" />

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <SketchyButton
                    variant="primary"
                    size="sm"
                    className="w-full text-base py-3"
                  >
                    Log in
                  </SketchyButton>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 bg-background/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
}