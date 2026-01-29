"use client";

type AboutItem = {
  type: "text";
  content: string;
} | {
  type: "entry";
  title: string;
  subtitle?: string;
  date: string;
};

const aboutEntries: {
  id: string;
  title: string;
  items: AboutItem[];
}[] = [
    {
      id: "education",
      title: "Education",
      items: [
        {
          type: "entry",
          title: "Industrial Design Dept, KAIST",
          subtitle: "Daejeon",
          date: "2022.02 – Present"
        },
        {
          type: "entry",
          title: "Kyunghee High School",
          subtitle: "Seoul",
          date: "2019.02 – 2022.02"
        }
      ]
    },
    {
      id: "experience",
      title: "Experience",
      items: [
        {
          type: "entry",
          title: "KAIST Visual Instruments Lab",
          subtitle: "Individual Research",
          date: "2025.02 – Present"
        },
        {
          type: "entry",
          title: "ID KAIST Student Council",
          subtitle: "President",
          date: "2024.02 – 2025.02"
        },
        {
          type: "entry",
          title: "KAIST Student Ambassador",
          subtitle: "KAINURI",
          date: "2022.03 – 2024.02"
        },
        {
          type: "entry",
          title: "Kyunghee Robot Club",
          subtitle: "Member",
          date: "2019.06 – 2021.12"
        }
      ]
    },
    {
      id: "award",
      title: "Award",
      items: [
        {
          type: "entry",
          title: "AI 크리에이티브 챌린지 대상",
          subtitle: "Exhalo",
          date: "2025.07"
        },
        {
          type: "text",
          content: "(More to come in the future...)"
        }
      ]
    },
    {
      id: "exhibition",
      title: "Exhibition",
      items: [
        {
          type: "entry",
          title: "2025 Deajeon Design Festa",
          subtitle: "Exhalo",
          date: "2025.11"
        }
      ]
    },
    {
      id: "tools",
      title: "Tools",
      items: [
        { type: "text", content: "After Effects, Premiere Pro, Illustrator, Photoshop" },
        { type: "text", content: "TouchDesigner, MidJourney, Rhino 7, Keyshot" },
        { type: "text", content: "Arduino, Figma" }
      ]
    },
    {
      id: "contact",
      title: "Contact",
      items: [
        { type: "text", content: "prism011312@kaist.ac.kr" },
        { type: "text", content: "@duskarb" },
        { type: "text", content: "+82 10 7101 5732" }
      ]
    }
  ];

interface AboutSectionProps {
  standalone?: boolean;
}

export default function AboutSection({ standalone = false }: AboutSectionProps) {
  return (
    <section className={standalone ? "" : "py-12 border-b border-black"}>
      {!standalone && (
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-black">
            About
          </h2>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mx-6 md:-mx-8">
        {aboutEntries.map((entry) => (
          <div key={entry.id} className="p-[28px]">
            <div className="mb-6">
              <h3 className="text-base font-semibold text-black">
                {entry.title}
              </h3>
            </div>

            <ul className="space-y-4">
              {entry.items.map((item, itemIdx) => (
                <li key={itemIdx} className="text-sm">
                  {item.type === "entry" ? (
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between items-start gap-4">
                        <span className="font-normal text-black leading-tight">
                          {item.title}
                        </span>
                        <span className="shrink-0 text-xs font-normal text-black tabular-nums text-right">
                          {item.date}
                        </span>
                      </div>
                      {item.subtitle && (
                        <span className="text-xs text-black font-normal">
                          {item.subtitle}
                        </span>
                      )}
                    </div>
                  ) : entry.id === "contact" ? (
                    <a
                      href={
                        itemIdx === 0
                          ? "mailto:prism011312@kaist.ac.kr"
                          : itemIdx === 1
                            ? "https://www.instagram.com/duskarb/"
                            : "tel:+821071015732"
                      }
                      target={itemIdx === 1 ? "_blank" : undefined}
                      rel={itemIdx === 1 ? "noopener noreferrer" : undefined}
                      className="text-black leading-relaxed font-normal block hover:underline"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span className="text-black leading-relaxed font-normal block">
                      {item.content}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
