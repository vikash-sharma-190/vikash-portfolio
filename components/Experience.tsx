"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
    Briefcase, Calendar, MapPin, ChevronDown, ChevronUp,
    TrendingUp, Zap, ArrowUpRight,
} from "lucide-react";

type Achievement = {
    text: string;
    highlight?: string;
};

const experiences = [
    {
        company: "PepsiCo",
        role: "Software Engineer",
        location: "Gurgaon",
        period: "Dec 2022 – Present",
        color: "from-blue-500 to-cyan-500",
        dotColor: "bg-blue-500",
        glowColor: "shadow-blue-500/20",
        description: "Backend developer on the CAF layer leveraging GraphQL and Spring Boot. Driving GenAI adoption and engineering critical internal tools.",
        achievements: [
            { text: "Took responsibility for predefined projects previously overseen by third-party vendors, playing a pivotal role in implementing hierarchy changes within PepsiCo PGT.", highlight: undefined },
            { text: "Engineered a dynamic query builder that resulted in a 30% reduction in development effort. Conducted comprehensive code rewrite using OOPs principles, elevating code coverage to 85%.", highlight: "30% reduction in dev effort" },
            { text: "Designed and implemented a Framework for calling Salesforce, significantly reducing development time by 30%. Led the Low-Level Design for each User Story with only a 1% bug reporting rate.", highlight: "1% bug rate" },
            { text: "Developed an app configuration library serving as a single point of truth. Integrated Circuit Breaker and retry mechanisms for enhanced reliability.", highlight: undefined },
            { text: "Thoroughly documented all stories into a library, aiding fellow developers. Developed tools utilizing Azure Open AI and created a local Ollama with 6+ models for versatile local applications.", highlight: "6+ AI models" },
            { text: "Crafted an ALM life cycle tool specifically tailored for hackathons.", highlight: undefined },
        ] as Achievement[],
        metrics: [
            { label: "Dev Effort Reduced", value: "30%" },
            { label: "Code Coverage", value: "85%" },
            { label: "Bug Rate", value: "1%" },
            { label: "AI Models Built", value: "6+" },
        ],
        tech: ["Java", "Spring Boot", "GraphQL", "Azure", "Azure OpenAI", "Salesforce", "Ollama", "Circuit Breaker"],
    },
    {
        company: "MoveInSync",
        role: "Software Engineer II",
        location: "Bangalore",
        period: "Apr 2022 – Nov 2022",
        color: "from-purple-500 to-pink-500",
        dotColor: "bg-purple-500",
        glowColor: "shadow-purple-500/20",
        description: "Stabilized production services and led team delivery with focus on DevOps automation and system performance.",
        achievements: [
            { text: "Stabilized production services including meeting room, reporting, analytics, and vehicle optimization tools — achieving 99.9% uptime and 20% increase in overall system efficiency.", highlight: "99.9% uptime" },
            { text: "Developed a Kiosk Meeting Room application for both Android and iOS devices, making onboarding a smooth process.", highlight: undefined },
            { text: "Created automation tools for DevOps, leading to a 40% improvement in deployment speed and 25% reduction in manual intervention. Implemented auto-scaling, resulting in 15% reduction in infrastructure costs.", highlight: "40% faster deployments" },
            { text: "Developed tools to analyze large log service datasets using Python, improving log processing speed by 20%.", highlight: "20% faster log processing" },
            { text: "Implemented Google Calendar and Outlook Calendar integrations, contributing to a 30% increase in user engagement.", highlight: "30% more engagement" },
            { text: "Led a team achieving 90% timely delivery with only 5% sprint spillage. Optimized code for two microservices resulting in 25% performance improvement.", highlight: "90% on-time delivery" },
            { text: "Monitored Grafana and Raygun services, resulting in 20% reduction in system incidents. Resolved 800 Raygun bugs.", highlight: "800 bugs resolved" },
            { text: "Guided and mentored 20+ interns, contributing to 95% satisfaction rate and 80% increase in team productivity.", highlight: "20+ interns mentored" },
        ] as Achievement[],
        metrics: [
            { label: "Uptime", value: "99.9%" },
            { label: "Deploy Speed", value: "+40%" },
            { label: "Bugs Resolved", value: "800" },
            { label: "Interns Mentored", value: "20+" },
        ],
        tech: ["Java", "Spring Boot", "Python", "Grafana", "Raygun", "Docker", "Android", "iOS"],
    },
    {
        company: "MoveInSync",
        role: "Software Engineer",
        location: "Bangalore",
        period: "Aug 2020 – Apr 2022",
        color: "from-emerald-500 to-teal-500",
        dotColor: "bg-emerald-500",
        glowColor: "shadow-emerald-500/20",
        description: "Full-stack engineer building microservices from scratch, handling 100k+ requests/min traffic.",
        achievements: [
            { text: "Developed UI microservice from scratch for Reporting Service — showcasing day-to-day data and visualization dashboards for clients, fetching data from Jasper, DataLake, ELS, and other databases. Managed 50k traffic.", highlight: "50k traffic managed" },
            { text: "Developed Route Management Dashboard microservice from scratch — a unified platform for all route-related activities including planning, generating, merging, and splitting routes. Supported 100k requests per minute.", highlight: "100k req/min" },
            { text: "Contributed to end-to-end software products including Sandbox and Google POI Management service.", highlight: undefined },
            { text: "Developed AutoCab allocation service for 10k users.", highlight: "10k users served" },
            { text: "Created Address ↔ Geocode Tools and Visualization as an internal tool.", highlight: undefined },
            { text: "Reduced sonar issues by 80% through code simplification.", highlight: "80% fewer sonar issues" },
            { text: "Rewrote multiple Microservices using Java 8 and Spring 2.x. Developed feature for capturing cab information and generating optimized routes.", highlight: undefined },
        ] as Achievement[],
        metrics: [
            { label: "Peak Traffic", value: "100k/min" },
            { label: "Users Served", value: "10k" },
            { label: "Sonar Issues", value: "-80%" },
            { label: "Services Built", value: "5+" },
        ],
        tech: ["Java 8", "Spring Boot", "Spring MVC", "Angular", "JSP", "Kafka", "Redis", "PostgreSQL"],
    },
];

