import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Scene from "../3d/Scene";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  nameLast?: string;
  githubUrl?: string;
  onExploreClick?: () => void;
}

const HeroSection = ({
  nameLast = "AlI",
  githubUrl = "https://github.com/its3li",
  onExploreClick = () => {},
}: HeroSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen w-full bg-background relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Background Scene */}
      <Scene />

      {/* Animated Orbs */}
      <div className="orb orb-1 absolute w-[300px] h-[300px] top-[10%] left-[10%] rounded-full blur-[40px] opacity-30 bg-gradient-radial from-purple-500/80 to-purple-500/0 animate-float-slow" />
      <div className="orb orb-2 absolute w-[400px] h-[400px] bottom-[10%] right-[10%] rounded-full blur-[40px] opacity-30 bg-gradient-radial from-purple-500/80 to-purple-500/0 animate-float-medium" />
      <div className="orb orb-3 absolute w-[200px] h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40px] opacity-30 bg-gradient-radial from-purple-500/80 to-purple-500/0 animate-float-fast" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-center"
        >
          <span className="text-foreground/90">I'm </span>
          <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent animate-glow font-eavm">
            {nameLast}
          </span>
          <div className="text-3xl sm:text-4xl md:text-5xl mt-2 text-foreground/90">
            {t('hero.title')}
          </div>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          {t('hero.description')}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button 
            size="lg" 
            onClick={onExploreClick}
            className="btn-hover btn-glow bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-500 hover:to-purple-300 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <Code className="mr-2 h-5 w-5" />
            {t('hero.viewWork')}
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open(githubUrl, "_blank")}
            className="btn-hover glass-effect hover:bg-purple-500/20 border-purple-500/20 bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <Github className="h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
