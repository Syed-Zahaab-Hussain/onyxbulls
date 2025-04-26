"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { CheckCircle, Loader2, XCircle } from "lucide-react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";

// Define form schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        values,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setAlert({
        type: "success",
        message: "Your message has been sent successfully!",
      });
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      setAlert({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-black/50 rounded-xl p-8 shadow-lg border border-neon-500/20 dark:border-neon-500/30"
    >
      {alert && (
        <Alert
          variant={alert.type === "success" ? "default" : "destructive"}
          className={`mb-6 ${
            alert.type === "success"
              ? "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900"
              : "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900"
          }`}
        >
          <div className="flex items-center gap-2">
            {alert.type === "success" ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <XCircle className="h-5 w-5" />
            )}
            <div>
              <AlertTitle>
                {alert.type === "success" ? "Success" : "Error"}
              </AlertTitle>
              <AlertDescription>{alert.message}</AlertDescription>
            </div>
          </div>
        </Alert>
      )}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Your Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-gray-50 dark:bg-black/50 border-gray-200 dark:border-gray-800 focus:border-neon-500 dark:focus:border-neon-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email Address <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      className="bg-gray-50 dark:bg-black/50 border-gray-200 dark:border-gray-800 focus:border-neon-500 dark:focus:border-neon-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-gray-50 dark:bg-black/50 border-gray-200 dark:border-gray-800 focus:border-neon-500 dark:focus:border-neon-500"
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Subject <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-gray-50 dark:bg-black/50 border-gray-200 dark:border-gray-800 focus:border-neon-500 dark:focus:border-neon-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Your Message <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={6}
                    className="bg-gray-50 dark:bg-black/50 border-gray-200 dark:border-gray-800 focus:border-neon-500 dark:focus:border-neon-500 resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full bg-neon-500 hover:bg-neon-600 text-black py-6 text-lg transition-all duration-300 shadow-[0_0_10px_rgba(0,255,170,0.3)] hover:shadow-[0_0_20px_rgba(0,255,170,0.5)]"
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
