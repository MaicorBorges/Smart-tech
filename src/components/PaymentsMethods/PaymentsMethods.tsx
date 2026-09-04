"use client"
import 'swiper/css'
import { BackgroundRadialRight } from '../BackgroundRadialRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { SwiperRef } from 'swiper/react'
import { dataPaymentMethods } from './PaymentMethods.data'
import Image from 'next/image'
import { CtaDark } from '../CtaDark'
import { useRef } from 'react'

export function PaymentsMethods() {
    const swiperRef = useRef<SwiperRef>(null);

    const handleReachEnd = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(0);
        }
    };

    return (
        <div className="relative py-20 md:py-64" id="servicios">
            <BackgroundRadialRight />
            <div className="relative w-full overflow-hidden">
            <Swiper
    ref={swiperRef}
    breakpoints={{
        320: {
            slidesPerView: 8, // or 9, as per your requirement
            spaceBetween: 15
        }
    }}
    grabCursor={true}
    loop={false}
    speed={2000}
    onReachEnd={handleReachEnd}
>
    {dataPaymentMethods.map(({ id, image }) => (
        <SwiperSlide key={id} className="flex items-center slider-horizontal">
            <Image src={`/assets/${image}`} alt="Marcas" width="70" height="70" className="h-[60px] w-[120px] object-contain" />
        </SwiperSlide>
    ))}
</Swiper>
            </div>

            <CtaDark />
        </div>
    )
}
