"use client";

import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {
    Globe,
    Smartphone,
    Database,
    Users,
    Clock,
    CheckCircle,
    Package,
    ChevronRight,
    ArrowRight,
    Star,
    Heart,
    Sparkles,
} from "lucide-react";
import {motion} from "framer-motion";
import {AnimatedCard} from "@/components/ui/animated-card";
import {AuroraBackground} from "@/components/ui/aurora-background";
import {GlassCard} from "@/components/ui/glass-card";
import {SectionPattern} from "@/components/ui/section-pattern";
import {
    AnimatedHeading,
    SplitText,
    RevealText,
} from "@/components/ui/text-animations";
import {Spotlight} from "@/components/ui/spotlight";

export default function Home() {
    const staggerContainer = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const testimonials = [
        {
            content:
                "The team at Well-Wishers delivered beyond our expectations. Their attention to detail and commitment to quality is unmatched. Our new website has significantly improved our conversion rates.",
            author: "Sarah Johnson",
            title: "CTO, TechVision Inc.",
        },
        {
            content:
                "Working with Well-Wishers on our mobile app was a game-changer. Their expertise in UI/UX design and development resulted in an app that our users love. The project was delivered on time and within budget.",
            author: "Michael Chen",
            title: "Founder, HealthTrack Solutions",
        },
        {
            content:
                "Well-Wishers transformed our cloud infrastructure, making it more efficient and cost-effective. Their team was professional, responsive, and a pleasure to work with. We continue to rely on them for all our digital needs.",
            author: "Emily Rodriguez",
            title: "Marketing Director, Global Enterprises",
        },
    ];

    const projects = [
        {
            title: "Pro Foods",
            client: "Pro foods",
            description:
                "An online restaurant management system where owners can directly deliver food to customers and gather demand insights, helping them understand customer preferences and grow their business.",
            tags: ["React", "Next.js", "Tailwind CSS"],
            img: "proFood",
        },
        {
            title: "Donor Zilla",
            client: "Donor Zilla",
            description:
                "A healthcare platform connecting doctors and patients for online appointments, while facilitating blood donation by matching donors with recipients based on proximity and need.",
            tags: ["React Native", "Firebase", "TypeScript"],
            img: "DonorZilla",
        },
        {
            title: "Fresh Daily",
            client: "Global Enterprises Ltd.",
            description:
                "A successful offline bakery brand offering freshly baked goods directly to customers. Known for quality ingredients and artisanal techniques that have built a loyal local customer base.",
            tags: ["Figma", "UI / UX", "Branding"],
            img: "FreshDaily",
        },
    ];

    const services = [
        {
            icon: <Globe className="w-6 h-6 text-primary" />,
            title: "Web Development",
            description:
                "Custom websites and web applications built with the latest technologies for optimal performance and user experience.",
        },
        {
            icon: <Smartphone className="w-6 h-6 text-primary" />,
            title: "Mobile App Development",
            description:
                "Native and cross-platform mobile applications designed for seamless functionality across all devices.",
        },
        {
            icon: <Database className="w-6 h-6 text-primary" />,
            title: "Salesforce Development",
            description:
                "Custom Salesforce solutions, integrations, and optimizations to streamline your business processes.",
        },
    ];

    const features = [
        {
            icon: <Users className="w-6 h-6 text-primary" />,
            title: "Expert-Led Teams",
            description:
                "Our teams are led by industry experts with years of experience in their respective fields.",
        },
        {
            icon: <Clock className="w-6 h-6 text-primary" />,
            title: "Agile Delivery",
            description:
                "We follow agile methodologies to ensure timely delivery and adaptability to changing requirements.",
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-primary" />,
            title: "Pixel-Perfect Design",
            description:
                "Our designers pay meticulous attention to detail, ensuring every pixel is in its right place.",
        },
        {
            icon: <Package className="w-6 h-6 text-primary" />,
            title: "End-to-End Solutions",
            description:
                "From concept to deployment and beyond, we provide comprehensive solutions for all your digital needs.",
        },
    ];
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <AuroraBackground
                    colorMode="purple"
                    size="large"
                    blur="lg"
                    intensity="medium"
                    className="py-16 md:py-24 lg:py-32 xl:py-40 w-full"
                >
                    <div className="z-10 relative px-4 md:px-6 container">
                        <div className="items-center gap-12 grid lg:grid-cols-2">
                            {/* Left Column - Text Content */}
                            <div className="flex flex-col items-center lg:items-start space-y-6 lg:text-left text-center">
                                <motion.div
                                    className="inline-flex items-center bg-primary/10 px-4 py-1.5 border border-primary/20 rounded-full font-medium text-primary text-sm"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6}}
                                >
                                    <span className="relative flex mr-2 w-2 h-2">
                                        <span className="inline-flex absolute bg-primary opacity-75 rounded-full w-full h-full animate-ping"></span>
                                        <span className="inline-flex relative bg-primary rounded-full w-2 h-2"></span>
                                    </span>
                                    Digital Innovation Agency
                                </motion.div>

                                <div className="space-y-4">
                                    <motion.h1
                                        className="font-bold text-4xl sm:text-5xl xl:text-6xl/none tracking-tighter"
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.6, delay: 0.1}}
                                    >
                                        <span className="block">
                                            Transforming Ideas
                                        </span>
                                        <span className="bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary text-transparent">
                                            into Digital Excellence
                                        </span>
                                    </motion.h1>

                                    <motion.p
                                        className="mx-auto lg:mx-0 max-w-[600px] text-muted-foreground md:text-xl"
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.6, delay: 0.2}}
                                    >
                                        Web Development • Mobile Apps •
                                        Salesforce • Branding • UI/UX Design •
                                        Cloud Solutions
                                    </motion.p>
                                </div>

                                <motion.div
                                    className="flex sm:flex-row flex-col gap-4 w-full sm:w-auto"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: 0.3}}
                                >
                                    <Link href="/contact">
                                        <Button
                                            size="lg"
                                            className="group relative bg-primary-gradient px-8 w-full sm:w-auto overflow-hidden"
                                        >
                                            <span className="z-10 relative">
                                                Get a Quote
                                            </span>
                                            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                                        </Button>
                                    </Link>

                                    <Link href="/services">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="group gap-2 w-full"
                                        >
                                            Services
                                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                                        </Button>
                                    </Link>
                                </motion.div>

                                <motion.div
                                    className="gap-4 grid grid-cols-3 mx-auto lg:mx-0 pt-6 w-full max-w-md"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.6, delay: 0.4}}
                                >
                                    <div className="flex flex-col items-center lg:items-start">
                                        <span className="font-bold text-primary text-3xl">
                                            15+
                                        </span>
                                        <span className="text-muted-foreground text-sm">
                                            Projects
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start">
                                        <span className="font-bold text-primary text-3xl">
                                            20+
                                        </span>
                                        <span className="text-muted-foreground text-sm">
                                            Team Members
                                        </span>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start">
                                        <span className="font-bold text-primary text-3xl">
                                            98%
                                        </span>
                                        <span className="text-muted-foreground text-sm">
                                            Client Satisfaction
                                        </span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Column - Visual Element */}
                            <motion.div
                                className="relative flex justify-center items-center"
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.8, delay: 0.2}}
                            >
                                <div className="top-1/2 left-1/2 absolute bg-primary/5 blur-3xl rounded-full w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2"></div>

                                <div className="relative w-full max-w-md aspect-square">
                                    {/* Decorative Elements */}
                                    <div className="-top-6 -right-6 absolute border border-primary/30 rounded-full w-24 h-24 animate-spin-slow"></div>
                                    <div
                                        className="-bottom-8 -left-8 absolute border border-primary/20 rounded-full w-32 h-32 animate-spin-slow"
                                        style={{
                                            animationDirection: "reverse",
                                            animationDuration: "15s",
                                        }}
                                    ></div>

                                    {/* Main Visual */}
                                    <div className="relative bg-background/30 backdrop-blur-sm p-4 border border-primary/10 rounded-2xl w-full h-full overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"></div>

                                        <div className="relative rounded-xl w-full h-full overflow-hidden">
                                            <Image
                                                src="/our-vision.jpg"
                                                alt="Digital Excellence Visualization"
                                                fill
                                                className="object-cover"
                                                priority
                                            />

                                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent p-6">
                                                <div className="w-full">
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            <h3 className="font-medium text-lg">
                                                                Our Vision
                                                            </h3>
                                                            <p className="text-muted-foreground text-sm">
                                                                Creating digital
                                                                experiences that
                                                                matter
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </AuroraBackground>

                {/* Services Preview Section */}
                <SectionPattern
                    variant="dots"
                    className="bg-muted/5 py-16 md:py-24 w-full"
                >
                    <div className="px-4 md:px-6 container">
                        <div className="flex flex-col justify-center items-center space-y-4 mb-12 text-center">
                            <AnimatedHeading
                                title="Our Services"
                                className="font-bold text-3xl sm:text-5xl tracking-tighter"
                                variant="underline"
                            />
                            <RevealText>
                                <p className="max-w-[900px] text-muted-foreground lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed">
                                    Comprehensive digital solutions tailored to
                                    your business needs
                                </p>
                            </RevealText>
                        </div>
                        <motion.div
                            className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mx-auto py-8"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
                            {services.map((service, index) => (
                                <AnimatedCard key={index}>
                                    <GlassCard className="h-full">
                                        <div className="flex flex-col p-6 h-full">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="flex justify-center items-center bg-primary/10 p-3 rounded-full w-12 h-12">
                                                    {service.icon}
                                                </div>
                                                <h3 className="font-semibold text-xl">
                                                    {service.title}
                                                </h3>
                                            </div>
                                            <p className="flex-grow text-muted-foreground">
                                                {service.description}
                                            </p>
                                        </div>
                                    </GlassCard>
                                </AnimatedCard>
                            ))}
                        </motion.div>
                        <div className="flex justify-center mt-12">
                            <Link href="/services">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group gap-2"
                                >
                                    View All Services
                                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-300" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </SectionPattern>

                {/* Why Choose Us Section */}
                <section
                    id="why-us"
                    className="relative py-16 md:py-24 w-full overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10 pointer-events-none" />
                    <div className="z-10 relative px-4 md:px-6 container">
                        <div className="flex flex-col justify-center items-center space-y-4 mb-12 text-center">
                            <AnimatedHeading
                                title="Why Choose Us"
                                className="font-bold text-3xl sm:text-5xl tracking-tighter"
                                variant="underline"
                            />
                            <RevealText>
                                <p className="max-w-[900px] text-muted-foreground lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed">
                                    What sets us apart from the competition
                                </p>
                            </RevealText>
                        </div>
                        <motion.div
                            className="gap-8 grid md:grid-cols-2 lg:grid-cols-4 mx-auto py-8"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
                            {features.map((feature, index) => (
                                <AnimatedCard key={index}>
                                    <GlassCard className="h-full">
                                        <div className="flex flex-col items-center p-6 h-full text-center">
                                            <div className="flex justify-center items-center bg-primary/10 mb-4 p-3 rounded-full">
                                                {feature.icon}
                                            </div>
                                            <h3 className="mb-3 font-semibold text-xl">
                                                {feature.title}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </GlassCard>
                                </AnimatedCard>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Portfolio Preview Section */}
                <SectionPattern
                    variant="grid"
                    className="bg-muted/5 py-16 md:py-24 w-full"
                >
                    <div className="px-4 md:px-6 container">
                        <div className="flex flex-col justify-center items-center space-y-4 mb-12 text-center">
                            <AnimatedHeading
                                title="Our Recent Work"
                                className="font-bold text-3xl sm:text-5xl tracking-tighter"
                                variant="underline"
                            />
                            <RevealText>
                                <p className="max-w-[900px] text-muted-foreground lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed">
                                    Check out some of our latest projects
                                </p>
                            </RevealText>
                        </div>
                        <motion.div
                            className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mx-auto py-8"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
                            {projects.map((project, index) => (
                                <AnimatedCard key={index}>
                                    <GlassCard className="h-full">
                                        {/* Project Thumbnail */}
                                        <div className="relative w-full h-60 overflow-hidden">
                                            <Image
                                                src={`/${project.img}.jpg`}
                                                alt="Project thumbnail"
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background to-transparent opacity-0 hover:opacity-100 p-6 transition-opacity duration-300">
                                                <div>
                                                    <h3 className="mb-1 font-semibold text-xl">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-foreground text-sm">
                                                        {project.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="mb-1 font-semibold text-xl">
                                                {project.title}
                                            </h3>
                                            <p className="mb-4 text-muted-foreground text-sm">
                                                Client: {project.client}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="inline-flex items-center bg-primary/10 px-2.5 py-0.5 rounded-full font-medium text-primary text-xs"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </GlassCard>
                                </AnimatedCard>
                            ))}
                        </motion.div>
                    </div>
                </SectionPattern>

                {/* Testimonials Section */}
                <section
                    id="testimonials"
                    className="relative py-16 md:py-24 w-full overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10 pointer-events-none" />
                    <div className="z-10 relative px-4 md:px-6 container">
                        <div className="flex flex-col justify-center items-center space-y-4 mb-12 text-center">
                            <SplitText
                                text={"What Our Clients Say"}
                                className="font-bold text-3xl sm:text-5xl tracking-tighter"
                                highlight={["Clients"]}
                                highlightClassName="text-gradient"
                            />
                            <RevealText>
                                <p className="max-w-[900px] text-muted-foreground lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed">
                                    Don't just take our word for it - hear from
                                    some of our satisfied clients
                                </p>
                            </RevealText>
                        </div>
                        <motion.div
                            className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mx-auto py-8"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
                            {testimonials.map((testimonial, index) => (
                                <AnimatedCard key={index}>
                                    <GlassCard className="h-full">
                                        <div className="flex flex-col justify-between p-6 h-full">
                                            <div className="mb-6">
                                                <div className="flex items-center gap-1 mb-1">
                                                    {[...Array(5)].map(
                                                        (_, i) => (
                                                            <svg
                                                                key={i}
                                                                className="fill-current w-5 h-5 text-yellow-500"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                                            </svg>
                                                        )
                                                    )}
                                                </div>
                                                <p className="text-muted-foreground italic">
                                                    "{testimonial.content}"
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <h4 className="font-semibold text-lg">
                                                        {testimonial.author}
                                                    </h4>
                                                    <p className="text-muted-foreground text-sm">
                                                        {testimonial.title}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </AnimatedCard>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Strip */}
                <section className="bg-gradient-to-b from-muted/10 to-background py-16 w-full">
                    <Spotlight className="w-full h-full">
                        <div className="px-4 md:px-6 container">
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}}
                                className="relative rounded-3xl overflow-hidden"
                            >
                                <div className="z-0 absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-background/20"></div>
                                <div className="z-0 absolute inset-0 bg-grid-16 bg-grid-white/5 opacity-20"></div>

                                <div className="z-10 relative p-8 md:p-12 lg:p-16">
                                    <div className="items-center gap-10 grid md:grid-cols-2">
                                        <div className="space-y-6">
                                            <div className="inline-flex items-center bg-primary/10 mb-4 px-4 py-1.5 border border-primary/20 rounded-full font-medium text-primary text-sm">
                                                <Sparkles className="mr-2 w-4 h-4" />
                                                Let's Create Together
                                            </div>

                                            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight">
                                                Ready to Transform Your{" "}
                                                <span className="text-gradient">
                                                    Digital Presence
                                                </span>
                                                ?
                                            </h2>

                                            <p className="text-muted-foreground text-lg md:text-xl">
                                                Schedule a consultation with our
                                                experts and discover how our
                                                services can help you achieve
                                                your business goals.
                                            </p>

                                            <div className="flex sm:flex-row flex-col gap-4 pt-4">
                                                <Link href="/contact">
                                                    <Button
                                                        size="lg"
                                                        variant="outline"
                                                        className="group bg-primary-gradient px-8 w-full sm:w-auto"
                                                    >
                                                        Contact Us
                                                        <motion.div
                                                            initial={{width: 0}}
                                                            animate={{
                                                                width: "auto",
                                                            }}
                                                            className="group-hover:ml-2 w-0 overflow-hidden transition-all duration-300 ease-in-out"
                                                        >
                                                            <ArrowRight className="w-4 h-4" />
                                                        </motion.div>
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 opacity-25 rounded-lg blur"></div>
                                            <div className="relative bg-background/80 backdrop-blur-sm p-6 md:p-8 border border-border/50 rounded-lg">
                                                <div className="flex justify-center items-center mb-6">
                                                    <div className="flex justify-center items-center bg-primary/10 rounded-full w-16 h-16">
                                                        <Heart className="w-8 h-8 text-primary" />
                                                    </div>
                                                </div>

                                                <h3 className="mb-4 font-semibold text-xl text-center">
                                                    Our Commitment to You
                                                </h3>

                                                <ul className="space-y-3">
                                                    {[
                                                        "Personalized solutions tailored to your needs",
                                                        "Transparent communication throughout the process",
                                                        "Ongoing support and maintenance",
                                                        "Results-driven approach with measurable outcomes",
                                                    ].map((item, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-start gap-2"
                                                        >
                                                            <CheckCircle className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <div className="mt-6 pt-6 border-t border-border/30 text-center">
                                                    <p className="text-muted-foreground text-sm">
                                                        Join our growing list of
                                                        satisfied clients
                                                    </p>
                                                    <div className="flex justify-center mt-2">
                                                        {[...Array(5)].map(
                                                            (_, i) => (
                                                                <Star
                                                                    key={i}
                                                                    className="fill-yellow-500 w-5 h-5 text-yellow-500"
                                                                />
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Spotlight>
                </section>
            </main>
        </div>
    );
}
