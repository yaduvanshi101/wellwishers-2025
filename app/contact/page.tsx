"use client";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {MailIcon, MapPinIcon, PhoneIcon, Sparkles} from "lucide-react";
import {motion} from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "359d8c9e-c470-46e5-be2d-bb900bc7cf2c");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const result = await response.json();

            if (result.success) {
                // Success handling - you could update UI state here
                console.log("Form submitted successfully");
                event.target.reset(); // Reset the form
            } else {
                // Error handling
                console.error("Submission error:", result.message);
                // You could set an error state here
            }
        } catch (error) {
            console.error("Submission error:", error);
            // Handle network errors
        }
    }

    return (
        <>
            <section className="relative flex justify-center items-center w-full min-h-[50vh] overflow-hidden">
                {/* Background Elements */}
                <div className="z-0 absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
                <div className="z-0 absolute inset-0">
                    <div className="top-0 right-0 absolute bg-primary/10 opacity-20 blur-3xl rounded-full w-96 h-96 animate-float filter"></div>
                    <div
                        className="bottom-0 left-0 absolute bg-purple-500/10 opacity-20 blur-3xl rounded-full w-96 h-96 animate-float filter"
                        style={{animationDelay: "2s"}}
                    ></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
                </div>

                <div className="z-10 relative px-4 md:px-6 container">
                    <div className="flex flex-col justify-center items-center space-y-6 text-center">
                        <motion.div
                            className="inline-flex items-center bg-primary/10 px-4 py-1.5 border border-primary/20 rounded-full font-medium text-primary text-sm"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                        >
                            <Sparkles className="mr-2 w-4 h-4" />
                            Get in Touch
                        </motion.div>

                        <motion.h1
                            className="max-w-[800px] font-bold text-4xl sm:text-5xl xl:text-6xl tracking-wide"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.1}}
                        >
                            <span className="block">Let's Start a</span>
                            <span className="bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary text-transparent">
                                Conversation
                            </span>
                        </motion.h1>

                        <motion.p
                            className="mx-auto max-w-[600px] text-muted-foreground md:text-xl"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            Have a question, a project idea, or just want to say
                            hello? We'd love to hear from you. Reach out to us
                            today.
                        </motion.p>
                    </div>
                </div>
            </section>
            <div className="flex justify-center items-center py-16 min-h-screen">
                <div className="mx-auto px-6 xl:px-0 w-full max-w-screen-xl">
                    <p className="text-muted-foreground">Contact Us</p>
                    <h2 className="mt-3 font-bold text-3xl md:text-4xl tracking-tight">
                        Chat to our friendly team
                    </h2>
                    <p className="mt-3 text-base sm:text-lg">
                        We&apos;d love to hear from you. Please fill out this
                        form or shoot us an email.
                    </p>
                    <div className="gap-16 md:gap-10 grid lg:grid-cols-2 mt-24">
                        <div className="gap-x-8 gap-y-12 grid grid-cols-1 sm:grid-cols-2">
                            <div>
                                <div className="flex justify-center items-center bg-primary/10 rounded-full w-12 h-12 text-primary">
                                    <MailIcon />
                                </div>
                                <h3 className="mt-6 font-semibold text-xl">
                                    Email
                                </h3>
                                <p className="my-2.5 text-muted-foreground">
                                    Our friendly team is here to help.
                                </p>
                                <div className="font-medium text-primary">
                                    wellwishersolution@gmail.com
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-center items-center bg-primary/10 rounded-full w-12 h-12 text-primary">
                                    <MapPinIcon />
                                </div>
                                <h3 className="mt-6 font-semibold text-xl">
                                    Office
                                </h3>
                                <p className="my-2.5 text-muted-foreground">
                                    Come say hello at our office HQ.
                                </p>
                                <div className="font-medium text-primary">
                                    Maholi Road, Mathura, Uttar Pradesh, India.
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-center items-center bg-primary/10 rounded-full w-12 h-12 text-primary">
                                    <PhoneIcon />
                                </div>
                                <h3 className="mt-6 font-semibold text-xl">
                                    Phone
                                </h3>
                                <p className="my-2.5 text-muted-foreground">
                                    Mon-Fri from 9am to 5pm.
                                </p>
                                <div className="font-medium text-primary">
                                    +91 8171732534
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <Card className="bg-primary/5 shadow-none">
                            <CardContent className="p-4 md:p-6">
                                <div className="flex justify-center items-center mb-6">
                                    <Image
                                        src="/logo.jpg"
                                        alt="Well-Wishers Agency Logo"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="gap-x-4 gap-y-5 grid md:grid-cols-2">
                                        <div className="col-span-2 sm:col-span-1">
                                            <Label htmlFor="firstName">
                                                First Name
                                            </Label>
                                            <Input
                                                placeholder="First name"
                                                id="firstName"
                                                className="shadow-none mt-1.5 h-11"
                                                name="firstName"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <Label htmlFor="lastName">
                                                Last Name
                                            </Label>
                                            <Input
                                                placeholder="Last name"
                                                id="lastName"
                                                className="shadow-none mt-1.5 h-11"
                                                required
                                                name="lastName"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                                id="email"
                                                className="shadow-none mt-1.5 h-11"
                                                required
                                                name="email"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <Label htmlFor="message">
                                                Message
                                            </Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Message"
                                                className="shadow-none mt-1.5"
                                                rows={6}
                                                required
                                                name="message"
                                            />
                                        </div>
                                    </div>
                                    <Button
                                        className="mt-6 w-full"
                                        size="lg"
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
