import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaReact, FaNodeJs, FaGithub, FaFigma, FaBrain, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiDiscord } from "react-icons/si";
import { BsRobot } from "react-icons/bs";
import { useTranslation } from "react-i18next";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: React.ReactNode;
}

interface SkillsSectionProps {
  title?: string;
  description?: string;
  skills?: Skill[];
  categories?: string[];
}

const defaultSkills: Skill[] = [
  { name: "HTML", level: 85, category: "Frontend", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: 80, category: "Frontend", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "React", level: 75, category: "Frontend", icon: <FaReact className="text-blue-400" /> },
  { name: "TypeScript", level: 70, category: "Frontend", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", level: 80, category: "Frontend", icon: <SiTailwindcss className="text-teal-400" /> },

  { name: "Node.js", level: 60, category: "Backend", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Discord.js", level: 40, category: "Backend", icon: <SiDiscord className="text-purple-500" /> },

  { name: "UI/UX Design", level: 65, category: "Other Skills", icon: <FaFigma className="text-orange-500" /> },
  { name: "GitHub", level: 70, category: "Other Skills", icon: <FaGithub className="text-gray-800" /> },

  { name: "AI Tools", level: 50, category: "AI", icon: <BsRobot className="text-blue-600" /> },
  { name: "Prompt Engineering", level: 45, category: "AI", icon: <FaBrain className="text-purple-600" /> },
];

const defaultCategories = ["Frontend", "Backend", "Other Skills", "AI"];

const animations = {
  container: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  },
  item: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  },
} as const;

const SkillCard: React.FC<{ category: string; skills: Skill[] }> = ({ category, skills }) => {
  const { t } = useTranslation();
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
      <CardContent className="p-6">
        <motion.div variants={animations.item}>
          <Badge className="mb-4" variant="secondary">
            {t(`skills.categories.${category.toLowerCase().replace(/\s+/g, '')}`)}
          </Badge>
          <div className="space-y-6">
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  variants={animations.item}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 transition-all duration-500 ease-out"
                  />
                </motion.div>
              ))
            ) : (
              <p className="text-muted-foreground">No skills available in this category.</p>
            )}
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

const SkillsSection: React.FC<SkillsSectionProps> = ({
  skills = defaultSkills,
  categories = defaultCategories,
}) => {
  const { t } = useTranslation();

  const skillsByCategory = useMemo(() => {
    return categories.map(category => ({
      category,
      skills: skills.filter(skill => skill.category === category),
    }));
  }, [categories, skills]);

  return (
    <section className="py-16 px-4 md:px-8 bg-background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={animations.container}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h2 
            variants={animations.item} 
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t('skills.title')}
          </motion.h2>
          <motion.p 
            variants={animations.item} 
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {t('skills.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsByCategory.map(({ category, skills }) => (
            <SkillCard 
              key={category} 
              category={category} 
              skills={skills} 
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;