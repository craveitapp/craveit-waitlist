import ContactHeader from "@/components/contactPage/contact-header";
import ContactForm from "@/components/contactPage/contact-form";
import ContactFollow from "@/components/contactPage/contact-follow";
import FAQSection from "@/components/homepage/faq";
import Experience from "@/components/homepage/experience";

export const metadata = {
  title: "Contact Us - Craveit",
  description:
    "Get in touch with CraveIt. Whether you have a question, want to partner, or just want to tell us about a dish we should feature, we're listening.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ContactHeader />
      <ContactForm />
      <ContactFollow />
      <FAQSection />
      <Experience />
    </main>
  );
}