function HighlightedText({ text, highlight }: Achievement) {
    if (!highlight) return <>{text}</>;
    const parts = text.split(new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "i"));
    return (
        <>
            {parts.map((part, i) =>
                part.toLowerCase() === highlight.toLowerCase() ? (
                    <span key={i} className="text-white font-semibold bg-white/10 px-1 rounded">
                        {part}
                    </span>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </>
    );
}

function MetricPill({ label, value }: { label: string; value: string }) {
    return (
        <motion.div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
        >
            <TrendingUp className="w-3 h-3 text-emerald-400" />
            <span className="text-xs text-white/80 font-semibold">{value}</span>
            <span className="text-xs text-white/40">{label}</span>
        </motion.div>
    );
}

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
    const [expanded, setExpanded] = useState(index === 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative pl-8 md:pl-12"
        >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-4 top-2 z-10">
                <motion.div
                    className={`w-4 h-4 rounded-full ${exp.dotColor} ring-4 ring-black`}
                    whileHover={{ scale: 1.3 }}
                />
            </div>

            {/* Card */}
            <motion.div
                className={`relative rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-white/10 ${expanded ? `shadow-lg ${exp.glowColor}` : ""}`}
                layout
            >
                {/* Top gradient bar */}
                <div className={`h-[2px] bg-gradient-to-r ${exp.color}`} />

                {/* Header - always visible */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="w-full text-left p-5 md:p-6"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg md:text-xl font-bold text-white">{exp.role}</h3>
                                <ArrowUpRight className="w-4 h-4 text-white/30" />
                            </div>
                            <div className="flex items-center gap-3 text-sm text-white/50">
                                <span className="flex items-center gap-1">
                                    <Briefcase className="w-3.5 h-3.5" />
                                    {exp.company}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-3.5 h-3.5" />
                                    {exp.location}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {exp.period}
                                </span>
                            </div>
                        </div>
                        <motion.div
                            animate={{ rotate: expanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="self-end md:self-center"
                        >
                            <ChevronDown className="w-5 h-5 text-white/30" />
                        </motion.div>
                    </div>

                    {/* Metrics row - always visible */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {exp.metrics.map((m) => (
                            <MetricPill key={m.label} label={m.label} value={m.value} />
                        ))}
                    </div>
                </button>

                {/* Expandable content */}
                <AnimatePresence initial={false}>
                    {expanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="px-5 md:px-6 pb-6 space-y-5">
                                <div className="h-px bg-white/[0.06]" />

                                <p className="text-sm text-white/50 italic">{exp.description}</p>

                                {/* Achievements */}
                                <div className="space-y-3">
                                    {exp.achievements.map((a, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex gap-3 text-sm text-white/60 leading-relaxed"
                                        >
                                            <Zap className="w-3.5 h-3.5 text-amber-400 mt-1 shrink-0" />
                                            <span>
                                                <HighlightedText text={a.text} highlight={a.highlight} />
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {exp.tech.map((t) => (
                                        <Badge
                                            key={t}
                                            variant="secondary"
                                            className="bg-white/[0.05] hover:bg-white/10 text-white/60 hover:text-white border-0 px-2.5 py-1 text-xs transition-all duration-300"
                                        >
                                            {t}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

export function Experience() {
    return (
        <section className="relative py-24 bg-black text-white px-4 overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        className="inline-block text-sm font-medium tracking-widest uppercase text-blue-400 mb-4"
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Experience
                    </motion.span>

                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                        Professional Journey
                    </h2>

                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-6"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[7px] md:left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-emerald-500/50" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
