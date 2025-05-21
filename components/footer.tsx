"use client";
import Link from "next/link";
import {ArrowRight, Linkedin, Mail, MapPin, Phone} from "lucide-react";
import {SectionPattern} from "@/components/ui/section-pattern";
import {RevealText} from "@/components/ui/text-animations";
import {Button} from "./ui/button";
import {motion} from "framer-motion";
import Image from "next/image";

export function Footer() {
    return (
        <SectionPattern
            variant="noise"
            className="bg-muted/5 pt-12 pb-6 border-t border-border/20 w-full"
        >
            <div className="px-4 md:px-6 container">
                <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <RevealText>
                            <h3 className="font-medium text-lg">Services</h3>
                        </RevealText>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                href="/services"
                                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                            >
                                Web Development
                            </Link>
                            <Link
                                href="/services"
                                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                            >
                                Mobile App Development
                            </Link>
                            <Link
                                href="/services"
                                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                            >
                                Salesforce Development
                            </Link>
                            <Link
                                href="/services"
                                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                            >
                                Branding
                            </Link>
                            <Link
                                href="/services"
                                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                            >
                                UI/UX Design
                            </Link>
                            <Link
                                href="/services"
                                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                            >
                                Cloud Solutions
                            </Link>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <RevealText>
                            <h3 className="font-medium text-lg">Company</h3>
                        </RevealText>
                        <nav className="flex flex-col space-y-2">
                            <Link
                                href="/about"
                                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                            >
                                About Us
                            </Link>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <RevealText>
                            <h3 className="font-medium text-lg">Contact</h3>
                        </RevealText>
                        <div className="flex flex-col space-y-2">
                            <div className="group flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
                                <MapPin className="w-4 h-4 text-primary group-hover:text-primary" />
                                <span>
                                    Maholi Road, Mathura, Uttar Pradesh, India.
                                </span>
                            </div>
                            <div className="group flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
                                <Phone className="w-4 h-4 text-primary group-hover:text-primary" />
                                <span>+91 8171732534</span>
                            </div>
                            <div className="group flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
                                <Mail className="w-4 h-4 text-primary group-hover:text-primary" />
                                <span>wellwishersolution@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 pt-2">
                                <Link
                                    href="https://www.linkedin.com/in/rohit-singh-669896219"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                            </div>
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
                    <div>
                        <Image
                            src="/logo.jpg"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="mx-auto w-24 h-auto"
                        />
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-border/20">
                    <div className="flex md:flex-row flex-col justify-between items-center gap-4">
                        <p className="text-muted-foreground text-sm">
                            © {new Date().getFullYear()} Well-Wishers. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </SectionPattern>
    );
}
