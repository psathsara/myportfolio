"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA as STATIC_DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const [data, setData] = useState<any>(STATIC_DATA);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentWorkPage, setCurrentWorkPage] = useState(1);

  const projectsPerPage = 4;
  const workPerPage = 4;

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('/api/admin/resume');
        if (response.ok) {
          const dbData = await response.json();
          if (dbData && dbData.name) {
            setData(dbData);
          }
        }
      } catch (error) {
        console.error('Failed to fetch dynamic portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  const projects = data.projects || [];
  const work = data.work || [];
  const education = data.education || [];
  const skills = data.skills || [];
  const hackathons = data.hackathons || [];

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + projectsPerPage);

  const totalWorkPages = Math.ceil(work.length / workPerPage);
  const workStartIndex = (currentWorkPage - 1) * workPerPage;
  const currentWork = work.slice(workStartIndex, workStartIndex + workPerPage);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 pb-20 py-12 sm:py-24">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-br from-black to-gray-600 dark:from-white dark:to-gray-400"
                yOffset={8}
                text={`Hi, I'm ${data.name.split(" ")[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl text-muted-foreground font-medium"
                delay={BLUR_FADE_DELAY}
                text={data.description}
              />
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: [0, -8, 0]
              }}
              transition={{
                delay: BLUR_FADE_DELAY,
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                opacity: { duration: 0.5, delay: BLUR_FADE_DELAY },
                scale: { duration: 0.5, delay: BLUR_FADE_DELAY }
              }}
            >
              <Avatar className="size-28 border-2 border-primary/10 shadow-2xl">
                <AvatarImage alt={data.name} src={data.avatarUrl} className="object-cover" />
                <AvatarFallback className="bg-primary/5 text-xl font-bold">{data.initials}</AvatarFallback>
              </Avatar>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-8 h-px bg-primary/20"></span>
            About Me
          </h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-relaxed">
            {data.summary}
          </Markdown>
        </BlurFade>
      </section>

      <section id="work">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                  Professional Journey
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Work Experience
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="flex min-h-0 flex-col gap-y-4 max-w-[800px] mx-auto">
            {currentWork.map((item: any, id: number) => (
              <BlurFade
                key={`${item.company}-${item.title}-${currentWorkPage}`}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  logoUrl={item.logoUrl}
                  altText={item.company}
                  title={item.company}
                  subtitle={item.title}
                  href={item.href}
                  badges={item.badges}
                  period={`${item.start} - ${item.end ?? "Present"}`}
                  description={item.description}
                />
              </BlurFade>
            ))}
          </div>

          {totalWorkPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentWorkPage(Math.max(1, currentWorkPage - 1))}
                disabled={currentWorkPage === 1}
              >
                Previous
              </Button>
              <div className="text-xs font-medium text-muted-foreground">
                {currentWorkPage} of {totalWorkPages}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentWorkPage(Math.min(totalWorkPages, currentWorkPage + 1))}
                disabled={currentWorkPage === totalWorkPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-primary/20"></span>
              Education
            </h2>
          </BlurFade>
          {education.map((item: any, id: number) => (
            <BlurFade
              key={item.school}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            >
              <ResumeCard
                href={item.href}
                logoUrl={item.logoUrl}
                altText={item.school}
                title={item.school}
                subtitle={item.degree}
                period={`${item.start} - ${item.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-primary/20"></span>
              Technical Stack
            </h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill: string, id: number) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <Badge variant="secondary" className="px-3 py-1 bg-primary/5 hover:bg-primary/10 border-none transition-colors">
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                  Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Latest Projects
                </h2>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
            {currentProjects.map((project: any, id: number) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <div className="text-xs font-medium">
                Page {currentPage} of {totalPages}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>

      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                  Achievements
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Community & Contests
                </h2>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l border-primary/20">
              {hackathons.map((item: any, id: number) => (
                <BlurFade
                  key={item.title + item.dates}
                  delay={BLUR_FADE_DELAY * 19 + id * 0.05}
                >
                  <HackathonCard
                    title={item.title}
                    description={item.description}
                    location={item.location}
                    dates={item.dates}
                    image={item.image}
                    links={item.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 20}>
            <div className="space-y-3">
              <div className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                Connect
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Let&apos;s Work Together
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Currently looking for new opportunities. Feel free to reach out via any of these channels!
              </p>
              <div className="flex justify-center space-x-6 mt-8">
                {data.contact?.social?.GitHub?.url && (
                  <Link href={data.contact.social.GitHub.url} className="text-muted-foreground hover:text-primary transition-colors font-medium underline underline-offset-4">
                    GitHub
                  </Link>
                )}
                {data.contact?.social?.LinkedIn?.url && (
                  <Link href={data.contact.social.LinkedIn.url} className="text-muted-foreground hover:text-primary transition-colors font-medium underline underline-offset-4">
                    LinkedIn
                  </Link>
                )}
                {data.contact?.email && (
                  <Link href={`mailto:${data.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors font-medium underline underline-offset-4">
                    Email
                  </Link>
                )}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
