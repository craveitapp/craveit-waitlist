import VendorCook from "@/components/vendorPage/vendor-cook";
import VendorFAQSection from "@/components/vendorPage/vendor-faq";
import VendorHero from "@/components/vendorPage/vendor-hero";
import VendorReq from "@/components/vendorPage/vendor-req";

export const metadata = {
  title: "Vendors - Craveit",
  description:
    "Join Craveit as a vendor and turn hungry scrollers into paying customers with a video-first storefront.",
};

export default function VendorsPage() {
  return (
    <main className="flex-1">
      <VendorHero />
      <VendorCook />
      <VendorReq />
      <VendorFAQSection />
    </main>
  );
}
