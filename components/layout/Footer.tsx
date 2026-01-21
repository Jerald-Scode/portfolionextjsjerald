"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { navLinks, personalInfo, socialLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: Github, href: socialLinks.github, label: "GitHub" },
    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
    { icon: Mail, href: socialLinks.email, label: "Email" },
  ];

  return (
    <footer className="relative border-t border-[#27272a] bg-[#0a0a0f]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <span className="text-2xl font-bold gradient-text">
                  {personalInfo.name}
                </span>
              </Link>
              <p className="text-[#71717a] text-sm leading-relaxed mb-6 max-w-xs">
                {personalInfo.title} passionate about creating beautiful and
                functional digital experiences.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialIcons.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#111118] border border-[#27272a] text-[#71717a] hover:text-white hover:border-indigo-500 transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#71717a] hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-[#71717a] hover:text-white transition-colors text-sm"
                  >
                    {personalInfo.email}
                  </a>
                </li>
                <li className="text-[#71717a] text-sm">{personalInfo.location}</li>
                <li className="text-[#71717a] text-sm">{personalInfo.availability}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#27272a]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#71717a] text-sm">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-[#71717a] text-sm flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> using Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
