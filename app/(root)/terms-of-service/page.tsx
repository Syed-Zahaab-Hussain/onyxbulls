import { Metadata } from "next";
import TermsHero from "./components/terms-hero";

export const metadata: Metadata = {
  title: "Terms of Service - Onyxbulls Forex Trading Education",
  description:
    "Read the terms of service for Onyxbulls forex trading education in Pakistan. Understand your rights and responsibilities when using our trading courses and services.",
  keywords: [
    "terms of service",
    "legal agreement",
    "onyxbulls terms",
    "forex education terms",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/terms-of-service`,
  },
  openGraph: {
    title: "Terms of Service - Onyxbulls Forex Trading Education",
    description:
      "Read the terms of service for Onyxbulls forex trading education in Pakistan. Understand your rights and responsibilities when using our trading courses and services.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/terms-of-service`,
  },
};

export default function TermsOfService() {
  const lastUpdated = "October 21, 2024";

  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300"
    >
      <TermsHero />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              By accessing and using Onyxbulls forex trading education services,
              you accept and agree to be bound by the terms and provision of
              this agreement. If you do not agree to abide by the above, please
              do not use our services.
            </p>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">
              2. Use License
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Permission is granted to temporarily access the materials
              (courses, content, resources) on Onyxbulls for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>modify or copy the materials</li>
              <li>
                use the materials for any commercial purpose or for any public
                display
              </li>
              <li>
                attempt to reverse engineer any software contained on the
                website
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials
              </li>
            </ul>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">
              3. Disclaimer
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The materials on Onyxbulls are provided on an &apos;as is&apos;
              basis. Onyxbulls makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">
              4. Trading Risk Disclaimer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Forex trading involves substantial risk of loss and is not
              suitable for all investors. Onyxbulls provides educational content
              only and does not provide financial advice. We will also not cover
              any financial losses occurred in any trading way. We are only
              providing education.
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-700 dark:text-red-400 font-medium">
                Risk Warning: Trading foreign exchange on margin carries a high
                level of risk, and may not be suitable for all investors. The
                possibility exists that you could sustain a loss of some or all
                of your initial investment and therefore you should not invest
                money that you cannot afford to lose.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">
              5. Limitations
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              In no event shall Onyxbulls or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on Onyxbulls, even if Onyxbulls
              or an authorized representative has been notified orally or in
              writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">
              6. Revisions and Errata
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The materials appearing on Onyxbulls could include technical,
              typographical, or photographic errors. Onyxbulls does not promise
              that any of the materials on its website are accurate, complete,
              or current. Onyxbulls may make changes to the materials contained
              on its website at any time without notice.
            </p>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">
              7. Governing Law
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              These terms and conditions are governed by and construed in
              accordance with the laws of Pakistan and you irrevocably submit to
              the exclusive jurisdiction of the courts in that State or
              location.
            </p>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">
              8. Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              For questions about these Terms of Service, please contact us at:
              <br />
              Email:{" "}
              <a
                href="mailto:support@onyxbulls.com"
                className="text-neon-500 hover:text-neon-400 transition-colors"
              >
                support@onyxbulls.com
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:+923128358123"
                className="text-neon-500 hover:text-neon-400 transition-colors"
              >
                +92 312 8358123
              </a>
              <br />
              Address: behind virtual university, Model Town, Quetta,
              Balochistan, Pakistan
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
