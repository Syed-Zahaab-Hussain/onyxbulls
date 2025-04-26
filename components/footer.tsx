import Link from "next/link";
import Image from "next/image";

import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const socialIcons = [
  {
    href: "#",
    icon: Facebook,
  },
  {
    href: "#",
    icon: Twitter,
  },
  {
    href: "#",
    icon: Instagram,
  },
  {
    href: "#",
    icon: Linkedin,
  },
  {
    href: "#",
    icon: Youtube,
  },
];

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];
const tradingResourceLinks = [
  {
    title: "Forex Basics",
    href: "#",
  },
  {
    title: "Cryptocurrency Guide",
    href: "#",
  },
  {
    title: "Technical Analysis",
    href: "#",
  },
  {
    title: "Fundamental Analysis",
    href: "#",
  },
  {
    title: "Trading Psychology",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neon-500/30 transition-colors duration-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-6 group">
              <div className="relative h-8 w-8 mr-2">
                <Image
                  src="/images/logo.svg"
                  alt="Dominion Markets Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-xl uppercase text-white group-hover:text-neon-400 transition-colors duration-300">
                  Onyxbulls
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">
              Your trusted partner for forex and cryptocurrency education. We
              provide comprehensive training and resources to help you succeed
              in the financial markets.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  className="bg-black hover:bg-neon-900 border border-neon-500/30 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <item.icon size={18} className="text-neon-500" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-neon-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-neon-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trading Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-neon-500">
              Trading Resources
            </h3>
            <ul className="space-y-3">
              {tradingResourceLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-neon-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-neon-500">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-neon-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  behind virtual university, Model Town, Quetta, Balochistan,
                  Pakistan
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-neon-500 flex-shrink-0" />
                <span className="text-gray-300">+92 333 1266448</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-neon-500 flex-shrink-0" />
                <span className="text-gray-300">{process.env.EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-neon-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Onyxbulls. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="#"
                className="text-gray-400 hover:text-neon-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-neon-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
