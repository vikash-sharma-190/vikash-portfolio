"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
    Code2, Server, Database, Cloud, Monitor, TestTube2, Layers,
    Activity, Cpu, ShieldCheck, Braces, Zap,
} from "lucide-react";

const skillCategories = [
    {
        title: "Languages",
        icon: Code2,
        color: "from-amber-500 to-orange-500",
        glow: "shadow-amber-500/20",
        skills: ["Java (8–21)", "Python", "TypeScript", "JavaScript"],
    },
    {
        title: "Backend",
        icon: Server,
        color: "from-emerald-500 to-teal-500",
        glow: "shadow-emerald-500/20",
        skills: ["Spring Boot", "Spring MVC", "Spring Security", "JPA", "Hibernate", "REST APIs", "GraphQL"],
    },
    {
        title: "Distributed Systems",
        icon: Layers,
        color: "from-purple-500 to-violet-500",
        glow: "shadow-purple-500/20",
        skills: ["Microservices Architecture", "Event-Driven Systems", "Apache Kafka"],
    },
    {
        title: "Data Processing",
        icon: Cpu,
        color: "from-cyan-500 to-blue-500",
        glow: "shadow-cyan-500/20",
        skills: ["Kafka Streams", "Batch Processing"],
    },
    {
        title: "Databases",
        icon: Database,
        color: "from-blue-500 to-indigo-500",
        glow: "shadow-blue-500/20",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Cassandra", "DynamoDB", "CosmosDB"],
    },
    {
        title: "Caching",
        icon: Zap,
        color: "from-yellow-500 to-amber-500",
        glow: "shadow-yellow-500/20",
        skills: ["Redis", "Ehcache"],
    },
    {
        title: "Cloud",
        icon: Cloud,
        color: "from-sky-500 to-blue-500",
        glow: "shadow-sky-500/20",
        skills: ["Microsoft Azure", "AWS"],
    },
    {
        title: "DevOps & Infra",
        icon: ShieldCheck,
        color: "from-rose-500 to-pink-500",
        glow: "shadow-rose-500/20",
        skills: ["Docker", "Kubernetes", "Jenkins", "CI/CD Pipelines"],
    },
    {
        title: "Observability",
        icon: Activity,
        color: "from-green-500 to-emerald-500",
        glow: "shadow-green-500/20",
        skills: ["Prometheus", "Grafana", "Kibana", "AppDynamics"],
    },
    {
        title: "Frontend",
        icon: Monitor,
        color: "from-fuchsia-500 to-purple-500",
        glow: "shadow-fuchsia-500/20",
        skills: ["Angular", "React", "HTML", "CSS"],
    },
    {
        title: "Testing",
        icon: TestTube2,
        color: "from-lime-500 to-green-500",
        glow: "shadow-lime-500/20",
        skills: ["JUnit", "Mockito", "Cucumber", "Selenium"],
    },
    {
        title: "Other",
        icon: Braces,
        color: "from-slate-400 to-zinc-500",
        glow: "shadow-slate-500/20",
        skills: ["System Design", "API Design", "Performance Optimization"],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.06, delayChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" as const },
    },
};

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = category.icon;

    return (
        <motion.div
            variants={cardVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm transition-all duration-500 hover:border-white/15 hover:bg-white/[0.04] ${isHovered ? `shadow-lg ${category.glow}` : ""}`}
        >
            {/* Gradient line at top */}
            <motion.div
                className={`absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r ${category.color} rounded-full`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                style={{ originX: 0 }}
            />

            <div className="flex items-center gap-3 mb-4">
                <motion.div
                    className={`flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br ${category.color} shadow-lg`}
                    animate={{ rotate: isHovered ? 360 : 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" as const }}
                >
                    <Icon className="w-4.5 h-4.5 text-white" />
                </motion.div>
                <h3 className="text-sm font-semibold text-white/90 tracking-wide">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, i) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                    >
                        <Badge
                            variant="secondary"
                            className="bg-white/[0.06] hover:bg-white/15 text-white/70 hover:text-white border-0 px-2.5 py-1 text-xs font-normal transition-all duration-300 cursor-default"
                        >
                            {skill}
                        </Badge>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export function About() {
    return (
        <section className="relative py-24 bg-black text-white px-4 overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        className="inline-block text-sm font-medium tracking-widest uppercase text-purple-400 mb-4"
                        initial={{ opacity: 0, letterSpacing: "0.1em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        About Me
                    </motion.span>

                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50">
                        Crafting Digital Excellence
                    </h2>

                    <motion.div
                        className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mt-6"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.div>

                {/* About content */}
                <div className="grid lg:grid-cols-5 gap-12 items-start mb-20">
                    {/* Bio text */}
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="space-y-5 text-base text-white/60 leading-relaxed">
                            <p>
                                A passionate <span className="text-white font-medium">Software Engineer</span> with 6+ years
                                building scalable backend systems, enterprise solutions, and AI-driven applications.
                                Currently at <span className="text-purple-400 font-medium">PepsiCo</span>, leading development
                                for strategic planning tools and driving GenAI adoption.
                            </p>
                            <p>
                                My journey began at <span className="text-white font-medium">MoveInSync</span>, optimizing
                                routing algorithms and building employee-facing apps. I thrive on dismantling monoliths
                                into microservices and architecting autonomous AI agents.
                            </p>
                            <p>
                                Whether it&apos;s optimizing supply chains or automating tasks with LLMs,
                                I&apos;m always learning and building the future.
                            </p>
                        </div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {[
                                { value: "5+", label: "Years Exp." },
                                { value: "20+", label: "Projects" },
                                { value: "12+", label: "Technologies" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Skills grid */}
                    <motion.div
                        className="lg:col-span-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="grid sm:grid-cols-2 gap-3">
                            {skillCategories.map((category, index) => (
                                <SkillCard key={category.title} category={category} index={index} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
