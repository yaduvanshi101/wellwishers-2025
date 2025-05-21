"use client";

import {useState, useRef} from "react";
import {motion, useScroll, useTransform, AnimatePresence} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {AuroraBackground} from "@/components/ui/aurora-background";
import {GlassCard} from "@/components/ui/glass-card";
import {SectionPattern} from "@/components/ui/section-pattern";
import {
    AnimatedHeading,
    RevealText,
    SplitText,
} from "@/components/ui/text-animations";
import {Button} from "@/components/ui/button";
import {Spotlight} from "@/components/ui/spotlight";
import {
    Globe,
    Smartphone,
    Database,
    Palette,
    PenTool,
    Cloud,
    Code,
    LineChart,
    Lock,
    ArrowRight,
    CheckCircle,
    Server,
    Layers,
    Zap,
    Star,
    Users,
    Heart,
    Calendar,
    MessageSquare,
    Sparkles,
} from "lucide-react";

// Animation variants
const fadeIn = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0},
};

const staggerContainer = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {staggerChildren: 0.1},
    },
};

// Component types
type ServiceType = {
    icon: any;
    title: string;
    category: string;
    description: string;
    features: string[];
    image: string;
};

type TestimonialType = {
    quote: string;
    author: string;
    position: string;
    service: string;
    rating: number;
};

type StatType = {
    value: string;
    label: string;
    icon: any;
};

type ProcessStepType = {
    number: string;
    title: string;
    description: string;
};

type CategoryType = {
    id: string;
    label: string;
};

// Sub-components
const ServiceCard = ({
    service,
    index,
    isActive,
    onClick,
}: {
    service: ServiceType;
    index: number;
    isActive: boolean;
    onClick: () => void;
}) => (
    <motion.div
        key={index}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        variants={fadeIn}
        transition={{duration: 0.5, delay: index * 0.05}}
        layout
        onClick={onClick}
    >
        <GlassCard
            className={`h-full transition-all duration-300 ${
                isActive ? "scale-[1.02] shadow-lg" : ""
            }`}
            hoverEffect={!isActive}
            glowEffect={true}
        >
            <div className="flex flex-col p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                    <div className="flex justify-center items-center bg-primary/10 p-3 rounded-full w-12 h-12">
                        {service.icon}
                    </div>
                    <h3 className="font-semibold text-xl">{service.title}</h3>
                </div>

                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: "auto"}}
                            exit={{opacity: 0, height: 0}}
                            className="overflow-hidden"
                        >
                            <div className="relative mb-4 rounded-lg w-full h-48 overflow-hidden">
                                <Image
                                    src={service.image || "/placeholder.svg"}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                    loading="eager"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <p className="mb-6 text-muted-foreground">
                    {service.description}
                </p>

                <div className="mt-auto">
                    <h4 className="mb-3 font-medium">Key Features:</h4>
                    <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <CheckCircle className="mt-0.5 w-5 h-5 text-primary shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </GlassCard>
    </motion.div>
);

const CategoryTabs = ({
    categories,
    activeTab,
    setActiveTab,
}: {
    categories: CategoryType[];
    activeTab: string;
    setActiveTab: (id: string) => void;
}) => (
    <div className="top-16 z-30 sticky bg-background/80 backdrop-blur-md py-4 border-b border-border/40 w-full">
        <div className="px-4 md:px-6 container">
            <div className="flex justify-start items-center gap-2 md:gap-4 pb-2 overflow-x-auto no-scrollbar">
                {categories.map((category) => (
                    <motion.button
                        key={category.id}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                            activeTab === category.id
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => setActiveTab(category.id)}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                    >
                        {category.label}
                    </motion.button>
                ))}
            </div>
        </div>
    </div>
);

const StatCard = ({stat, index}: {stat: StatType; index: number}) => (
    <motion.div
        variants={fadeIn}
        transition={{duration: 0.5, delay: index * 0.1}}
        whileHover={{y: -5}}
    >
        <GlassCard className="h-full">
            <div className="flex flex-col items-center p-6 h-full text-center">
                <div className="flex justify-center items-center bg-primary/10 mb-4 p-3 rounded-full">
                    {stat.icon}
                </div>
                <h3 className="mb-2 font-bold text-gradient text-3xl md:text-4xl">
                    {stat.value}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
            </div>
        </GlassCard>
    </motion.div>
);

