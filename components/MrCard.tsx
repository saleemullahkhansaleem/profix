"use client";

import { Github, Linkedin, ExternalLink, Youtube, Laptop } from "lucide-react";
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
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
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
