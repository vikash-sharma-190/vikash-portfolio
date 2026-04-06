"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
    BarChart3, Code2, Layers, Database, Plug, ShieldCheck,
    UserCheck, Globe, BrainCircuit, Bot, Building2, Calendar,
    Users, ChevronRight, X, Sparkles
} from "lucide-react";

/* ── Data ──────────────────────────────────────────────────────────────── */
interface Project {
    id: number;
    title: string;
    summary: string;
    description: string;
    company: "MoveInSync" | "PepsiCo";
    duration: string;
    team: string;
    contributions: string[];
    tech: string[];
    accentFrom: string;
    accentTo: string;
    icon: React.ReactNode;
    category: string;
}

const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Reporting & Routing Services",
        summary: "Backend services for operational insights and intelligent routing",
        description:
            "Developed core backend services to generate operational reports and enable intelligent routing decisions for enterprise transportation systems. These services processed large volumes of trip and logistics data to provide actionable insights and optimize routing efficiency.",
        company: "MoveInSync",
        duration: "2020 – 2022",
        team: "Backend team",
        contributions: [
            "Designed and developed reporting and routing microservices from scratch",
            "Implemented efficient data aggregation for large datasets",
            "Improved operational efficiency by ~15% through better routing insights",
            "Built scalable REST APIs used by multiple internal systems",
        ],
        tech: ["Java", "Spring Boot", "REST APIs", "MySQL", "PostgreSQL", "Microservices"],
        accentFrom: "#3b82f6",
        accentTo: "#6366f1",
        icon: <BarChart3 className="w-7 h-7" />,
        category: "Backend",
    },
    {
        id: 2,
        title: "Log Processing & Observability",
        summary: "Python-based tools for system monitoring and scheduling",
        description:
            "Built tools to process application logs and improve observability across backend systems. These tools helped engineering teams debug production issues faster and provided better insights into system behavior.",
        company: "MoveInSync",
        duration: "2021",
        team: "Backend + DevOps",
        contributions: [
            "Developed Python-based log parsing and processing pipelines",
            "Improved observability and reduced debugging time for production issues",
            "Integrated scheduling systems (Google Calendar, Outlook) for automation",
            "Structured logs for better analysis and monitoring",
        ],
        tech: ["Python", "Logging Frameworks", "APIs", "Scheduling Integrations"],
        accentFrom: "#10b981",
        accentTo: "#3b82f6",
        icon: <Layers className="w-7 h-7" />,
        category: "DevOps",
    },
    {
        id: 3,
        title: "Meeting Room Enablement Platform",
        summary: "Cross-platform system for enterprise meeting room onboarding",
        description:
            "Designed and developed a platform to enable and manage enterprise meeting rooms across multiple locations. The system automated setup, integration, and configuration processes, significantly reducing manual onboarding effort.",
        company: "MoveInSync",
        duration: "2021 – 2022",
        team: "Full-stack team",
        contributions: [
            "Built full-stack application using Angular (frontend) and Spring Boot (backend)",
            "Designed APIs for device integration and room configuration",
            "Reduced onboarding time by ~25% through automation",
            "Worked on end-to-end feature delivery including UI, backend, and deployment",
        ],
        tech: ["Angular", "Java", "Spring Boot", "REST APIs", "Microservices"],
        accentFrom: "#f59e0b",
        accentTo: "#ef4444",
        icon: <Users className="w-7 h-7" />,
        category: "Full-Stack",
    },
    {
        id: 4,
        title: "Dynamic Query Builder Platform",
        summary: "Low-code platform for dynamic database query generation",
        description:
            "Developed a configurable query builder system that enables teams to generate complex SQL queries dynamically without writing code. The platform improved development speed and reduced dependency on backend teams for custom query requirements.",
        company: "PepsiCo",
        duration: "2023 – 2024",
        team: "Backend team",
        contributions: [
            "Designed and implemented a dynamic query engine using Spring Boot",
            "Reduced development effort by ~30% via reusable query components",
            "Increased automated test coverage to ~85%",
            "Built flexible schema-driven architecture for evolving data models",
        ],
        tech: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "SQL", "Microservices"],
        accentFrom: "#8b5cf6",
        accentTo: "#ec4899",
        icon: <Database className="w-7 h-7" />,
        category: "Backend",
    },
    {
        id: 5,
        title: "Salesforce Integration Framework",
        summary: "Reusable framework for seamless Salesforce integrations",
        description:
            "Built a reusable integration framework to connect backend services with Salesforce systems. The framework standardized communication, reduced duplication, and enabled faster delivery of new features requiring Salesforce integration.",
        company: "PepsiCo",
        duration: "2023",
        team: "Backend team",
        contributions: [
            "Developed reusable connectors and APIs for Salesforce integration",
            "Reduced feature delivery time by ~30% through standardization",
            "Maintained <1% production defect rate with strong validation",
            "Simplified integration workflows for multiple teams",
        ],
        tech: ["Java", "Spring Boot", "REST APIs", "Salesforce APIs", "JSON", "Microservices"],
        accentFrom: "#06b6d4",
        accentTo: "#3b82f6",
        icon: <Plug className="w-7 h-7" />,
        category: "Integration",
    },
    {
        id: 6,
        title: "Configuration & Resilience Library",
        summary: "Shared library for fault tolerance in microservices",
        description:
            "Created a centralized library to handle configuration management and improve resilience across distributed systems using patterns like circuit breaker and retry mechanisms.",
        company: "PepsiCo",
        duration: "2023",
        team: "Platform/Backend team",
        contributions: [
            "Designed and implemented resilience patterns across 6+ microservices",
            "Integrated circuit breaker and retry mechanisms",
            "Improved system fault tolerance and reduced cascading failures",
            "Standardized configuration handling across services",
        ],
        tech: ["Java", "Spring Boot", "Resilience4j", "Microservices", "Distributed Systems"],
        accentFrom: "#f97316",
        accentTo: "#f59e0b",
        icon: <ShieldCheck className="w-7 h-7" />,
        category: "Platform",
    },
    {
        id: 7,
        title: "Self-Service Onboarding Portal",
        summary: "Automated onboarding platform for retail customers (Retail360)",
        description:
            "Built a self-service portal to streamline onboarding of retail customers by automating workflows, reducing manual intervention, and improving user experience.",
        company: "PepsiCo",
        duration: "2023",
        team: "Full-stack team",
        contributions: [
            "Designed and developed onboarding workflows end-to-end",
            "Reduced onboarding time by ~20%",
            "Built scalable backend services and intuitive frontend interfaces",
            "Ensured seamless integration with existing enterprise systems",
        ],
        tech: ["Java", "Spring Boot", "Angular", "REST APIs", "SQL"],
        accentFrom: "#ec4899",
        accentTo: "#8b5cf6",
        icon: <UserCheck className="w-7 h-7" />,
        category: "Full-Stack",
    },
    {
        id: 8,
        title: "Multi-Tenant SaaS Platform",
        summary: "Scalable SaaS with multi-tenant architecture (ContentHub)",
        description:
            "Developed a multi-tenant platform supporting dynamic configuration, localization, and multi-region deployments. Enabled global engineering teams to manage content and configurations efficiently across regions.",
        company: "PepsiCo",
        duration: "2024",
        team: "Platform team",
        contributions: [
            "Designed multi-tenant architecture supporting multiple regions",
            "Implemented configuration-driven system for flexibility",
            "Enabled localization and region-specific deployments",
            "Improved system scalability and global usability",
        ],
        tech: ["Java", "Spring Boot", "React", "Microservices", "AWS", "Azure"],
        accentFrom: "#14b8a6",
        accentTo: "#6366f1",
        icon: <Globe className="w-7 h-7" />,
        category: "Platform",
    },
    {
        id: 9,
        title: "Developer Productivity Tools",
        summary: "AI-powered tools to automate engineering workflows (LLM-based)",
        description:
            "Developed multiple internal tools leveraging LLMs to automate repetitive engineering tasks such as code generation, query building, and documentation assistance.",
        company: "PepsiCo",
        duration: "2024",
        team: "AI + Engineering team",
        contributions: [
            "Built 5 internal tools using Azure OpenAI and local LLMs",
            "Automated development workflows improving productivity",
            "Applied prompt engineering and fine-tuning techniques",
            "Contributed to internal hackathons and innovation initiatives",
        ],
        tech: ["Python", "Azure OpenAI", "Local LLMs", "React", "APIs"],
        accentFrom: "#a855f7",
        accentTo: "#ec4899",
        icon: <BrainCircuit className="w-7 h-7" />,
        category: "AI/ML",
    },
    {
        id: 10,
        title: "RetailBot – AI Analytics Platform",
        summary: "AI platform for automated insights and analytics",
        description:
            "RetailBot is a full-stack AI-driven analytics platform that processes structured and unstructured enterprise data to generate automated insights and SQL-based analytics. It empowers business users to make faster, data-driven decisions.",
        company: "PepsiCo",
        duration: "2024 – Present",
        team: "Cross-functional (Backend, Frontend, AI)",
        contributions: [
            "Built scalable backend services for data ingestion and processing",
            "Integrated LLMs for natural language to SQL and insight generation",
            "Designed APIs for analytics workflows and data pipelines",
            "Improved accessibility of data insights for non-technical users",
        ],
        tech: ["Java", "Spring Boot", "Python", "React", "Azure OpenAI", "SQL", "Microservices"],
        accentFrom: "#f43f5e",
        accentTo: "#f97316",
        icon: <Bot className="w-7 h-7" />,
        category: "AI/ML",
    },
];