const ProcessStep = ({
    step,
    index,
    total,
}: {
    step: ProcessStepType;
    index: number;
    total: number;
}) => (
    <motion.div
        variants={fadeIn}
        transition={{duration: 0.5, delay: index * 0.1}}
        className="relative"
        whileHover={{y: -5}}
    >
        <GlassCard className="h-full">
            <div className="flex flex-col items-center p-6 h-full text-center">
                <div className="relative flex justify-center items-center bg-primary/10 mb-4 rounded-full w-16 h-16">
                    <div className="absolute inset-0 opacity-20 border-2 border-primary/30 rounded-full animate-ping"></div>
                    <span className="font-bold text-primary text-2xl">
                        {step.number}
                    </span>
                </div>
                <h3 className="mb-3 font-semibold text-xl">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
            </div>
        </GlassCard>
        {index < total - 1 && (
            <div className="hidden lg:block top-1/2 -right-4 z-20 absolute -translate-y-1/2 transform">
                <ArrowRight className="w-6 h-6 text-primary" />
            </div>
        )}
    </motion.div>
);

const TestimonialCard = ({testimonial}: {testimonial: TestimonialType}) => (
    <motion.div
        initial={{opacity: 0, x: 20}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -20}}
        transition={{duration: 0.5}}
        className="flex flex-col items-center text-center"
    >
        <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                    key={i}
                    className="fill-yellow-500 w-6 h-6 text-yellow-500"
                />
            ))}
        </div>
        <p className="mb-8 text-xl md:text-2xl italic">{testimonial.quote}</p>
        <div className="flex flex-col items-center">
            <h4 className="font-semibold text-lg">{testimonial.author}</h4>
            <p className="text-muted-foreground text-sm">
                {testimonial.position}
            </p>
            <div className="inline-flex items-center bg-primary/10 mt-2 px-3 py-1 rounded-full text-sm">
                {testimonial.service}
            </div>
        </div>
    </motion.div>
);

// Data
const serviceCategories: CategoryType[] = [
    {id: "all", label: "All Services"},
    {id: "web", label: "Web & Mobile"},
    {id: "design", label: "Design & Branding"},
    {id: "cloud", label: "Cloud & Security"},
    {id: "marketing", label: "Marketing & Analytics"},
];

