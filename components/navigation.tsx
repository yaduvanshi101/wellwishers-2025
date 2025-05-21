"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowRight, Menu, X} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
import {useState, useEffect} from "react";
import {GlassCard} from "@/components/ui/glass-card";

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        {href: "/", label: "Home"},
        {href: "/about", label: "About Us"},
        {href: "/services", label: "Services"},
        {href: "/#testimonials", label: "Testimonials"},
    ];

    return (
        <header
            className={`sticky top-0 z-40 w-full transition-all duration-300 ${
                scrolled
                    ? "py-2 backdrop-blur-lg bg-background/80"
                    : "py-4 bg-transparent"
            }`}
        >
            <div className="px-4 md:px-6 container">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6 md:gap-10">
                        <Link href="/" className="flex items-center space-x-2">
                            <motion.div
                                className="flex flex-col"
                                initial={{opacity: 0, y: -10}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >
                                <motion.span className="inline-block bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary font-serif font-bold text-transparent text-xl">
                                    Well-Wishers
                                </motion.span>
                                <motion.span
                                    className="text-white/80 text-sm text-center"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.5, delay: 0.2}}
                                >
                                    IT Solutions
                                </motion.span>
                            </motion.div>
                        </Link>
                        <nav className="hidden md:flex gap-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{opacity: 0, y: -10}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1 * index,
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        className="group relative font-medium hover:text-primary text-sm md:text-base transition-colors"
                                    >
                                        {link.label}
                                        <span className="bottom-0 left-0 absolute bg-primary w-0 group-hover:w-full h-0.5 transition-all duration-300" />
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <motion.div
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, delay: 0.6}}
                        >
                            <Link href="/contact">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="group bg-primary-gradient"
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

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMenu}
                            className="ml-2"
                        >
                            {isMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <div className="md:hidden top-full right-0 left-0 absolute w-full">
                        <GlassCard className="mx-4 mt-2 overflow-hidden">
                            <div className="flex flex-col space-y-4 bg-background px-6 py-4">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.05 * index,
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="block py-2 font-medium hover:text-primary text-sm transition-colors"
                                            onClick={toggleMenu}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <div className="flex flex-col space-y-3 pt-4">
                                    <Link href="/contact">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="group bg-primary-gradient"
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
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                )}
            </AnimatePresence>
        </header>
    );
}
