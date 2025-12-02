"use client";

import { Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Have a question or ready to start your project? Contact us today.
          </p>
          <div className="mx-auto mt-8 h-1 w-24 bg-blue-200" />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-7">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Send Us A Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="full-name" className="font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input id="full-name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name" className="font-medium">
                    Company Name
                  </Label>
                  <Input id="company-name" placeholder="Your Company Ltd." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="service" className="font-medium">
                  Service of Interest <span className="text-red-500">*</span>
                </Label>
                <Select required>
                  <SelectTrigger id="service" className="w-full">
                    <SelectValue placeholder="General Inquiry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="ai-agents">
                      AI Agents &amp; Automation
                    </SelectItem>
                    <SelectItem value="observability">Observability</SelectItem>
                    <SelectItem value="data-engineering">
                      Data Engineering &amp; BI
                    </SelectItem>
                    <SelectItem value="mvp-development">
                      Rapid MVP Development
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-medium">
                  Your Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or requirements..."
                  required
                  rows={5}
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="bg-gray-900 px-6 text-white hover:bg-gray-800"
                >
                  Send Message
                </Button>
              </div>
              <p className="pt-2 text-xs text-gray-500">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </form>
          </div>

          <div className="rounded-lg bg-gray-50 p-8 lg:col-span-5">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Email Us
                  </h4>
                  <a
                    href="mailto:admin@antriva.co.in"
                    className="break-all text-blue-600 hover:underline"
                  >
                    admin@antriva.co.in
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Call Us
                  </h4>
                  <a
                    href="tel:+917795709574"
                    className="text-blue-600 hover:underline"
                  >
                    +91 7795709574
                  </a>
                </div>
              </div>
            </div>
            <div className="my-8 border-t border-gray-200" />
            <div>
              <h4 className="mb-2 text-lg font-semibold text-gray-900">
                Office Hours
              </h4>
              <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
              <p className="text-gray-600">Weekend: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;