const services: ServiceType[] = [
    {
        icon: <Globe className="w-6 h-6 text-primary" />,
        title: "Web Development",
        category: "web",
        description:
            "Custom websites and web applications built with the latest technologies for optimal performance and user experience. We specialize in responsive design, e-commerce solutions, and content management systems.",
        features: [
            "Responsive Design",
            "E-commerce Solutions",
            "CMS Integration",
            "Performance Optimization",
        ],
        image: "/web-dev.jpg",
    },
    {
        icon: <Smartphone className="w-6 h-6 text-primary" />,
        title: "Mobile App Development",
        category: "web",
        description:
            "Native and cross-platform mobile applications designed for seamless functionality across all devices. Our mobile solutions include iOS and Android development, app maintenance, and performance optimization.",
        features: [
            "iOS & Android Apps",
            "Cross-Platform Development",
            "UI/UX Design",
            "App Store Optimization",
        ],
        image: "/app-dev.jpg",
    },
    {
        icon: <Database className="w-6 h-6 text-primary" />,
        title: "Salesforce Development",
        category: "cloud",
        description:
            "Custom Salesforce solutions, integrations, and optimizations to streamline your business processes. We offer Salesforce implementation, customization, and integration with existing systems.",
        features: [
            "Custom Implementations",
            "Lightning Components",
            "API Integrations",
            "Data Migration",
        ],
        image: "/salesforce-dev.jpg",
    },
    {
        icon: <Palette className="w-6 h-6 text-primary" />,
        title: "Branding",
        category: "design",
        description:
            "Comprehensive brand identity development including logos, style guides, and brand strategy. Our branding services help establish a strong visual identity that resonates with your target audience.",
        features: [
            "Logo Design",
            "Brand Guidelines",
            "Visual Identity",
            "Brand Strategy",
        ],
        image: "/branding.jpg",
    },
    {
        icon: <PenTool className="w-6 h-6 text-primary" />,
        title: "UI/UX Design",
        category: "design",
        description:
            "User-centered design solutions that enhance usability, accessibility, and overall user satisfaction. We create intuitive interfaces that guide users through your digital products effortlessly.",
        features: [
            "User Research",
            "Wireframing",
            "Prototyping",
            "Usability Testing",
        ],
        image: "/ui-ux.jpg",
    },
    {
        icon: <Cloud className="w-6 h-6 text-primary" />,
        title: "Cloud Solutions",
        category: "cloud",
        description:
            "Scalable cloud infrastructure, migration services, and managed cloud solutions for your business. We help you leverage the power of cloud computing to improve efficiency and reduce costs.",
        features: [
            "AWS/Azure/GCP",
            "Cloud Migration",
            "DevOps",
            "Serverless Architecture",
        ],
        image: "/cloud.jpg",
    },
    {
        icon: <Code className="w-6 h-6 text-primary" />,
        title: "Custom Software Development",
        category: "web",
        description:
            "Tailored software solutions designed to address your specific business challenges and requirements. We build scalable, maintainable, and secure software that grows with your business.",
        features: [
            "Enterprise Applications",
            "API Development",
            "Legacy System Modernization",
            "Quality Assurance",
        ],
        image: "/custom-software.jpg",
    },
    {
        icon: <LineChart className="w-6 h-6 text-primary" />,
        title: "Digital Marketing",
        category: "marketing",
        description:
            "Strategic digital marketing services to increase your online presence and drive conversions. Our approach includes SEO, content marketing, social media management, and analytics.",
        features: [
            "SEO Optimization",
            "Content Strategy",
            "Social Media Management",
            "Analytics & Reporting",
        ],
        image: "/digital-marketing.jpg",
    },
    {
        icon: <Lock className="w-6 h-6 text-primary" />,
        title: "Cybersecurity",
        category: "cloud",
        description:
            "Comprehensive security solutions to protect your digital assets and sensitive information. We offer security audits, penetration testing, and implementation of security best practices.",
        features: [
            "Security Audits",
            "Penetration Testing",
            "Compliance",
            "Security Training",
        ],
        image: "/cybersecurity.jpg",
    },
    {
        icon: <Server className="w-6 h-6 text-primary" />,
        title: "DevOps Services",
        category: "cloud",
        description:
            "Streamlined development operations to improve collaboration and productivity. Our DevOps services include CI/CD implementation, infrastructure automation, and monitoring solutions.",
        features: [
            "CI/CD Implementation",
            "Infrastructure as Code",
            "Monitoring & Alerting",
            "Containerization",
        ],
        image: "/devops.jpg",
    },
    {
        icon: <Layers className="w-6 h-6 text-primary" />,
        title: "E-commerce Solutions",
        category: "web",
        description:
            "End-to-end e-commerce development with seamless payment integration and inventory management. We build online stores that provide exceptional shopping experiences.",
        features: [
            "Custom Storefronts",
            "Payment Integration",
            "Inventory Management",
            "Customer Analytics",
        ],
        image: "/e-commerce.jpg",
    },
    {
        icon: <Zap className="w-6 h-6 text-primary" />,
        title: "Performance Optimization",
        category: "web",
        description:
            "Technical optimization services to enhance the speed and efficiency of your digital products. We identify and resolve performance bottlenecks to improve user experience.",
        features: [
            "Speed Optimization",
            "Code Refactoring",
            "Database Optimization",
            "Caching Strategies",
        ],
        image: "/performance-optimization.jpg",
    },
    {
        icon: <Users className="w-6 h-6 text-primary" />,
        title: "Corporate Training",
        category: "marketing",
        description:
            "Specialized training programs designed to enhance your team's skills and knowledge. Our corporate training includes workshops, seminars, and hands-on sessions tailored to your industry and business needs.",
        features: [
            "Customized Training Plans",
            "Skill Development Workshops",
            "Technical Certification Programs",
            "Leadership Development",
        ],
        image: "/corporate-training.jpg",
    },
];

