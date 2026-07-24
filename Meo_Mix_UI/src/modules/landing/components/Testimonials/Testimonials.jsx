import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Testimonials.module.scss';

export const Testimonials = () => {
  const reviews = [
    {
      quote: "Meo Mix Mango feels like drinking fresh Alphonso fruit drink right out of the orchard. Unbelievable rich taste and aroma!",
      name: "Ananya Deshmukh",
      role: "Verified Beverage Connoisseur",
      rating: 5
    },
    {
      quote: "As a retail distributor, stocking Meo Mix Nimbu Pani and Lychee has been our best business decision this summer. High repeat customer rate!",
      name: "Vikram Malhotra",
      role: "Managing Director, Metro Trade Agency",
      rating: 5
    },
    {
      quote: "The packaging aesthetics and genuine fruit flavor set a new benchmark in India. Pink Guava is an absolute staple at our events.",
      name: "Siddharth Roy",
      role: "Luxury Event Planner",
      rating: 5
    },
    {
      quote: "No harsh aftertaste, zero heavy artificial sweetness. Just clean, ice-cold fruit drink satisfaction in every single sip.",
      name: "Dr. Meera Nambiar",
      role: "Nutrition & Health Consultant",
      rating: 5
    }
  ];

  return (
    <section className={`section-padding ${styles.testimonialSection}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="glass-pill">VOICES OF FRESHNESS</div>
          <h2 className="heading-1">
            Loved By <span className="gradient-text">Millions</span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className={styles.swiperContainer}
        >
          {reviews.map((rev, idx) => (
            <SwiperSlide key={idx}>
              <div className={styles.reviewCard}>
                <div className={styles.quoteIcon}>
                  <FaQuoteLeft />
                </div>
                <div className={styles.starRow}>
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <FiStar key={i} className={styles.starFilled} />
                  ))}
                </div>
                <p className={styles.quoteText}>"{rev.quote}"</p>
                <div className={styles.reviewerMeta}>
                  <span className={styles.name}>{rev.name}</span>
                  <span className={styles.role}>{rev.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
