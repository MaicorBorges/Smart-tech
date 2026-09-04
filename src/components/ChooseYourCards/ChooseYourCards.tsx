"use client"
import 'swiper/css'
import 'swiper/css/effect-cards'
import { Swiper, SwiperSlide } from "swiper/react";
import { BackgroundRadialRight } from "../BackgroundRadialRight";
import { MotionTransition } from "../MotionTransition";
import { Reveal } from "../Reveal";
import { EffectCards } from "swiper/modules";
import { dataCards } from "./ChooseYourCards.data";
import Image from "next/image";
import Link from "next/link"

export function ChooseYourCards() {
    return (
        <div className="relative px-6 py-20 md:py-64" id="historia">
            <BackgroundRadialRight />
            <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
                <Reveal>
                    <h2 className="text-5xl font-semibold">Una larga hisotoria llena de <br /> exitosos
                        <span className="block degradedBlue bg-blueLight">proyectos que te invitamos a <br /> recorrer</span>
                    </h2>
                    <div className="my-8">
                        <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial">Ver todas</Link>
                    </div>
                </Reveal>
                <div className="px-5">
                    <MotionTransition>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                        >
                            {dataCards.map(({ image, id }) => (
                                <SwiperSlide key={id}>
                                    <Image src={image} alt="House" width="550" height="300" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </MotionTransition>
                </div>
            </div>
        </div>
    )
}
