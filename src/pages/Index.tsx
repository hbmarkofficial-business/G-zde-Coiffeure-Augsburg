import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Augsburg | Gözde Coiffeure Augsburg</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Gözde Coiffeure Augsburg in Augsburg für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Augsburg"
        />
        <link rel="canonical" href="https://gentlemanscut.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Gözde Coiffeure Augsburg | Premium Barbershop Augsburg" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Augsburg."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gentlemanscut.de" />
        <meta property="og:image" content="https://gentlemanscut.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gözde Coiffeure Augsburg | Premium Barbershop Augsburg" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://gentlemanscut.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Gözde Coiffeure Augsburg",
            "image": "https://gentlemanscut.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Pilgerhausstraße 30",
              "addressLocality": "Augsburg",
              "postalCode": "86152",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.3717",
              "longitude": "10.8983"
            },
            "url": "https://gentlemanscut.de",
            "telephone": "+49 821 1234567",
            "openingHours": "Mo-Fr 08:30-19:00, Sa 08:30-18:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/goezdecoiffeure",
              "https://www.instagram.com/goezdecoiffeure"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
