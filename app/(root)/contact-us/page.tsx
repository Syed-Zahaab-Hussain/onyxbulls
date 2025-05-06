import ContactHero from "@/app/(root)/contact-us/components/contact-hero";
import ContactForm from "@/app/(root)/contact-us/components/contact-form";
import ContactInfo from "@/app/(root)/contact-us/components/contact-info";
import ContactMap from "@/app/(root)/contact-us/components/contact-map";
import ContactFAQ from "@/app/(root)/contact-us/components/contact-faq";
import { FAQS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";

export const revalidate = 60 * 60 * 24;

export const metadata: Metadata = {
  title: "Contact Us",
};



export default async function ContactPage() {
  const faqs = await client.fetch(FAQS_QUERY);

  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <ContactHero />

      <section className="py-16 bg-white dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <ContactMap />

      <ContactFAQ faqs={faqs} />
    </main>
  );
}
