import FAQContent from "@/components/faqPage/faq-content";
import FAQHeader from "@/components/faqPage/faq-header";

export const metadata = {
  title: "FAQ - Craveit",
  description:
    "Find answers to frequently asked questions about ordering, delivery, payments, and getting the most out of CraveIt.",
};

export default function FAQPage() {
  return (
    <main className="flex-1">
      <FAQHeader />
      <FAQContent />
    </main>
  );
}
