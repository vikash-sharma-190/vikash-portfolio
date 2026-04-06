"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const roles = [
    "Backend Engineer",
    "AI Engineer",
    "System Architect",
    "Cloud Native Builder",
];

const floatingOrbs = [
    { size: 300, x: "10%", y: "15%", color: "bg-purple-600/20", delay: 0, duration: 20 },
    { size: 250, x: "75%", y: "10%", color: "bg-blue-600/20", delay: 2, duration: 25 },
    { size: 200, x: "50%", y: "70%", color: "bg-cyan-600/15", delay: 4, duration: 18 },
    { size: 350, x: "85%", y: "60%", color: "bg-indigo-600/15", delay: 1, duration: 22 },
    { size: 180, x: "20%", y: "75%", color: "bg-violet-600/20", delay: 3, duration: 16 },
];

function GridBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)]" />
        </div>
    );
}

function FloatingOrbs() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {floatingOrbs.map((orb, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full ${orb.color} blur-[100px]`}
                    style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y }}
                    animate={{
                        x: [0, 30, -20, 10, 0],
                        y: [0, -25, 15, -10, 0],
                        scale: [1, 1.1, 0.95, 1.05, 1],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        delay: orb.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

function TypingRole() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const speed = isDeleting ? 40 : 80;

        if (!isDeleting && text === currentRole) {
            const timeout = setTimeout(() => setIsDeleting(true), 2000);
            return () => clearTimeout(timeout);
        }

        if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setText(
                isDeleting
                    ? currentRole.substring(0, text.length - 1)
                    : currentRole.substring(0, text.length + 1)
            );
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <span className="inline-flex items-center gap-1 font-mono">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400">{text}</span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[2px] h-6 bg-emerald-400 ml-0.5"
            />
        </span>
    );
}

function ParticleField() {
    const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

    useEffect(() => {
        setParticles(
            Array.from({ length: 40 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                duration: Math.random() * 4 + 3,
                delay: Math.random() * 5,
            }))
        );
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-white/30"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

const socialLinks = [
    { href: "https://github.com/vikash-sharma-190", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/vikashvishwakarma190", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:vikashsharma190@gmail.com", icon: Mail, label: "Email" },
];

const stagger = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: "easeOut" as const },
    },
};

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4">
            <GridBackground />
            <FloatingOrbs />
            <ParticleField />

            {/* Radial spotlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl z-0" />

            <motion.div
                className="relative z-10 max-w-5xl mx-auto text-center"
                variants={stagger}
                initial="hidden"
                animate="visible"
            >
                {/* Status badge */}
                <motion.div variants={fadeUp} className="mb-8">
                    <motion.span
                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-sm font-medium backdrop-blur-xl"
                        whileHover={{ scale: 1.05, borderColor: "rgba(168,85,247,0.4)" }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        Available for new opportunities
                        <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    </motion.span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={fadeUp}
                    className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[0.95]"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                        Vikash
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                        Vishwakarma
                    </span>
                </motion.h1>

                {/* Typing role */}
                <motion.div variants={fadeUp} className="mt-6 text-lg md:text-xl text-white/60">
                    <TypingRole />
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={fadeUp}
                    className="mt-5 text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
                >
                    Building scalable distributed systems, enterprise-grade microservices,
                    and intelligent AI agents that transform how businesses operate.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeUp}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
                >
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <Button
                            size="lg"
                            className="rounded-full h-13 px-8 text-base bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 hover:opacity-90 shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)]"
                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        >
                            View Projects <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                        <a href="/Vikash_Vishwakarma_Senior_SDE.pdf" download>
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full h-13 px-8 text-base border-white/15 hover:bg-white/5 text-white backdrop-blur-sm"
                            >
                                Download Resume
                            </Button>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Social links */}
                <motion.div variants={fadeUp} className="flex gap-3 justify-center pt-10">
                    {socialLinks.map((link, i) => (
                        <motion.div
                            key={link.label}
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href={link.href}
                                target="_blank"
                                className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
                                aria-label={link.label}
                            >
                                <link.icon className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-white/30"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <ChevronDown className="w-4 h-4" />
                </motion.div>
            </motion.div>
        </section>
    );
}
