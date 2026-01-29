"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";

export default function HeroSection() {
  const featuredProjects = [
    projects.find(p => p.slug === "당신의-역할은-입력(on-going)-2025"),
    projects.find(p => p.slug === "exhalo-2025"),
    projects.find(p => p.slug === "twist-the-plot-2024"),
    projects.find(p => p.slug === "time-stick-2024"),
    projects.find(p => p.slug === "give-me-love-2025"),
  ].filter(Boolean);

  return (
    <section className="min-h-screen">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 h-full">
        <div className="flex-1 md:sticky md:top-24 md:self-start space-y-8">
          <p className="text-base md:text-lg text-black max-w-2xl leading-relaxed">
            I design at the intersection of industrial design, technology, and experimental media—building products,
            interfaces, and interactive systems that behave just a little differently. As a KAIST industrial design
            student, I move between physical objects, digital tools, and narrative-driven experiences, shaping ideas
            into forms people can see, touch, and play with. My work often begins with a playful question and grows
            into prototypes that explore the boundaries between humans, non-humans, and the systems we rely on.
            From mobility concepts and physical–digital products to web-based media artworks, I aim to balance
            usability with expressive interaction, designing experiences that are intuitive yet characterful.
            <br/><br/>
            <a href="mailto:prism011312@kaist.ac.kr" className="text-black underline">prism011312@kaist.ac.kr</a>
          </p>
        </div>

        <div className="flex-1 max-w-md space-y-4 overflow-y-auto max-h-screen md:max-h-[calc(100vh-6rem)] scrollbar-hide">
          {featuredProjects.map((project) => (
            project && (
              <Link
                key={project.id}
                href={`/projects#${project.slug}`}
                className="block aspect-square overflow-hidden"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </Link>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
