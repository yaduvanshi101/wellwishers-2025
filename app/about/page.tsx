"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {AnimatedCard} from "@/components/ui/animated-card";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Award, Code, Lightbulb, Users, Globe} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    const staggerContainer = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const values = [
        {
            icon: <Lightbulb className="w-6 h-6 text-primary" />,
            title: "Innovation",
            description:
                "We constantly explore new technologies and approaches to deliver innovative solutions.",
        },
        {
            icon: <Users className="w-6 h-6 text-primary" />,
            title: "Collaboration",
            description:
                "We believe in the power of teamwork and partnership with our clients to achieve exceptional results.",
        },
        {
            icon: <Award className="w-6 h-6 text-primary" />,
            title: "Excellence",
            description:
                "We strive for excellence in everything we do, from code quality to client communication.",
        },
        {
            icon: <Code className="w-6 h-6 text-primary" />,
            title: "Integrity",
            description:
                "We operate with transparency, honesty, and ethical practices in all our business dealings.",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section - New Variant */}
                <section className="relative flex justify-center items-center w-full min-h-[70vh] overflow-hidden">
                    {/* Background Elements */}
                    <div className="z-0 absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
                    <div className="z-0 absolute inset-0">
                        <div className="top-0 right-0 absolute bg-primary/10 opacity-20 blur-3xl rounded-full w-96 h-96 animate-float filter"></div>
                        <div
                            className="bottom-0 left-0 absolute bg-purple-500/10 opacity-20 blur-3xl rounded-full w-96 h-96 animate-float filter"
                            style={{animationDelay: "2s"}}
                        ></div>

                        {/* Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
                    </div>

                    <div className="z-10 relative px-4 md:px-6 container">
                        <div className="items-center gap-12 grid md:grid-cols-2">
                            {/* Left Column - Text Content */}
                            <div className="space-y-6 md:pr-12 sm:text-left text-center">
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6}}
                                    className="inline-flex items-center bg-primary/10 px-4 py-1.5 border border-primary/20 rounded-full font-medium text-primary text-sm"
                                >
                                    <span className="relative flex mr-2 w-2 h-2">
                                        <span className="inline-flex absolute bg-primary opacity-75 rounded-full w-full h-full animate-ping"></span>
                                        <span className="inline-flex relative bg-primary rounded-full w-2 h-2"></span>
                                    </span>
                                    Established 2019
                                </motion.div>

                                <motion.h1
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: 0.2}}
                                    className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight"
                                >
                                    We are{" "}
                                    <span className="text-gradient">
                                        <br /> Well-Wishers
                                    </span>
                                    <br />
                                    <span className="font-medium text-muted-foreground text-3xl md:text-4xl lg:text-5xl">
                                        Digital Innovation Agency
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: 0.3}}
                                    className="max-w-md text-muted-foreground text-lg md:text-xl"
                                >
                                    We transform ideas into exceptional digital
                                    experiences through innovation,
                                    collaboration, and technical excellence.
                                </motion.p>

                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: 0.4}}
                                    className="flex flex-wrap gap-3"
                                >
                                    <div className="flex items-center gap-1.5">
                                        <Users className="w-5 h-5 text-primary" />
                                        <span className="text-sm">
                                            20+ Experts
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Award className="w-5 h-5 text-primary" />
                                        <span className="text-sm">
                                            Award Winning
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Globe className="w-5 h-5 text-primary" />
                                        <span className="text-sm">
                                            Global Reach
                                        </span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Column - Visual Element */}
                            <motion.div
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.8, delay: 0.3}}
                                className="relative mx-auto max-w-md aspect-square"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 blur-3xl rounded-full"></div>
                                <div className="relative bg-background/30 backdrop-blur-sm border border-border/40 rounded-3xl w-full h-full overflow-hidden">
                                    <div className="top-0 left-0 absolute bg-gradient-to-r from-transparent via-primary to-transparent w-full h-1"></div>
                                    <div className="bottom-0 left-0 absolute bg-gradient-to-r from-transparent via-primary to-transparent w-full h-1"></div>
                                    <div className="top-0 left-0 absolute bg-gradient-to-b from-transparent via-primary to-transparent w-1 h-full"></div>
                                    <div className="top-0 right-0 absolute bg-gradient-to-b from-transparent via-primary to-transparent w-1 h-full"></div>

                                    <div className="relative flex flex-col justify-center items-center p-8 h-full">
                                        <div className="relative flex justify-center items-center bg-primary/10 mb-6 rounded-full w-32 h-32">
                                            <div className="absolute inset-0 border border-primary/30 rounded-full animate-spin-slow"></div>
                                            <div
                                                className="absolute inset-2 border border-primary/20 rounded-full animate-spin-slow"
                                                style={{
                                                    animationDirection:
                                                        "reverse",
                                                    animationDuration: "15s",
                                                }}
                                            ></div>
                                            <span className="font-bold text-gradient text-4xl">
                                                <Image
                                                    src="/logo.jpg"
                                                    alt="Well-Wishers Agency Logo"
                                                    width={80}
                                                    height={80}
                                                />
                                            </span>
                                        </div>

                                        <div className="space-y-4 text-center">
                                            <h3 className="font-semibold text-xl">
                                                About Us
                                            </h3>
                                            <p className="text-muted-foreground text-sm">
                                                Discover our journey, values,
                                                and the team behind our success
                                            </p>
                                            <Link
                                                href="#our-story"
                                                scroll={true}
                                            >
                                                <motion.div
                                                    whileHover={{scale: 1.05}}
                                                    whileTap={{scale: 0.95}}
                                                    className="inline-flex justify-center items-center bg-primary hover:bg-primary/90 shadow px-4 py-2 rounded-md font-medium text-primary-foreground text-sm transition-colors"
                                                >
                                                    Our Story
                                                </motion.div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1, duration: 1}}
                        className="bottom-8 left-1/2 absolute flex flex-col items-center -translate-x-1/2 transform"
                    >
                        <span className="mb-2 text-muted-foreground text-xs">
                            Scroll to explore
                        </span>
                        <motion.div
                            animate={{y: [0, 8, 0]}}
                            transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 2,
                            }}
                            className="flex justify-center items-center border border-muted-foreground/30 rounded-full w-5 h-8"
                        >
                            <motion.div
                                animate={{height: [6, 12, 6]}}
                                transition={{
                                    repeat: Number.POSITIVE_INFINITY,
                                    duration: 2,
                                }}
                                className="bg-primary rounded-full w-1"
                            />
                        </motion.div>
                    </motion.div>
                </section>

                {/* Our Story Section */}
                <section className="py-12 md:py-24 w-full" id="our-story">
                    <div className="px-4 md:px-6 container">
                        <div className="items-center gap-6 lg:gap-12 grid lg:grid-cols-2">
                            <motion.div
                                className="space-y-4"
                                initial={{opacity: 0, x: -50}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}}
                            >
                                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter">
                                    Our Story
                                </h2>
                                <p className="text-muted-foreground md:text-lg">
                                    Founded in 2019, Well-Wishers Agency began
                                    with a simple mission: to bridge the gap
                                    between technology and creativity. What
                                    started as a small team of three passionate
                                    developers has grown into a full-service
                                    digital agency with over 20 experts across
                                    multiple disciplines.
                                </p>
                                <p className="text-muted-foreground md:text-lg">
                                    Over the years, we've partnered with
                                    startups, mid-sized businesses, and Fortune
                                    100 companies to deliver digital solutions
                                    that drive growth and create meaningful
                                    connections with their audiences.
                                </p>
                                <p className="text-muted-foreground md:text-lg">
                                    Today, we continue to push the boundaries of
                                    what's possible in the digital realm, always
                                    staying ahead of industry trends and
                                    technologies to provide our clients with
                                    cutting-edge solutions.
                                </p>
                            </motion.div>
                            <motion.div
                                className="relative rounded-lg h-[400px] lg:h-[500px] overflow-hidden"
                                initial={{opacity: 0, x: 50}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}}
                            >
                                <Image
                                    src="/team.jpg"
                                    alt="Well-Wishers Agency team"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="bg-muted/10 py-12 md:py-24 w-full">
                    <div className="px-4 md:px-6 container">
                        <motion.div
                            className="flex flex-col justify-center items-center space-y-4 mb-12 text-center"
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
                        >
                            <div className="space-y-2">
                                <h2 className="font-bold text-3xl sm:text-5xl tracking-tighter">
                                    Our Values
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                                    The principles that guide everything we do
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="gap-6 grid sm:grid-cols-2 lg:grid-cols-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
                            {values.map((value, index) => (
                                <AnimatedCard key={index}>
                                    <Card className="border-primary/10 h-full">
                                        <CardHeader className="flex flex-col items-center text-center">
                                            <div className="bg-primary/10 mb-3 p-3 rounded-full">
                                                {value.icon}
                                            </div>
                                            <CardTitle>{value.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <p className="text-muted-foreground">
                                                {value.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </AnimatedCard>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
}
