'use client';

import { Mail, Instagram, Phone } from "lucide-react";

interface ContactSectionProps {
  standalone?: boolean;
}

export default function ContactSection({ standalone = false }: ContactSectionProps) {
  return (
    <section className={standalone ? "py-12 pt-24 mb-10" : "py-12 mb-10 border-b border-black"}>
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-black">
          Contact
        </h2>
      </div>

      <div className="border border-black p-8 md:p-12">
        <div className="max-w-2xl mx-auto space-y-8 text-center">
          <h3 className="text-3xl md:text-4xl font-normal text-black">
            Let's create something amazing together.
          </h3>
          <p className="text-lg text-black">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:prism011312@kaist.ac.kr"
              className="inline-flex items-center gap-2 border border-black px-8 py-3 text-black hover:bg-black hover:text-white"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a 
              href="https://www.instagram.com/duskarb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black px-8 py-3 text-black hover:bg-black hover:text-white"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <a 
              href="tel:+821071015732"
              className="inline-flex items-center gap-2 border border-black px-8 py-3 text-black hover:bg-black hover:text-white"
            >
              <Phone className="w-5 h-5" />
              +82 10 7101 5732
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