const testimonials: TestimonialType[] = [
    {
        quote: "The web development team at Well-Wishers delivered a site that exceeded our expectations. The performance improvements have directly contributed to a 35% increase in conversions.",
        author: "Sarah Johnson",
        position: "Marketing Director, TechVision Inc.",
        service: "Web Development",
        rating: 5,
    },
    {
        quote: "Their mobile app development expertise transformed our business. The app they built has received outstanding reviews and has significantly improved customer engagement.",
        author: "Michael Chen",
        position: "CEO, HealthTrack Solutions",
        service: "Mobile App Development",
        rating: 5,
    },
    {
        quote: "The UI/UX design team created an intuitive interface that our users love. The thoughtful design has reduced support tickets by 40% and increased user satisfaction.",
        author: "Emily Rodriguez",
        position: "Product Manager, Global Enterprises",
        service: "UI/UX Design",
        rating: 5,
    },
];

const processSteps: ProcessStepType[] = [
    {
        number: "01",
        title: "Discovery",
        description:
            "We begin by understanding your business goals, target audience, and project requirements.",
    },
    {
        number: "02",
        title: "Planning",
        description:
            "We create a detailed project plan with timelines, milestones, and resource allocation.",
    },
    {
        number: "03",
        title: "Execution",
        description:
            "Our team works diligently to develop your solution with regular updates and feedback sessions.",
    },
    {
        number: "04",
        title: "Delivery & Support",
        description:
            "We launch your project and provide ongoing support to ensure long-term success.",
    },
];

const stats: StatType[] = [
    {
        value: "100+",
        label: "Projects Completed",
        icon: <Code className="w-6 h-6 text-primary" />,
    },
    {
        value: "98%",
        label: "Client Satisfaction",
        icon: <Star className="w-6 h-6 text-primary" />,
    },
    {
        value: "20+",
        label: "Expert Team Members",
        icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
        value: "6+",
        label: "Years of Experience",
        icon: <CheckCircle className="w-6 h-6 text-primary" />,
    },
];

const industries = [
    "Healthcare",
    "Finance",
    "E-commerce",
    "Technology",
    "Education",
    "Real Estate",
    "Manufacturing",
    "Entertainment",
];

