'use client'

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <MapPin className="h-6 w-6 text-neon-500" />,
      title: "Our Location",
      details: [
        "behind virtual university, Model Town, Quetta, Balochistan, Pakistan",
      ],
      action: {
        text: "Get Directions",
        url: "https://maps.app.goo.gl/Q3opY3u6CKFbvEadA",
        icon: <ExternalLink className="ml-2 h-4 w-4" />,
      },
    },
    {
      icon: <Phone className="h-6 w-6 text-neon-500" />,
      title: "Phone Numbers",
      details: [
        "+92 333 1266448 (General Inquiries)",
        "+92 333 1266448 (Support)",
      ],
      action: {
        text: "Call Us",
        url: "tel:+92 333 1266448",
        icon: null,
      },
    },
    {
      icon: <Mail className="h-6 w-6 text-neon-500" />,
      title: "Email Addresses",
      details: ["info@onyxbulls.com", "support@onyxbulls.com"],
      action: {
        text: "Email Us",
        url: "mailto:info@onyxbulls.com",
        icon: null,
      },
    },
    {
      icon: <Clock className="h-6 w-6 text-neon-500" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM EST",
        "Saturday - Sunday: Closed",
      ],
      action: null,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Contact Information
      </h2>

      <div className="space-y-8">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="flex"
          >
            <div className="flex-shrink-0 mr-4 bg-neon-100 dark:bg-neon-900/30 p-3 rounded-full">
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-gray-600 dark:text-gray-300 mb-1">
                  {detail}
                </p>
              ))}
              {item.action && (
                <a
                  href={item.action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 text-neon-600 dark:text-neon-500 font-medium hover:text-neon-700 dark:hover:text-neon-400 transition-colors"
                >
                  {item.action.text}
                  {item.action.icon}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
