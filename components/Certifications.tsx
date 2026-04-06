"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
    Award, Trophy, GraduationCap, Calendar, Star,
    ExternalLink, ChevronRight, Sparkles,
} from "lucide-react";

const certificates = [
    {
        title: "Database Management System",
        issuer: "NPTEL",
        period: "Jan 2019 – Apr 2019",
        color: "from-blue-500 to-indigo-500",
    },
    {
        title: "Programming in Java",
        issuer: "NPTEL",
        period: "Jan 2019 – Apr 2019",
        color: "from-amber-500 to-orange-500",
    },
    {
        title: "Python for Data Science",
        issuer: "NPTEL",
        period: "Sep 2019 – Oct 2019",
        color: "from-emerald-500 to-teal-500",
    },
    {
        title: "Certified Data Scientist",
        issuer: "Internshala",
        period: "Jan 2020 – May 2020",
        color: "from-purple-500 to-pink-500",
    },
    {
        title: "Introduction to Data Science in Python",
        issuer: "NPTEL",
        period: "Jan 2020 – May 2020",
        color: "from-cyan-500 to-blue-500",
    },
];

const recognitions = [
    {
        title: "Falcon Award 2021 — Best Mentor",
        company: "MoveInSync",
        description: "Received annually for outstanding mentorship, including hiring and guiding 30 interns in various technical tasks and knowledge acquisition.",
        highlight: "30 interns",
        icon: Trophy,
        color: "from-amber-400 to-yellow-500",
        glowColor: "hover:shadow-amber-500/20",
    },
    {
        title: "Make a Difference Award 2022",
        company: "MoveInSync",
        description: "Recognized for taking ownership, taking challenges with a high degree of availability, and consistently making a positive impact.",
        highlight: "ownership & impact",
        icon: Star,
        color: "from-purple-400 to-violet-500",
        glowColor: "hover:shadow-purple-500/20",
    },
    {
        title: "Living the PepsiCo Way",
        company: "PepsiCo",
        description: "Acknowledged for impactful contributions in PGT changes, including onboarding other engineers, creating technical documentation, and actively sharing knowledge.",
        highlight: "impactful contributions",
        icon: Sparkles,
        color: "from-blue-400 to-cyan-500",
        glowColor: "hover:shadow-blue-500/20",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

export function Certifications() {
    const [activeTab, setActiveTab] = useState<"certifications" | "recognition">("certifications");

    return (
        <section className="relative py-24 bg-black text-white px-4 overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <motion.span
                        className="inline-block text-sm font-medium tracking-widest uppercase text-amber-400 mb-4"
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Achievements
                    </motion.span>

                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                        Certifications & Recognition
                    </h2>

                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto mt-6"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.div>

                {/* Tab switcher */}
                <motion.div
                    className="flex justify-center mb-12"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="inline-flex rounded-full bg-white/[0.04] border border-white/[0.08] p-1">
                        <button
                            onClick={() => setActiveTab("certifications")}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeTab === "certifications"
                                    ? "bg-white/10 text-white shadow-lg"
                                    : "text-white/50 hover:text-white/70"
                            }`}
                        >
                            <GraduationCap className="w-4 h-4" />
                            Certifications
                        </button>
                        <button
                            onClick={() => setActiveTab("recognition")}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeTab === "recognition"
                                    ? "bg-white/10 text-white shadow-lg"
                                    : "text-white/50 hover:text-white/70"
                            }`}
                        >
                            <Trophy className="w-4 h-4" />
                            Recognition
                        </button>
                    </div>
                </motion.div>

                {/* Content */}
                {activeTab === "certifications" ? (
                    <motion.div
                        key="certifications"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                variants={itemVariants}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-lg"
                            >
                                {/* Top gradient */}
                                <div className={`absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r ${cert.color} rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="flex items-start gap-3 mb-3">
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${cert.color} shadow-lg shrink-0`}>
                                        <GraduationCap className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="min-w-0">
                                        <h3 className="text-sm font-semibold text-white/90 leading-tight">{cert.title}</h3>
                                        <p className="text-xs text-white/40 mt-1">{cert.issuer}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5 text-xs text-white/30">
                                    <Calendar className="w-3 h-3" />
                                    {cert.period}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="recognition"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-5 max-w-3xl mx-auto"
                    >
                        {recognitions.map((rec, index) => {
                            const Icon = rec.icon;
                            return (
                                <motion.div
                                    key={rec.title}
                                    variants={itemVariants}
                                    className={`group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-lg ${rec.glowColor}`}
                                >
                                    {/* Left gradient bar */}
                                    <div className={`absolute top-4 bottom-4 left-0 w-[3px] bg-gradient-to-b ${rec.color} rounded-full`} />

                                    <div className="flex gap-4">
                                        <motion.div
                                            className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${rec.color} shadow-lg shrink-0`}
                                            whileHover={{ rotate: 12, scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Icon className="w-6 h-6 text-white" />
                                        </motion.div>

                                        <div className="space-y-2 min-w-0">
                                            <div className="flex items-center gap-3 flex-wrap">
                                                <h3 className="text-base font-bold text-white">{rec.title}</h3>
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-white/[0.06] text-white/50 border-0 text-xs"
                                                >
                                                    {rec.company}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-white/50 leading-relaxed">
                                                {rec.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
