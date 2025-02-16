import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Check, Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useTranslation } from "react-i18next";

interface ContactSectionProps {
  email?: string;
  phone?: string;
  location?: string;
}

const ContactSection = ({
  email = "its.3li.03@gmail.com",
  phone = "01120952576",
  location = "Giza, Egypt",
}: ContactSectionProps) => {
  const { toast } = useToast();
  const { t } = useTranslation();

  return (
    <section className="w-full h-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="max-w-lg mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{t('contact.title')}</h2>
          <p className="text-muted-foreground text-center mb-12">
            {t('contact.description')}
          </p>

          {/* Contact Info Box */}
          <Card className="shadow-xl">
            <CardContent className="p-6 space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{t('contact.email')}</h3>
                  <div className="flex items-center">
                    <a
                      href={`mailto:${email}?subject=Project%20Inquiry`}
                      className="text-muted-foreground hover:text-primary transition-colors mr-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {email}
                    </a>
                    <Copy
                      className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-primary"
                      onClick={() => {
                        navigator.clipboard.writeText(email);
                        toast({
                          description: (
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-500" />
                              Email copied to clipboard!
                            </div>
                          ),
                          duration: 2000,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{t('contact.phone')}</h3>
                  <p
                    className="text-muted-foreground cursor-pointer hover:text-primary transition-colors"
                    onClick={() => {
                      navigator.clipboard.writeText(phone);
                      toast({
                        description: (
                          <div className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-green-500" />
                            Phone number copied to clipboard!
                          </div>
                        ),
                        duration: 2000,
                      });
                    }}
                  >
                    {phone}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{t('contact.location')}</h3>
                  <p className="text-muted-foreground">{location}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">© 2025 Ali. {t('contact.rights')}</p>
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-primary/10 transition-all"
                onClick={() => window.open("https://github.com/its3li", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      <Toaster />
    </section>
  );
};

export default ContactSection;