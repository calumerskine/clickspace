import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { hostingTheme } from 'common/src/theme/hosting';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/Hosting/hosting.style';
import { ResetCSS } from 'common/src/assets/css/style';
import Navbar from '../containers/Hosting/Navbar';
import FeatureSection from '../containers/Hosting/Features';
import InfoSection from '../containers/Hosting/Info';
import ProblemsSection from '../containers/Hosting/Problems';
import DomainSection from '../containers/Hosting/Domain';
import PaymentSection from '../containers/Hosting/Payment';
import GuaranteeSection from '../containers/Hosting/Guarantee';
import AuditSection from '../containers/Hosting/Audit';
import ServicesSection from '../containers/Hosting/Services';
import BannerSection from '../containers/Hosting/Banner';
import PricingSection from '../containers/Hosting/Pricing';
import TestimonialSection from '../containers/Hosting/Testimonials';
import ContactSection from '../containers/Hosting/Contact';
import Footer from '../containers/Hosting/Footer';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import { ParallaxProvider } from 'react-scroll-parallax';
import FaqSection from '../containers/Hosting/Faq';

export default () => {
  return (
    <ThemeProvider theme={hostingTheme}>
      <ParallaxProvider>
        <Head>
          <title>Click Space | Revolutionary PPC</title>
          <meta name="Description" content="Click Space" />
          <meta name="theme-color" content="#1100ff" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700"
            rel="stylesheet"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>

          <BannerSection />
          <ProblemsSection />
          <InfoSection />
          <DomainSection />
          <FeatureSection />
          <PaymentSection />
          <AuditSection />
          <ServicesSection />
          <TestimonialSection />
          {/* <PricingSection /> */}
          <GuaranteeSection />
          <FaqSection />
          <ContactSection />
          <Footer />
        </ContentWrapper>
      </ParallaxProvider>
    </ThemeProvider>
  );
};
