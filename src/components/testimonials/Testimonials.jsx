import React from "react"
import "./testimonials.css"

import { initialData } from "../testimonials/dataTestimonials"

// import Swiper core and required modules
import { Pagination, Autoplay, Navigation } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials__container"
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                // install Swiper modules
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={40}
                slidesPerView={1}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
            >
                {initialData.data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client__avatar">
                                <img src={avatar} alt={name} />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials
