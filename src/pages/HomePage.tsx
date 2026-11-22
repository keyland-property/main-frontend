import { motion } from "framer-motion";
import ConsultationSection from "../components/ConsultationSection";
import FeaturedProperties from "../components/FeaturedProperties";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import PartnersSection from "../components/PartnersSection";
import PageCta from "../components/PageCta";
import ReviewsSection from "../components/ReviewsSection";
import ServicesSection from "../components/ServicesSection";
import StatsStrip from "../components/StatsStrip";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function HomePage() {
  return (
    <>
      <main>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <HeroSection />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <StatsStrip />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <FeaturedProperties />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <ServicesSection />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <PartnersSection />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <ReviewsSection />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <ConsultationSection />
        </motion.div>
      </main>
      <PageCta
        eyebrow="A more considered property journey"
        heading="Ready to make your next move in Sri Lanka?"
        description="Talk with our Colombo and Toronto advisory team about a property, portfolio, or investment plan built around your goals."
        buttonLabel="Start your property journey"
      />
      <Footer />
    </>
  );
}
