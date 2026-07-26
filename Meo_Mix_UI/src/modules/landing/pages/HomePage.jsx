import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero/Hero';
import { FlavorSelector } from '../components/FlavorSelector/FlavorSelector';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { VisionMission } from '../components/VisionMission/VisionMission';
import { ProductShowcase } from '../components/ProductShowcase/ProductShowcase';
import { WhyChoose } from '../components/WhyChoose/WhyChoose';
import { ManufacturingQualitySection } from '../../about/components/ManufacturingQualitySection/ManufacturingQualitySection';
import { InteractiveBottle } from '../components/InteractiveBottle/InteractiveBottle';
import { GallerySection } from '../components/GallerySection/GallerySection';
import { VideoSection } from '../components/VideoSection/VideoSection';
import { DistributorCTA } from '../components/DistributorCTA/DistributorCTA';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { FAQSection } from '../components/FAQSection/FAQSection';
import { ContactSection } from '../components/ContactSection/ContactSection';


export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>MEO MIX | Empire Foods & Beverages</title>
        <meta name="description" content="Experience MEO MIX premium fruit beverages. Explore 8 vibrant flavors including Royal Mango, Lush Lychee, Zesty Orange, and Pink Guava." />
      </Helmet>

      <div className="home-page-container">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About (Heritage & Quality) */}
        <AboutSection />

        {/* Section 3: Vision & Mission (Reference Offset Layout) */}
        <VisionMission />

        {/* Section 4: Flavor Selector (Bottle Slider) */}
        <FlavorSelector />

        {/* Section 5: Product Showcase */}
        <ProductShowcase />

        {/* Section 6: Why Choose Meo Mix */}
        <WhyChoose />

        {/* Section 7: Manufacturing Excellence & Quality Assurance */}
        <ManufacturingQualitySection />

        {/* Section 8: Interactive Bottle Showcase */}
        <InteractiveBottle />

        {/* Section 9: Gallery */}
        <GallerySection />

        {/* Section 10: Video Section */}
        <VideoSection />

        {/* Section 11: Distributor CTA */}
        <DistributorCTA />

        {/* Section 12: Testimonials */}
        <Testimonials />

        {/* Section 13: FAQ */}
        <FAQSection />

        {/* Section 14: Contact */}
        <ContactSection />
      </div>
    </>
  );
};
