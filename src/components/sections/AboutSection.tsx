import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem = ({ year, title, description }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative flex items-start"
  >
    <div className="relative w-6 flex justify-center">
      <div className="w-3 h-3 bg-primary rounded-full" />
    </div>
    <div className="ml-4 flex-1">
      <Card className="mb-8">
        <CardContent className="pt-6">
          <Badge variant="outline" className="mb-2">
            {year}
          </Badge>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  </motion.div>
);

const AboutSection = () => {
  const { t } = useTranslation();

  const timeline = [
    {
      year: "2022",
      title: t('about.timeline.2022.title'),
      description: t('about.timeline.2022.description'),
    },
    {
      year: "2023",
      title: t('about.timeline.2023.title'),
      description: t('about.timeline.2023.description'),
    },
    {
      year: "2024",
      title: t('about.timeline.2024.title'),
      description: t('about.timeline.2024.description'),
    },
    {
      year: "2025",
      title: t('about.timeline.2025.title'),
      description: t('about.timeline.2025.description'),
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-xl text-muted-foreground mb-8">{t('about.subtitle')}</p>
          <Card className="mb-16">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('about.bio') }} />
            </CardContent>
          </Card>
        </div>

        <div className="relative flex flex-col items-start pl-3">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
