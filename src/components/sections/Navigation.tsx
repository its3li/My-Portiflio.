import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

interface NavigationProps {
  isDarkMode?: boolean;
  onThemeToggle?: () => void;
  menuItems?: Array<{
    label: string;
    href: string;
  }>;
}

const Navigation = ({
  isDarkMode = false,
  onThemeToggle = () => {},
  menuItems = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
}: NavigationProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar-EG' ? 'en' : 'ar-EG';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar-EG' ? 'rtl' : 'ltr';
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }

      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 dark:bg-background/20 backdrop-blur-md border-b shadow-lg"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4" dir="ltr">
        <motion.a
          href="#hero"
          onClick={(e) => handleScroll(e, "#hero")}
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden"
        ></motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center mx-auto">
          <motion.div
            className="bg-background/50 backdrop-blur-sm border rounded-full px-6 py-2 shadow-lg dark:bg-background/20 dark:border-border/50"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <nav className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={cn(
                    "relative text-sm font-medium transition-colors px-2 py-1 rounded-md",
                    activeSection === item.href.replace("#", "")
                      ? "text-primary"
                      : "hover:text-primary",
                  )}
                  initial={false}
                  animate={{
                    color:
                      activeSection === item.href.replace("#", "")
                        ? "hsl(var(--primary))"
                        : "",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                      layoutId="activeSection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.a>
              ))}
              <div className="flex items-center gap-2 border-l border-border/50 pl-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleLanguage}
                  className="hover:bg-primary/10 transition-colors"
                >
                  <Languages className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onThemeToggle}
                  className="hover:bg-primary/10 transition-colors"
                >
                  {isDarkMode ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </nav>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden w-full">
          <motion.div
            className="bg-background/50 backdrop-blur-sm border rounded-full px-3 py-2 shadow-lg dark:bg-background/20 dark:border-border/50 mx-2 sm:mx-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <nav className="flex items-center justify-between space-x-1 sm:space-x-2">
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={cn(
                    "relative text-[10px] sm:text-xs font-medium transition-colors px-1.5 sm:px-2 py-1 rounded-md whitespace-nowrap",
                    activeSection === item.href.replace("#", "")
                      ? "text-primary"
                      : "hover:text-primary",
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.href.replace("#", "") && (
                    <motion.div
                      className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                      layoutId="activeSection-mobile"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.a>
              ))}
              <div className="border-l border-border/50 pl-1 sm:pl-2 flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleLanguage}
                  className="h-7 w-7 hover:bg-primary/10 transition-colors"
                >
                  <Languages className="h-3.5 w-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onThemeToggle}
                  className="h-7 w-7 hover:bg-primary/10 transition-colors"
                >
                  {isDarkMode ? (
                    <Sun className="h-3.5 w-3.5" />
                  ) : (
                    <Moon className="h-3.5 w-3.5" />
                  )}
                </Button>
              </div>
            </nav>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navigation;