const COMPANIES = ["All", "MoveInSync", "PepsiCo"] as const;
type FilterType = (typeof COMPANIES)[number];

/* ── Netflix-style Card ─────────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [hovered, setHovered] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);

    return (
        <>
            {/* Detail Modal */}
            <AnimatePresence>
                {expanded && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                            onClick={() => setExpanded(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 40 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed inset-x-4 top-[5%] max-w-2xl mx-auto z-50 rounded-2xl overflow-hidden shadow-2xl"
                            style={{
                                background: `linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)`,
                                border: `1px solid ${project.accentFrom}40`,
                            }}
                        >
                            {/* Modal Header */}
                            <div
                                className="relative h-40 flex items-end p-6"
                                style={{
                                    background: `linear-gradient(135deg, ${project.accentFrom}30, ${project.accentTo}30)`,
                                }}
                            >
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        background: `radial-gradient(circle at 30% 50%, ${project.accentFrom}, transparent 70%)`,
                                    }}
                                />
                                <div className="relative z-10 flex items-end gap-4 w-full">
                                    <div
                                        className="p-3 rounded-xl text-white"
                                        style={{ background: `${project.accentFrom}40`, border: `1px solid ${project.accentFrom}60` }}
                                    >
                                        {project.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-medium mb-1" style={{ color: project.accentFrom }}>
                                            {project.company} · {project.category}
                                        </p>
                                        <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                                    </div>
                                    <button
                                        onClick={() => setExpanded(false)}
                                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/70 hover:text-white flex-shrink-0"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
                                <div className="flex gap-4 text-sm text-white/50">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5" /> {project.duration}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Users className="w-3.5 h-3.5" /> {project.team}
                                    </span>
                                </div>

                                <p className="text-white/70 leading-relaxed text-sm">{project.description}</p>

                                <div>
                                    <h4 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: project.accentFrom }}>
                                        Key Contributions
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.contributions.map((c, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                                                <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: project.accentFrom }} />
                                                {c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: project.accentFrom }}>
                                        Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full text-xs font-medium border"
                                                style={{
                                                    color: project.accentFrom,
                                                    borderColor: `${project.accentFrom}40`,
                                                    background: `${project.accentFrom}15`,
                                                }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Netflix Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                onClick={() => setExpanded(true)}
                className="relative cursor-pointer group"
                style={{ zIndex: hovered ? 20 : 1 }}
            >
                <motion.div
                    animate={hovered ? { scale: 1.05, y: -8 } : { scale: 1, y: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 260 }}
                    className="relative rounded-xl overflow-hidden"
                    style={{
                        background: `linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)`,
                        border: `1px solid ${hovered ? project.accentFrom + "60" : "#ffffff15"}`,
                        boxShadow: hovered ? `0 20px 60px ${project.accentFrom}30, 0 0 0 1px ${project.accentFrom}20` : "none",
                    }}
                >
                    {/* Card gradient banner */}
                    <div
                        className="h-2 w-full"
                        style={{ background: `linear-gradient(90deg, ${project.accentFrom}, ${project.accentTo})` }}
                    />

                    <div className="p-5">
                        {/* Top row */}
                        <div className="flex items-start justify-between mb-4">
                            <motion.div
                                animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                                transition={{ type: "spring", damping: 15, stiffness: 300 }}
                                className="p-2.5 rounded-xl"
                                style={{
                                    background: `${project.accentFrom}20`,
                                    border: `1px solid ${project.accentFrom}40`,
                                    color: project.accentFrom,
                                }}
                            >
                                {project.icon}
                            </motion.div>
                            <div className="text-right">
                                <span
                                    className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                                    style={{
                                        color: project.accentFrom,
                                        background: `${project.accentFrom}20`,
                                        border: `1px solid ${project.accentFrom}30`,
                                    }}
                                >
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        {/* Company badge */}
                        <div className="flex items-center gap-1.5 mb-2">
                            <Building2 className="w-3 h-3 text-white/40" />
                            <span className="text-[11px] text-white/40 font-medium">{project.company}</span>
                            <span className="text-[11px] text-white/25">·</span>
                            <Calendar className="w-3 h-3 text-white/40" />
                            <span className="text-[11px] text-white/40">{project.duration}</span>
                        </div>

                        {/* Title */}
                        <h3 className="font-bold text-white text-base leading-snug mb-2 group-hover:transition-colors" style={{ color: hovered ? "white" : "#e5e7eb" }}>
                            {project.title}
                        </h3>

                        {/* Summary */}
                        <p className="text-white/50 text-xs leading-relaxed mb-4 line-clamp-2">{project.summary}</p>

                        {/* Tech pills - show first 3 */}
                        <div className="flex flex-wrap gap-1.5">
                            {project.tech.slice(0, 3).map((t, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                                    style={{
                                        color: project.accentFrom,
                                        background: `${project.accentFrom}15`,
                                        border: `1px solid ${project.accentFrom}30`,
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                            {project.tech.length > 3 && (
                                <span className="px-2 py-0.5 rounded-full text-[10px] font-medium text-white/30 bg-white/5 border border-white/10">
                                    +{project.tech.length - 3}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Hover overlay */}
                    <AnimatePresence>
                        {hovered && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-center gap-2"
                                style={{
                                    background: `linear-gradient(0deg, ${project.accentFrom}20 0%, transparent 100%)`,
                                }}
                            >
                                <span className="text-xs font-semibold text-white/80 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" style={{ color: project.accentFrom }} />
                                    Click to explore
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </>
    );
}

/* ── Main Component ─────────────────────────────────────────────────────── */
export function Projects() {
    const [filter, setFilter] = React.useState<FilterType>("All");

    const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.company === filter);

    return (
        <section id="projects" className="py-24 bg-[#080810] text-white px-4 relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }} />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #ec4899, transparent)" }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400 mb-3">Portfolio</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-violet-400 to-blue-400">
                        Featured Projects
                    </h2>
                    <p className="text-white/40 text-sm max-w-xl mx-auto">
                        5+ years of building production-grade systems across transportation, FMCG, and AI domains.
                    </p>
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex justify-center gap-2 mb-10"
                >
                    {COMPANIES.map((c) => (
                        <button
                            key={c}
                            onClick={() => setFilter(c)}
                            className="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                            style={{
                                color: filter === c ? "white" : "rgba(255,255,255,0.4)",
                                background: filter === c ? "linear-gradient(135deg, #8b5cf6, #ec4899)" : "rgba(255,255,255,0.05)",
                                border: filter === c ? "1px solid transparent" : "1px solid rgba(255,255,255,0.1)",
                            }}
                        >
                            {c}
                            {filter === c && (
                                <motion.span
                                    layoutId="filterPill"
                                    className="absolute inset-0 rounded-full"
                                    style={{ background: "linear-gradient(135deg, #8b5cf680, #ec489880)" }}
                                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>

                {/* Cards grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Footer count */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center text-white/25 text-xs mt-10"
                >
                    Showing {filtered.length} of {PROJECTS.length} projects · Click any card for full details
                </motion.p>
            </div>
        </section>
    );
}
