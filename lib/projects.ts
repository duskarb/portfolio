export type ProjectMediaType = "image" | "video" | "youtube";

export type ProjectKind = "gallery" | "html" | "image";

export interface ProjectMedia {
  type: ProjectMediaType;
  src: string;
  caption?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  year: number;
  type: ProjectKind;
  label?: string;
  thumbnail: string;
  description: string;
  media: ProjectMedia[];
  href?: string;
}

// 개발 환경에서는 basePath 없이, 프로덕션에서는 /portfolio 경로 사용
const basePath = process.env.NODE_ENV === 'production' ? "/portfolio/projects" : "/projects";

const projectsData: Array<{
  name: string;
  type: ProjectKind;
  label?: string;
  thumbnail: string;
  description: string;
  href?: string;
  media?: ProjectMedia[];
}> = [
    {
      name: "당신의_역할은_입력(on going), 2025",
      type: "gallery",
      thumbnail: "당신의_역할은_입력(on going)_2025/IMG_5701.PNG.jpg",
      description: "인간과 기계의 관계를 다룬 인터렉티브 웹 아트 프로젝트",
      media: [
        { type: "image", src: "당신의_역할은_입력(on going)_2025/IMG_5701.PNG.jpg" },
        { type: "image", src: "당신의_역할은_입력(on going)_2025/IMG_5702.PNG.jpg" }
      ]
    },
    {
      name: "closure, 2025",
      type: "html",
      thumbnail: "closure_2025/스크린샷 2025-12-11 오전 8.47.35.jpg",
      description: "eternal sunshine: 인터랙티브 웹 프로젝트",
      href: "https://duskarb.github.io/eternal-sunshine/",
      label: "html",
      media: [
        { type: "image", src: "closure_2025/스크린샷 2025-12-11 오전 8.47.35.jpg" }
      ]
    },
    {
      name: "loading_page, 2025",
      type: "html",
      thumbnail: "loading_page_2025/thumbnail.png",
      description:
        "엘레베이터에서 거울을 보며 도착할 때까지 기다리는 경험을 보고…",
      href: "loading_page_2025/index.html",
      label: "html",
      media: [{ type: "image", src: "loading_page_2025/thumbnail.png" }]
    },
    {
      name: "die4you, 2025",
      type: "gallery",
      thumbnail: "die4you_2025/thumbnail.png",
      description: "Die4you of DEAN typography video",
      label: "video",
      media: [
        {
          type: "youtube",
          src: "https://www.youtube-nocookie.com/embed/bhSRGwCKoQE"
        }
      ]
    },
    {
      name: "skaterguide, 2024",
      type: "image",
      thumbnail: "skaterguide, 2024.jpg",
      description: "Perfect Guide for Skaterboard Beginner: Join the thrilling world of skateboarding! Explore essential gear and learn basic skills to kickstart your journey on the board!",
      href: "skaterguide, 2024.jpg",
      label: "infographic",
      media: [{ type: "image", src: "skaterguide, 2024.jpg" }]
    },
    {
      name: "twist_the_plot, 2024",
      type: "gallery",
      thumbnail: "twist_the_plot_2024/thumbnail.jpg",
      description: "twist the plot of the story!!!: 영상디자인 수업 과제",
      label: "video",
      media: [
        {
          type: "youtube",
          src: "https://www.youtube-nocookie.com/embed/Hlt6toQ0ASc"
        }
      ]
    },
    {
      name: "Exhalo, 2025",
      type: "gallery",
      thumbnail: "Exhalo_2025/thumbnail.jpg",
      description: "exhalo is an autonomous smoke-control drone system: AI를 활용한 모빌리티 디자인 수업 과제",
      label: "mobility design",
      media: [
        {
          type: "youtube",
          src: "https://www.youtube-nocookie.com/embed/AqyOdRna-NE"
        },
        { type: "image", src: "Exhalo_2025/1.jpg" },
        { type: "image", src: "Exhalo_2025/2.jpg" },
        { type: "image", src: "Exhalo_2025/3.jpg" },
        { type: "image", src: "Exhalo_2025/4.png" },
        { type: "image", src: "Exhalo_2025/5.jpg" },
        { type: "image", src: "Exhalo_2025/6.jpg" },
        { type: "image", src: "Exhalo_2025/7.jpg" },
        { type: "image", src: "Exhalo_2025/8.jpg" }
      ]
    },
    {
      name: "Give_me_love, 2025",
      type: "html",
      thumbnail: "Give_me_love_2025/thumbnail.png",
      description: "사랑을 말로 설명할 순 없어",
      href: "Give_me_love_2025/index.html",
      label: "html",
      media: [
        { type: "video", src: "Give_me_love_2025/video.mov" },
        { type: "image", src: "Give_me_love_2025/complete.png" }
      ]
    },
    {
      name: "ORCA, 2025",
      type: "gallery",
      thumbnail: "ORCA_2025/thumbnail.jpg",
      description: "Mobile work station for startup CEO: 모빌리티 디자인 수업 과제",
      label: "mobility design",
      media: [
        {
          type: "youtube",
          src: "https://www.youtube-nocookie.com/embed/ZL638yTQCjE"
        },
        { type: "image", src: "ORCA_2025/1.jpg" },
        { type: "image", src: "ORCA_2025/2.jpg" },
        { type: "image", src: "ORCA_2025/3.png" },
        { type: "image", src: "ORCA_2025/4.jpg" },
        { type: "image", src: "ORCA_2025/5.jpg" },
        { type: "image", src: "ORCA_2025/6.jpg" },
        { type: "image", src: "ORCA_2025/7.jpg" }
      ]
    },
    {
      name: "TIME STICK, 2024",
      type: "gallery",
      thumbnail: "TIME_STICK_2024/1.jpg",
      description: "New time experience for blind people. : 발상과 표현 수업 과제",
      label: "product design",
      media: [
        { type: "image", src: "TIME_STICK_2024/1.jpg" },
        { type: "image", src: "TIME_STICK_2024/2.jpg" },
        { type: "image", src: "TIME_STICK_2024/3.jpg" },
        { type: "image", src: "TIME_STICK_2024/4.jpg" },
        { type: "image", src: "TIME_STICK_2024/5.jpg" }
      ]
    },
    {
      name: "E-motion, 2025",
      type: "gallery",
      thumbnail: "E-motion_2025/thumbnail.png",
      description: "emotional typography system using Arduino and TouchDesigner: 인터렉티브 제품 디자인 수업 과제",
      label: "arduino",
      media: [
        { type: "image", src: "E-motion_2025/1.jpg" },
        { type: "image", src: "E-motion_2025/2.jpg" },
        { type: "image", src: "E-motion_2025/3.jpg" },
        { type: "image", src: "E-motion_2025/4.jpg" },
        { type: "image", src: "E-motion_2025/5.jpg" },
        { type: "image", src: "E-motion_2025/6.jpg" },
        { type: "image", src: "E-motion_2025/7.jpg" }
      ]
    },
    {
      name: "side_projects, 2024-",
      type: "gallery",
      thumbnail: "side_projects_2024-/1.jpg",
      description: "Do you want some more? Come and see my side projects!",
      label: "others",
      media: [
        { type: "image", src: "side_projects_2024-/1.jpg" },
        { type: "image", src: "side_projects_2024-/2.jpeg" },
        { type: "image", src: "side_projects_2024-/3.jpg" },
        { type: "image", src: "side_projects_2024-/4.jpeg" },
        { type: "image", src: "side_projects_2024-/5.png" }
      ]
    }
  ];

function sanitizeSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[,]/g, "")
    .replace(/\s+/g, "-")
    .replace(/_{1,}/g, "-")
    .replace(/-+/g, "-");
}

function extractYear(name: string) {
  const match = name.match(/(\d{4})/);
  return match ? Number(match[1]) : new Date().getFullYear();
}

function extractTitle(name: string) {
  return name.replace(/,\s*\d{4}-?$/, "").replace(/_/g, " ");
}

function toMedia(media?: ProjectMedia[]): ProjectMedia[] {
  return (
    media?.map((item) =>
      item.src.startsWith("http")
        ? item
        : {
          ...item,
          src: `${basePath}/${item.src}`
        }
    ) ?? []
  );
}

export const projects: Project[] = projectsData.map((entry) => {
  const slug = sanitizeSlug(entry.name);
  return {
    id: slug,
    slug,
    title: extractTitle(entry.name),
    year: extractYear(entry.name),
    type: entry.type,
    label: entry.label,
    thumbnail: entry.thumbnail.startsWith("http")
      ? entry.thumbnail
      : `${basePath}/${entry.thumbnail}`,
    description:
      entry.description && entry.description.trim().length > 0
        ? entry.description
        : "Project documentation is coming soon. Reach out for a guided walk-through.",
    media: toMedia(entry.media),
    href: entry.href
      ? entry.href.startsWith("http")
        ? entry.href
        : `${basePath}/${entry.href}`
      : undefined
  };
});
