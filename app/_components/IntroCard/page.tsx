'use client';
import { Button } from "@/components/ui/button";
import { animationData } from "@/public/1706376888619";
import Lottie from "lottie-react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
// import { animationData } from "@/public/1706377304765";
const IntroCard = () => {
    return (
        <div id='home' className="flex items-center justify-center text-center md:text-left px-[10px] md:px-10 w-full h-[100vh] bg-muted">
            <div className="flex flex-col flex-1 h- full justify-center">
                <Fade direction="left" duration={1000} triggerOnce>
                    <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl pb-5">Hi I&apos;m Krish Parekh</h1>
                    <p className="text-muted-foreground text-lg  md:text-2xl lg:text-3xl ">
                        Software Engineer fueled by passion for learning. 🛠️ Builds diverse projects,
                        seamlessly blending front-end and back-end tech. 🌐 Adaptable problem-solver thriving in
                        dynamic environments. 🌱 Constantly growing and embracing emerging technologies.
                    </p>
                </Fade>
                <Fade direction="down" cascade triggerOnce>
                    <div className="pt-5 w-full">
                        <Link href='/#projects'>
                            <Button
                                className="md:w-40 md:py-8 bg-blue-600 text-white hover:bg-white hover:border border-black hover:text-black text-lg"
                                size='lg'>
                                Projects
                            </Button>
                        </Link>
                        <Link href='https://drive.google.com/file/d/1yRMnY4GyFDuvWUHft-AplmO5zJY4vNdU/view?usp=sharing' target="_blank">
                            <Button
                                className=" md:w-40 md:py-8 bg-blue-600 text-white hover:bg-white hover:border border-black hover:text-black text-lg ml-5"
                                size='lg'
                            >
                                Resume
                            </Button>
                        </Link>
                    </div>
                </Fade>
            </div>
            <div className="hidden md:block flex-1">
                <Fade direction="right" duration={1000} triggerOnce>
                    <Lottie animationData={animationData} width={70} height={70} />
                </Fade>
            </div>
        </div>
    )
}

export default IntroCard;