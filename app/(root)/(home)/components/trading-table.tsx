"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TradingPair {
  symbol: string;
  bid: number;
  ask: number;
  spread: number;
}

interface TradingTableProps {
  type: "currency" | "indices" | "cryptos" | "shares";
}

export default function TradingTable({ type }: TradingTableProps) {
  const [pairs, setPairs] = useState<TradingPair[]>([]);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll use mock data based on the type
    const mockData: Record<string, TradingPair[]> = {
      currency: [
        { symbol: "EURUSD", bid: 1.0784, ask: 1.0786, spread: 2 },
        { symbol: "GBPUSD", bid: 1.2654, ask: 1.2657, spread: 3 },
        { symbol: "USDJPY", bid: 151.43, ask: 151.46, spread: 3 },
        { symbol: "AUDUSD", bid: 0.6574, ask: 0.6577, spread: 3 },
        { symbol: "USDCAD", bid: 1.3645, ask: 1.3648, spread: 3 },
      ],
      indices: [
        { symbol: "US30", bid: 38245.5, ask: 38248.5, spread: 3 },
        { symbol: "SPX500", bid: 5123.25, ask: 5124.75, spread: 1.5 },
        { symbol: "NASDAQ", bid: 17845.75, ask: 17847.25, spread: 1.5 },
        { symbol: "UK100", bid: 7654.5, ask: 7656.5, spread: 2 },
        { symbol: "GER40", bid: 17845.5, ask: 17847.5, spread: 2 },
      ],
      cryptos: [
        { symbol: "BTCUSD", bid: 61245.5, ask: 61275.5, spread: 30 },
        { symbol: "ETHUSD", bid: 3045.25, ask: 3048.75, spread: 3.5 },
        { symbol: "XRPUSD", bid: 0.5123, ask: 0.5128, spread: 0.0005 },
        { symbol: "LTCUSD", bid: 78.45, ask: 78.55, spread: 0.1 },
        { symbol: "ADAUSD", bid: 0.4523, ask: 0.4528, spread: 0.0005 },
      ],
      shares: [
        { symbol: "AAPL", bid: 175.45, ask: 175.55, spread: 0.1 },
        { symbol: "MSFT", bid: 415.75, ask: 415.95, spread: 0.2 },
        { symbol: "AMZN", bid: 178.25, ask: 178.45, spread: 0.2 },
        { symbol: "GOOGL", bid: 145.75, ask: 145.85, spread: 0.1 },
        { symbol: "META", bid: 485.25, ask: 485.45, spread: 0.2 },
      ],
    };

    setPairs(mockData[type]);
  }, [type]);

  const tableVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={tableVariants}
      className="rounded-lg border border-neon-500/20 dark:border-neon-500/30 overflow-hidden transition-colors duration-300"
    >
      <Table>
        <TableHeader className="bg-gray-100 dark:bg-black/70">
          <TableRow className="border-b border-neon-500/20 dark:border-neon-500/30">
            <TableHead className="w-[200px] text-gray-800 dark:text-white">
              Symbol
            </TableHead>
            <TableHead className="text-right text-gray-800 dark:text-white">
              Bid
            </TableHead>
            <TableHead className="text-right text-gray-800 dark:text-white">
              Ask
            </TableHead>
            <TableHead className="text-right text-gray-800 dark:text-white">
              Spread
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pairs.map((pair) => (
            <motion.tr
              key={pair.symbol}
              variants={rowVariants}
              className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-black/30 transition-colors"
            >
              <TableCell className="font-medium text-gray-800 dark:text-white">
                {pair.symbol}
              </TableCell>
              <TableCell className="text-right text-gray-800 dark:text-white">
                {pair.bid.toFixed(
                  type === "currency" || type === "cryptos" ? 4 : 2
                )}
              </TableCell>
              <TableCell className="text-right text-gray-800 dark:text-white">
                {pair.ask.toFixed(
                  type === "currency" || type === "cryptos" ? 4 : 2
                )}
              </TableCell>
              <TableCell className="text-right text-neon-600 dark:text-neon-500 font-medium">
                {pair.spread}
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}