export default function ServicesPage() {
    const [state, setState] = useState({
        activeTab: "all",
        activeService: null as number | null,
        currentTestimonial: 0,
    });

    const {activeTab, activeService, currentTestimonial} = state;
    const updateState = (key: string, value: any) =>
        setState((prev) => ({...prev, [key]: value}));

    const processRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: processRef,
        offset: ["start end", "end start"],
    });

    const processOpacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0.4, 1, 1, 0.4]
    );
    const processScale = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0.8, 1, 1, 0.8]
    );

    const filteredServices =
        activeTab === "all"
            ? services
            : services.filter((service) => service.category === activeTab);

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <AuroraBackground
                    colorMode="purple"
                    size="large"
                    blur="lg"
                    className="py-16 md:py-28 lg:py-36 w-full"
                >
                    <div className="px-4 md:px-6 container">
                        <div className="items-center gap-12 grid lg:grid-cols-2">
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
                                    Transformative Solutions
                                </motion.div>

                                <div className="space-y-4">
                                    <motion.h1
                                        className="font-bold text-4xl sm:text-5xl xl:text-6xl/none tracking-tighter"
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.6, delay: 0.1}}
                                    >
                                        <span className="block">Our</span>
                                        <span className="bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary text-transparent">
                                            Services
                                        </span>
                                    </motion.h1>

                                    <motion.p
                                        className="mx-auto lg:mx-0 max-w-[600px] text-muted-foreground md:text-xl"
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.6, delay: 0.2}}
                                    >
                                        Comprehensive digital solutions tailored
                                        to your business needs. We combine
                                        technical expertise with creative
                                        innovation to deliver exceptional
                                        results.
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
                                            variant="outline"
                                            className="group bg-primary-gradient px-8 w-full sm:w-auto"
                                        >
                                            Contact Us
                                            <motion.div
                                                initial={{width: 0}}
                                                animate={{width: "auto"}}
                                                className="group-hover:ml-2 w-0 overflow-hidden transition-all duration-300 ease-in-out"
                                            >
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.div>
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>

                            <motion.div
                                className="relative flex justify-center items-center"
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.8, delay: 0.2}}
                            >
                                <div className="top-1/2 left-1/2 absolute bg-primary/5 blur-3xl rounded-full w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2"></div>

                                <div className="relative w-full max-w-md">
                                    <div className="gap-4 grid grid-cols-2">
                                        {[
                                            {
                                                icon: (
                                                    <Globe className="mb-3 w-8 h-8 text-primary" />
                                                ),
                                                title: "Web",
                                            },
                                            {
                                                icon: (
                                                    <Smartphone className="mb-3 w-8 h-8 text-primary" />
                                                ),
                                                title: "Mobile",
                                            },
                                            {
                                                icon: (
                                                    <PenTool className="mb-3 w-8 h-8 text-primary" />
                                                ),
                                                title: "Design",
                                            },
                                            {
                                                icon: (
                                                    <Cloud className="mb-3 w-8 h-8 text-primary" />
                                                ),
                                                title: "Cloud",
                                            },
                                        ].map((item, index) => (
                                            <motion.div
                                                key={index}
                                                whileHover={{
                                                    y: -5,
                                                    scale: 1.02,
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 10,
                                                }}
                                            >
                                                <GlassCard className="flex flex-col justify-center items-center p-6 aspect-square text-center">
                                                    {item.icon}
                                                    <h3 className="font-medium text-lg">
                                                        {item.title}
                                                    </h3>
                                                </GlassCard>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </AuroraBackground>

                {/* Service Categories Tabs */}
                <CategoryTabs
                    categories={serviceCategories}
                    activeTab={activeTab}
                    setActiveTab={(id) => updateState("activeTab", id)}
                />

                {/* Services Grid */}
                <SectionPattern
                    variant="dots"
                    className="bg-muted/5 py-16 md:py-24 w-full"
                >
                    <div className="px-4 md:px-6 container">
                        <div className="flex flex-col justify-center items-center space-y-4 mb-12 text-center">
                            <AnimatedHeading
                                title="Our Expertise"
                                className="font-bold text-3xl sm:text-5xl tracking-tighter"
                                variant="highlight"
                            />
                            <RevealText>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                                    Explore our comprehensive range of digital
                                    solutions tailored to your business needs
                                </p>
                            </RevealText>
                        </div>

                        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
                            {filteredServices.map((service, index) => (
                                <ServiceCard
                                    key={index}
                                    service={service}
                                    index={index}
                                    isActive={activeService === index}
                                    onClick={() =>
                                        updateState(
                                            "activeService",
                                            activeService === index
                                                ? null
                                                : index
                                        )
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </SectionPattern>

                {/* Process Section */}
                <section
                    className="relative py-16 md:py-24 w-full overflow-hidden"
                    ref={processRef}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10 pointer-events-none" />
                    <motion.div
                        className="z-10 relative px-4 md:px-6 container"
                        style={{opacity: processOpacity, scale: processScale}}
                    >
                        <div className="flex flex-col justify-center items-center space-y-4 mb-12 text-center">
                            <SplitText
                                text="Our Collaborative Process"
                                className="font-bold text-3xl sm:text-5xl tracking-tighter"
                                highlightClassName="text-gradient"
                                highlight={["Collaborative"]}
                            />
                            <RevealText>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                                    How we work together to bring your vision to
                                    life
                                </p>
                            </RevealText>
                        </div>

                        <div className="relative">
                            <div className="hidden lg:block top-1/2 right-0 left-0 z-0 absolute bg-primary/20 h-1 -translate-y-1/2"></div>
                            <div className="z-10 relative gap-8 grid lg:grid-cols-4">
                                {processSteps.map((step, index) => (
                                    <ProcessStep
                                        key={index}
                                        step={step}
                                        index={index}
                                        total={processSteps.length}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Testimonials Section */}
                <SectionPattern
                    variant="grid"
                    className="bg-muted/5 py-16 md:py-24 w-full"
                >
                    <div className="px-4 md:px-6 container">
                        <div className="flex flex-col justify-center items-center space-y-4 mb-12 text-center">
                            <AnimatedHeading
                                title="Client Success Stories"
                                className="font-bold text-3xl sm:text-5xl tracking-tighter"
                                variant="underline"
                            />
                            <RevealText>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                                    Hear what our clients have to say about our
                                    services
                                </p>
                            </RevealText>
                        </div>

                        <div className="relative overflow-hidden">
                            <div className="flex justify-center">
                                <GlassCard className="w-full max-w-4xl">
                                    <div className="p-8 md:p-12">
                                        <AnimatePresence mode="wait">
                                            <TestimonialCard
                                                testimonial={
                                                    testimonials[
                                                        currentTestimonial
                                                    ]
                                                }
                                            />
                                        </AnimatePresence>
                                    </div>
                                </GlassCard>
                            </div>

                            <div className="flex justify-center mt-8">
                                <div className="flex space-x-2">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`w-3 h-3 rounded-full transition-all ${
                                                currentTestimonial === index
                                                    ? "bg-primary w-6"
                                                    : "bg-muted"
                                            }`}
                                            onClick={() =>
                                                updateState(
                                                    "currentTestimonial",
                                                    index
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionPattern>

                {/* Industries We Serve */}
                <section className="relative py-16 md:py-24 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/10 pointer-events-none" />
                    <div className="z-10 relative px-4 md:px-6 container">
                        <div className="items-center gap-12 grid md:grid-cols-2">
                            <motion.div
                                className="space-y-6"
                                initial={{opacity: 0, x: -50}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}}
                            >
                                <AnimatedHeading
                                    title="Industries We Serve"
                                    className="font-bold text-3xl sm:text-4xl md:text-5xl tracking-tighter"
                                    variant="gradient"
                                />
                                <p className="text-muted-foreground md:text-lg">
                                    We have experience working with clients
                                    across various industries, delivering
                                    tailored solutions that address their
                                    specific challenges and requirements.
                                </p>
                                <div className="gap-4 grid grid-cols-2">
                                    {industries
                                        .slice(0, 8)
                                        .map((industry, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2"
                                            >
                                                <CheckCircle className="w-5 h-5 text-primary" />
                                                <span>{industry}</span>
                                            </div>
                                        ))}
                                </div>
                            </motion.div>
                            <motion.div
                                className="relative"
                                initial={{opacity: 0, x: 50}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 0.5}}
                                viewport={{once: true}}
                            >
                                <div className="top-1/2 left-1/2 absolute bg-primary/5 blur-3xl rounded-full w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2"></div>
                                <div className="relative gap-4 grid grid-cols-2 grid-rows-2 aspect-square">
                                    {industries
                                        .slice(0, 4)
                                        .map((industry, index) => (
                                            <div
                                                className="relative rounded-lg overflow-hidden"
                                                key={index}
                                            >
                                                <Image
                                                    src={`/${industry.toLowerCase()}.jpg`}
                                                    alt={`${industry} industry`}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover"
                                                    loading={
                                                        index > 1
                                                            ? "lazy"
                                                            : "eager"
                                                    }
                                                />
                                                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent p-4">
                                                    <span className="font-medium text-sm">
                                                        {industry}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <SectionPattern
                    variant="waves"
                    className="bg-muted/5 py-16 md:py-24 w-full"
                >
                    <div className="px-4 md:px-6 container">
                        <div className="flex flex-col justify-center items-center space-y-4 mb-12 text-center">
                            <AnimatedHeading
                                title="Our Impact by the Numbers"
                                className="font-bold text-3xl sm:text-5xl tracking-tighter"
                                variant="highlight"
                            />
                            <RevealText>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                                    Measurable results that demonstrate our
                                    commitment to excellence
                                </p>
                            </RevealText>
                        </div>

                        <motion.div
                            className="gap-8 grid md:grid-cols-2 lg:grid-cols-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                            variants={staggerContainer}
                        >
                            {stats.map((stat, index) => (
                                <StatCard
                                    key={index}
                                    stat={stat}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    </div>
                </SectionPattern>

                {/* CTA Section */}
                <section className="py-16 md:py-24 w-full">
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
