import { Metadata } from "next";
import PrivacyHero from "./components/privacy-hero";

export const metadata: Metadata = {
  title: "Privacy Policy - Onyxbulls Forex Trading Education",
  description: "Read Onyxbulls privacy policy for forex trading education in Pakistan. Learn how we collect, use, and protect your personal information when you use our trading courses.",
  keywords: ["privacy policy", "data protection", "onyxbulls privacy", "forex education privacy"],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy - Onyxbulls Forex Trading Education",
    description: "Read Onyxbulls privacy policy for forex trading education in Pakistan. Learn how we collect, use, and protect your personal information when you use our trading courses.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-policy`,
  },
};

export default function PrivacyPolicy() {
  const lastUpdated = "October 21, 2024";

  return (
    <main id="main-content" className="flex min-h-screen flex-col bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <PrivacyHero />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">
              1. Information We Collect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Onyxbulls collects information you provide directly to us, such as
              when you create an account, enroll in courses, or contact us for
              support. This may include your name, email address, phone number,
              and payment information.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We also collect information automatically as you navigate through our
              website, including your IP address, browser type, and information about
              your device and usage patterns.
            </p>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use the information we collect to provide, maintain, and
              improve our services, process transactions, send you technical
              notices and support messages, and communicate with you about
              products, services, and promotional offers.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We may also use your information to personalize your experience,
              analyze usage patterns, and develop new features and services.
            </p>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">
              3. Information Sharing
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this privacy policy. We may share your information
              with trusted service providers who assist us in operating our
              website and conducting our business.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We may also disclose your information if required by law or in
              good faith belief that such disclosure is necessary to comply with
              legal obligations or protect our rights.
            </p>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">4. Data Security</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. These include SSL encryption,
              secure servers, and regular security audits.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-yellow-700 dark:text-yellow-400 font-medium">
                Security Note: While we take reasonable precautions to protect your
                information, no method of transmission over the internet is 100% secure.
              </p>
            </div>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">
              5. Cookies and Tracking
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our website uses cookies and similar tracking technologies to
              enhance your experience, analyze site traffic, and personalize
              content. Cookies are small files stored on your device that help
              us remember your preferences and track usage patterns.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              You can control the use of cookies through your browser
              settings, but disabling cookies may affect your ability to use
              certain features of our website.
            </p>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">6. Your Rights</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You have the right to access, update, or delete your personal
              information. You may also opt out of receiving promotional
              communications from us at any time.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              To exercise these rights, please contact us using the information
              provided below. We will respond to your request within a reasonable
              timeframe in accordance with applicable law.
            </p>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">7. Children Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children
              under 18. If you become aware that a child has provided us with
              personal information, please contact us immediately.
            </p>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">
              8. Changes to This Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the &quot;Last updated&quot; date. We encourage you to
              review this policy periodically for any changes.
            </p>
          </section>

          <section className="mb-12 bg-white dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-neon-500 dark:text-neon-400">
              9. Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about this Privacy Policy, please
              contact us at:
              <br />
              Email: <a href="mailto:support@onyxbulls.com" className="text-neon-500 hover:text-neon-400 transition-colors">support@onyxbulls.com</a>
              <br />
              Phone: <a href="tel:+923128358123" className="text-neon-500 hover:text-neon-400 transition-colors">+92 312 8358123</a>
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