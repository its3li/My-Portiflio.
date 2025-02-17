import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function Hero() {
  const titles = [
    "Front-End Developer",
    "HTML Dev",
    "Web Dev",
    "React Dev",
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState("");
  const [typing, setTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (typing) {
      if (currentIndex < titles[currentTitleIndex].length) {
        timeout = setTimeout(() => {
          setCurrentTitle((prevTitle) => prevTitle + titles[currentTitleIndex][currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 100); // Typing speed
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, 2000); // Pause before deleting
      }
    } else {
      if (currentTitle.length > 0) {
        timeout = setTimeout(() => {
          setCurrentTitle((prevTitle) => prevTitle.slice(0, -1));
        }, 50); // Deleting speed
      } else {
        setTyping(true);
        setCurrentIndex(0);
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentTitleIndex, currentTitle, currentIndex, typing, titles]);


  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-[1] dark:bg-grid-small-black/[0.2]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container text-center space-y-6 relative"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {currentTitle}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A front-end developer from Egypt, passionate about creating beautiful, interactive experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg">View Projects</Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </section>
  );
}
