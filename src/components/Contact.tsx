"use client";

import React, { useRef, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Define your EmailJS credentials directly in the component for static sites
// Replace these with your actual values
const EMAILJS_SERVICE_ID = "service_m1qpc5q";
const EMAILJS_TEMPLATE_ID = "template_azlu3oo";
const EMAILJS_PUBLIC_KEY = "lUywZ-nfNbwO1GOmE";

const Contact = () => {
  const { theme } = useTheme();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) {
      console.error('Form reference is not set');
      return;
    }

    // Check if EmailJS credentials are set
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast({
        title: "Configuration Error",
        description: "EmailJS is not properly configured. Please set your EmailJS credentials in the Contact component.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      console.log('SUCCESS!', result.text);
      form.current.reset();
      
      toast({
        title: "Message Sent!",
        description: "Thanks for your message! We will get back to you soon.",
      });
    } catch (error: any) {
      console.error('FAILED...', error);
      
      toast({
        title: "Failed to send message",
        description: error.text || "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Contact Us</CardTitle>
            <CardDescription className="text-lg mt-2">
              We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full min-h-[150px]"
                    required
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;