"use client"
import knxImage from './assets/knx.png';
import Link from "next/link"
import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { dataFeaturesBusiness } from "./BestBusiness.data"
import Image from "next/image"

export function BestBusiness() {
    return (
        <div className="relative px-6 py-20 md:py-64" id="features">
            <BackgroundRadialLeft />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            <span className="block degradedBlue bg-blueLight">Tenemos muchas soluciones</span>
                            tantas <br />
                            como tu proyecto requiera
                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10 text-xs">Trabajamos con KNX, la asociación mundial de estándares de automatización de edificios.
                            KNX Association es el creador y propietario de la tecnología KNX, el único estándar abierto de domótica. <br/> Este estándar se fundamenta en más de 20 años de experiencia en el mercado. Más de 400 compañías miembros procedentes de todas partes del mundo, fabrican más de 8.000 productos certificados.</p>
                    </Reveal>
                   <Reveal>
                        <div className="px-12 my-8">
                             <Image src="/assets/knx.png" alt="KNX" width={450} height={450} className="h-auto w-72 md:w-full"/>
                            {/* <Link href="#clients" className="px-4 py-3 rounded-md bg-blueRadial">Ver todas</Link>*/}
                        </div>
                    </Reveal>
                </div>

                <div className="grid items-center py-5 md:p-4">
                    {dataFeaturesBusiness.map(({ id, icon, title, description }) => (
                        <Reveal key={id}>
                            <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                                <Image src={`/assets/${icon}.png`} alt={title} width={40} height={40} />
                                <div>
                                    <h4 className="text-primary">{title}</h4>
                                    <p className="text-primaryDark text-xs">{description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}
