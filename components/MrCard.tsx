"use client";

import { Github, Linkedin, ExternalLink, Youtube, Laptop } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { useState } from "react";

const mrData = {
  name: "Mr Saleem",
  title: "Full Stack Developer",
  photoUrl: "/images/mr.png",
  portfolioUrl: "http://mrsaleem.vercel.app",
  githubUrl: "https://github.com/saleemullahkhansaleem",
  linkedinUrl: "https://www.linkedin.com/in/mrsaleem/",
  whatsappUrl:
    "https://wa.me/92405045889?text=Hi%20Saleem%2C%0A%0AI%20found%20you%20through%20the%20D-DOWNTOWN%20website%20(https://d-downtown.com)%0A%0AI'm%20interested%20in%20discussing%20a%20project.%20Are%20you%20available%20for%20a%20quick%20chat%3F",
  fiverrUrl: "https://www.fiverr.com/saliyousafzai",
  youtubeUrl: "https://www.youtube.com/@saleemullahkhansaleem",
};

export default function MrCard() {
  const [isHovered, setIsHovered] = useState(false);
  const {
    name,
    title,
    photoUrl,
    portfolioUrl,
    githubUrl,
    linkedinUrl,
    whatsappUrl,
    fiverrUrl,
    youtubeUrl,
  } = mrData;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative z-50"
    >
      <div className="inline-block">
        <p className="text-xs flex items-center gap-1">
          <Laptop size={16} className="text-primary" /> Develop by{" "}
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
          >
            {name}
          </a>
        </p>
      </div>

      {/* Hover Card */}
      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 dark">
          <div className="mb-3 w-72 rounded-2xl bg-card/95 backdrop-blur-xl shadow-2xl p-6 border border-border z-50">
            <div className="flex flex-col items-center space-y-4">
              {/* Profile Image with Glow Effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <img
                  src={photoUrl}
                  alt={name}
                  width={100}
                  height={100}
                  className="relative rounded-full border-4 border-primary/50 shadow-xl ring-4 ring-primary/20"
                />
              </div>

              {/* Name and Title */}
              <div className="text-center space-y-1">
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {title}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-2">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-blue-600/20 text-muted-foreground hover:text-blue-400 transition-all duration-200 hover:scale-110"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-red-600/20 text-muted-foreground hover:text-red-400 transition-all duration-200 hover:scale-110"
                  title="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-green-600/20 text-muted-foreground hover:text-green-400 transition-all duration-200 hover:scale-110"
                  title="WhatsApp"
                >
                  <WhatsAppIcon size={18} />
                </a>
              </div>

              {/* Fiverr Link */}
              <a
                href={fiverrUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors font-bold"
                title="Hire me on Fiverr"
              >
                fiverr.
              </a>

              {/* Portfolio Button */}
              <a
                href={portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-primary/25"
              >
                Visit my website
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-px w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-border"></div>
          </div>
        </div>
      )}
    </div>
  );
}
