import ContactSection from "@/components/contact-section";

export const metadata = {
  title: "Contact — Namkyu Yeo",
  description: "Get in touch with Namkyu Yeo",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white pt-0">
      <ContactSection standalone />
    </main>
  );
}


