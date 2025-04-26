"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TradingTable from "@/app/(root)/(home)/components/trading-table";

export default function TradingAssetsSection() {
  return (
    <section className="py-16 container mx-auto px-4 bg-white dark:bg-black transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Trade Assets From Global Markets
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          Capitalize on every opportunity with the world&apos;s most popular
          assets.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Tabs defaultValue="currency" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8 bg-gray-100 dark:bg-black/50 border border-neon-500/20 dark:border-neon-500/30">
            <TabsTrigger
              value="currency"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-black data-[state=active]:text-neon-600 dark:data-[state=active]:text-neon-500 data-[state=active]:shadow-none"
            >
              Currency Pairs
            </TabsTrigger>
            <TabsTrigger
              value="indices"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-black data-[state=active]:text-neon-600 dark:data-[state=active]:text-neon-500 data-[state=active]:shadow-none"
            >
              Indices
            </TabsTrigger>
            <TabsTrigger
              value="cryptos"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-black data-[state=active]:text-neon-600 dark:data-[state=active]:text-neon-500 data-[state=active]:shadow-none"
            >
              Cryptos
            </TabsTrigger>
            <TabsTrigger
              value="shares"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-black data-[state=active]:text-neon-600 dark:data-[state=active]:text-neon-500 data-[state=active]:shadow-none"
            >
              Shares
            </TabsTrigger>
          </TabsList>

          <TabsContent value="currency">
            <TradingTable type="currency" />
          </TabsContent>
          <TabsContent value="indices">
            <TradingTable type="indices" />
          </TabsContent>
          <TabsContent value="cryptos">
            <TradingTable type="cryptos" />
          </TabsContent>
          <TabsContent value="shares">
            <TradingTable type="shares" />
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}
