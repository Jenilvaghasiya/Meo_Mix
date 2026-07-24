import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ContactSection } from '../../landing/components/ContactSection/ContactSection';
import { FAQSection } from '../../landing/components/FAQSection/FAQSection';

export const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | MEO MIX® Customer Support & Inquiries</title>
        <meta name="description" content="Get in touch with MEO MIX®. Toll-free helpline, corporate office locations, and direct inquiry form." />
      </Helmet>

      <div style={{ paddingTop: '5rem' }}>
        <ContactSection />
        <FAQSection />
      </div>
    </>
  );
};
