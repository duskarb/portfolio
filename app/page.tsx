"use client";

import { useState } from "react";
import { projects, Project } from "@/lib/projects";

type ViewState = "home" | "about" | "projects" | "contact";

export default function HomePage() {
  const [view, setView] = useState<ViewState>("home");

  return (
    <div className="fixed inset-0 w-full h-full bg-white text-black overflow-hidden selection:bg-black selection:text-white flex flex-col justify-between p-6 md:p-10">
      {/* Top Header */}
      <div className="flex justify-between items-start z-50">
        <button
          onClick={() => setView("home")}
          className={`text-xl md:text-2xl font-bold tracking-tight hover:underline focus:outline-none`}
        >
          yeonamkyu
        </button>
        <button
          onClick={() => setView("about")}
          className={`text-xl md:text-2xl font-bold tracking-tight hover:underline focus:outline-none ${view === "about" ? "underline" : ""}`}
        >
          about
        </button>
      </div>

      {/* Main Content Area */}
      <div className="absolute inset-0 pt-24 pb-24 px-6 md:px-10 flex overflow-hidden">
        {view === "home" && (
          <div className="w-full h-full flex items-center justify-center overflow-y-auto">
            <div className="max-w-3xl px-4 md:px-0 text-left">
              <p className="text-xl md:text-2xl font-bold leading-snug tracking-tighter">
                I design at the intersection of industrial design, technology,
                and experimental media—building products, interfaces, and
                interactive systems that behave just a little differently. As a
                KAIST industrial design student, I move between physical
                objects, digital tools, and narrative-driven experiences,
                shaping ideas into forms people can see, touch, and play with.
                My work often begins with a playful question and grows into
                prototypes that explore the boundaries between humans,
                non-humans, and the systems we rely on. From mobility concepts
                and physical–digital products to web- based media artworks, I
                aim to balance usability with expressive interaction, designing
                experiences that are intuitive yet characterful.
              </p>
            </div>
          </div>
        )}

        {view === "about" && (
          <div className="w-full h-full overflow-y-auto custom-scrollbar pt-8 md:pt-16 pb-32">
            <div className="max-w-4xl w-full mx-auto flex flex-col border-t border-black">
              <details className="group border-b border-black">
                <summary className="flex justify-between items-center py-4 text-xl md:text-3xl font-bold tracking-tight cursor-pointer hover:underline list-none [&::-webkit-details-marker]:hidden outline-none">
                  <span>Education</span>
                  <span className="font-normal text-black/40 text-lg md:text-xl group-open:hidden">
                    +
                  </span>
                  <span className="font-normal text-black/40 text-lg md:text-xl hidden group-open:block">
                    -
                  </span>
                </summary>
                <div className="flex flex-col gap-2 pb-8 pt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xl md:text-2xl font-bold">
                      Industrial Design Dept, KAIST
                    </span>
                    <span className="text-lg md:text-xl text-black/40">
                      2022.02 – Present · Daejeon
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 mt-4">
                    <span className="text-xl md:text-2xl font-bold">
                      Kyunghee High School
                    </span>
                    <span className="text-lg md:text-xl text-black/40">
                      2019.02 – 2022.02 · Seoul
                    </span>
                  </div>
                </div>
              </details>

              <details className="group border-b border-black">
                <summary className="flex justify-between items-center py-4 text-xl md:text-3xl font-bold tracking-tight cursor-pointer hover:underline list-none [&::-webkit-details-marker]:hidden outline-none">
                  <span>Experience</span>
                  <span className="font-normal text-black/40 text-lg md:text-xl group-open:hidden">
                    +
                  </span>
                  <span className="font-normal text-black/40 text-lg md:text-xl hidden group-open:block">
                    -
                  </span>
                </summary>
                <div className="flex flex-col gap-6 pb-8 pt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xl md:text-2xl font-bold">
                      KAIST Visual Instruments Lab
                    </span>
                    <span className="text-lg md:text-xl text-black/40">
                      2025.12 – Present · Individual Research
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl md:text-2xl font-bold">
                      KAIST Move Lab
                    </span>
                    <span className="text-lg md:text-xl text-black/40">
                      2024.12 – 2025.02 · Individual Research
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl md:text-2xl font-bold">
                      ID KAIST Student Council
                    </span>
                    <span className="text-lg md:text-xl text-black/40">
                      2024.02 – 2025.02 · President
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl md:text-2xl font-bold">
                      KAIST Student Ambassador
                    </span>
                    <span className="text-lg md:text-xl text-black/40">
                      2022.03 – 2024.02 · KAINURI
                    </span>
                  </div>
                </div>
              </details>

              <details className="group border-b border-black">
                <summary className="flex justify-between items-center py-4 text-xl md:text-3xl font-bold tracking-tight cursor-pointer hover:underline list-none [&::-webkit-details-marker]:hidden outline-none">
                  <span>Award</span>
                  <span className="font-normal text-black/40 text-lg md:text-xl group-open:hidden">
                    +
                  </span>
                  <span className="font-normal text-black/40 text-lg md:text-xl hidden group-open:block">
                    -
                  </span>
                </summary>
                <div className="flex flex-col gap-2 pb-8 pt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xl md:text-2xl font-bold">
                      DIDP AI creative challenge
                    </span>
                    <span className="text-lg md:text-xl text-black/40">
                      Grand Prize · Exhalo
                    </span>
                  </div>
                </div>
              </details>

              <details className="group border-b border-black">
                <summary className="flex justify-between items-center py-4 text-xl md:text-3xl font-bold tracking-tight cursor-pointer hover:underline list-none [&::-webkit-details-marker]:hidden outline-none">
                  <span>Exhibition</span>
                  <span className="font-normal text-black/40 text-lg md:text-xl group-open:hidden">
                    +
                  </span>
                  <span className="font-normal text-black/40 text-lg md:text-xl hidden group-open:block">
                    -
                  </span>
                </summary>
                <div className="flex flex-col gap-6 pb-8 pt-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-xl md:text-2xl font-bold">
                      2025 Deajeon Design Festa
                    </span>
                    <span className="text-lg md:text-xl text-black/40">
                      Exhalo
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl md:text-2xl font-bold">
                      2025 ID KAIST Project Exhibition
                    </span>
                    <span className="text-lg md:text-xl text-black/40">
                      Mobility Design with AI (Exhalo)
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl md:text-2xl font-bold">
                      2024 ID KAIST Project Exhibition
                    </span>
                    <span className="text-lg md:text-xl text-black/40">
                      영상디자인, 사진기법
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xl md:text-2xl font-bold">
                      KAIST ID 상설전시
                    </span>
                    <span className="text-lg md:text-xl text-black/40">
                      Mobility Design (ORCA)
                    </span>
                  </div>
                </div>
              </details>

              <details className="group border-b border-black">
                <summary className="flex justify-between items-center py-4 text-xl md:text-3xl font-bold tracking-tight cursor-pointer hover:underline list-none [&::-webkit-details-marker]:hidden outline-none">
                  <span>Tools</span>
                  <span className="font-normal text-black/40 text-lg md:text-xl group-open:hidden">
                    +
                  </span>
                  <span className="font-normal text-black/40 text-lg md:text-xl hidden group-open:block">
                    -
                  </span>
                </summary>
                <div className="flex flex-col gap-2 pb-8 pt-4">
                  <span className="text-xl md:text-2xl font-bold leading-relaxed">
                    After Effects, Premiere Pro, Illustrator, Photoshop,
                    TouchDesigner, MidJourney, Rhino, Keyshot, Arduino, Figma,
                    Python, HTML, CSS, JavaScript
                  </span>
                </div>
              </details>
            </div>
          </div>
        )}

        {view === "contact" && (
          <div className="w-full h-full flex items-center justify-center overflow-y-auto">
            <div className="w-full max-w-lg mx-auto flex flex-col items-center text-center gap-6 text-2xl md:text-4xl font-bold tracking-tight">
              <a
                href="mailto:prism011312@kaist.ac.kr"
                className="hover:underline"
              >
                prism011312@kaist.ac.kr
              </a>
              <a
                href="https://www.instagram.com/duskarb/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                @duskarb
              </a>
              <a href="tel:+821071015732" className="hover:underline">
                +82 10 7101 5732
              </a>
            </div>
          </div>
        )}

        {view === "projects" && (
          <div className="w-full h-full overflow-y-auto custom-scrollbar pt-8 md:pt-16 pb-32">
            <div className="max-w-4xl w-full mx-auto flex flex-col border-t border-black">
              {projects.map((p) => {
                const ytMedia = p.media.find((m) => m.type === "youtube");
                const isYoutubeOnly = ytMedia && p.media.length === 1;

                if (isYoutubeOnly) {
                  const match = ytMedia.src.match(/\/embed\/([a-zA-Z0-9_-]+)/);
                  const href = match
                    ? `https://www.youtube.com/watch?v=${match[1]}`
                    : ytMedia.src;
                  return (
                    <a
                      key={p.id}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center py-4 border-b border-black text-xl md:text-3xl font-bold tracking-tight hover:underline cursor-pointer"
                    >
                      <span>{p.title === "ORCA" ? "ORCA" : p.title}</span>
                      <span className="font-normal text-black/40 text-lg md:text-xl">
                        ↗
                      </span>
                    </a>
                  );
                }

                return (
                  <details key={p.id} className="group border-b border-black">
                    <summary className="flex justify-between items-center py-4 text-xl md:text-3xl font-bold tracking-tight cursor-pointer hover:underline list-none [&::-webkit-details-marker]:hidden outline-none">
                      <span>{p.title === "ORCA" ? "ORCA" : p.title}</span>
                      <span className="font-normal text-black/40 text-lg md:text-xl group-open:hidden">
                        +
                      </span>
                      <span className="font-normal text-black/40 text-lg md:text-xl hidden group-open:block">
                        -
                      </span>
                    </summary>
                    <div className="flex flex-col gap-2 pb-8 pt-4">
                      {p.media.map((media, idx) => {
                        if (media.type === "image") {
                          return (
                            <img
                              key={idx}
                              src={media.src}
                              alt={p.title}
                              className="w-full h-auto"
                              loading="lazy"
                            />
                          );
                        } else if (media.type === "video") {
                          return (
                            <video
                              key={idx}
                              src={media.src}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-auto"
                            />
                          );
                        } else if (media.type === "youtube") {
                          return (
                            <iframe
                              key={idx}
                              src={media.src}
                              className="w-full aspect-video"
                              allowFullScreen
                            />
                          );
                        }
                        return null;
                      })}
                      {!p.media.length && (
                        <div className="mt-4">
                          <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
                          <p className="text-xl font-bold">{p.description}</p>
                        </div>
                      )}
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between items-end z-50">
        <button
          onClick={() => setView("projects")}
          className={`text-xl md:text-2xl font-bold tracking-tight hover:underline focus:outline-none ${view === "projects" ? "underline" : ""}`}
        >
          projects
        </button>
        <button
          onClick={() => setView("contact")}
          className={`text-xl md:text-2xl font-bold tracking-tight hover:underline focus:outline-none ${view === "contact" ? "underline" : ""}`}
        >
          contact
        </button>
      </div>
    </div>
  );
}
