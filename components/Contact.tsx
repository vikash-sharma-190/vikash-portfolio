"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export function Contact() {
    return (
        <section className="py-20 bg-gradient-to-b from-black to-slate-950 text-white px-4">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing</h2>
                    <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                        I'm currently open to new opportunities. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <Button size="lg" className="rounded-full h-12 px-8 text-base bg-white text-black hover:bg-white/90 w-full sm:w-auto">
                            <Mail className="w-4 h-4 mr-2" /> Say Hello
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base border-white/20 hover:bg-white/10 text-white w-full sm:w-auto">
                            <Phone className="w-4 h-4 mr-2" /> Schedule Call
                        </Button>
                    </div>

                    <div className="flex gap-8 justify-center border-t border-white/10 pt-8">
                        <a href="#" className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                            <span className="text-xs">GitHub</span>
                        </a>
                        <a href="#" className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors">
                            <Linkedin className="w-6 h-6" />
                            <span className="text-xs">LinkedIn</span>
                        </a>
                        <a href="#" className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors">
                            <Mail className="w-6 h-6" />
                            <span className="text-xs">Email</span>
                        </a>
                    </div>

                    <p className="text-white/30 text-sm mt-12">
                        © {new Date().getFullYear()} Vikash Vishwakarma. Built with Next.js, Tailwind & Shadcn UI.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
