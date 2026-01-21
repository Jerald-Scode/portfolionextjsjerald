"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Section, Card, Badge, Button, AnimatedSection } from "@/components/ui";
import { personalInfo, contactInfo, socialLinks } from "@/lib/data";
import { isValidEmail } from "@/lib/utils";

const contactIcons = {
  email: Mail,
  location: MapPin,
  phone: Phone,
  website: Mail,
};

const socialIcons = [
  { icon: Github, href: socialLinks.github, label: "GitHub" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="primary" className="mb-6">
              Contact
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg md:text-xl text-[#a1a1aa] leading-relaxed">
              Have a project in mind or just want to say hi? I&apos;d love to hear
              from you. Fill out the form below or reach out through any of my
              social channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = contactIcons[info.type];
            return (
              <AnimatedSection key={info.type} delay={index * 0.1}>
                <a
                  href={info.href}
                  target={info.type === "email" ? undefined : "_blank"}
                  rel={info.type === "email" ? undefined : "noopener noreferrer"}
                  className="block"
                >
                  <Card className="h-full text-center group" gradient>
                    <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit mx-auto mb-4 group-hover:bg-indigo-500/20 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {info.label}
                    </h3>
                    <p className="text-[#a1a1aa] group-hover:text-indigo-400 transition-colors">
                      {info.value}
                    </p>
                  </Card>
                </a>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <Card className="p-8" gradient>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#a1a1aa] mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#111118] border border-[#27272a] rounded-lg text-white placeholder-[#71717a] focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#a1a1aa] mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-[#111118] border border-[#27272a] rounded-lg text-white placeholder-[#71717a] focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-[#a1a1aa] mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#111118] border border-[#27272a] rounded-lg text-white placeholder-[#71717a] focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#a1a1aa] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#111118] border border-[#27272a] rounded-lg text-white placeholder-[#71717a] focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400"
                    >
                      <CheckCircle2 className="h-5 w-5" />
                      <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400"
                    >
                      <AlertCircle className="h-5 w-5" />
                      <span>Please enter a valid email address.</span>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    isLoading={isSubmitting}
                    rightIcon={<Send className="h-5 w-5" />}
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Response Time */}
            <AnimatedSection delay={0.1}>
              <Card gradient>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Quick Response
                    </h3>
                    <p className="text-[#a1a1aa] text-sm">
                      I typically respond to messages within 24 hours during
                      business days.
                    </p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection delay={0.2}>
              <Card gradient>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Connect on Social
                </h3>
                <div className="flex flex-col gap-3">
                  {socialIcons.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-[#111118] border border-[#27272a] text-[#a1a1aa] hover:text-white hover:border-indigo-500 transition-all"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{label}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </AnimatedSection>

            {/* Availability */}
            <AnimatedSection delay={0.3}>
              <Card gradient>
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-green-400 font-medium">
                    {personalInfo.availability}
                  </span>
                </div>
                <p className="text-[#a1a1aa] text-sm">
                  I&apos;m currently open to new projects, freelance work, and
                  full-time opportunities.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </Section>
    </>
  );
}
