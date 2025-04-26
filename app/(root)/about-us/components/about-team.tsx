"use client";

import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { TypedObject } from "sanity";

interface TeamMember {
  _id: number;
  name: string;
  role: string;
  bio: TypedObject[];
  image: string;
}

export default function AboutTeam({
  teamMembers,
}: {
  teamMembers: TeamMember[];
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-black/50 border-y border-neon-500/10 dark:border-neon-500/20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Meet Our Expert Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Our instructors are not just educators—they&apos;re active traders
            with years of experience in the markets. Learn from professionals
            who practice what they teach.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member._id}
              variants={itemVariants}
              className="bg-white dark:bg-black/50 rounded-xl overflow-hidden shadow-lg border border-neon-500/20 dark:border-neon-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,170,0.2)] dark:hover:shadow-[0_0_20px_rgba(0,255,170,0.3)]"
            >
              <div className="relative h-64">
                <Image
                  src={
                    member.image && urlFor(member.image).url()
                      ? urlFor(member.image).url()
                      : "https://placehold.co/600x400?text=No+Image"
                  }
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-neon-600 dark:text-neon-500 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <div className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  <PortableText value={member.bio} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
