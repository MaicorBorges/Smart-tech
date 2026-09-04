"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"


export function FirstBlock() {
    return (
        <div className="relative p-4 md:py-40">
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            Domótica e inmótica
                            <span className="block degradedBlue bg-blueLight">
                              Control Industrial   
                            </span>
                            IoT 
                        </h1>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">SMART TECH es una empresa pionera en la 
                            implementación de soluciones IoT en el Uruguay y es un referente técnico en nuestro medio, 
                            brindando soluciones innovadoras, aplicando tecnología de última generación y productos 
                            de calidad certificada.</p>
                    </Reveal>
                    <Reveal>
                        <div className="my-8">
                            <Link href="#features" className="px-4 py-3 rounded-md bg-blueRadial">Conócenos</Link>
                        </div>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <Image src="/assets/why-us.png" alt="Card" width={450} height={450} className="h-auto w-72 md:w-full" />
                </MotionTransition>
            </div>
        </div>
    )
}
