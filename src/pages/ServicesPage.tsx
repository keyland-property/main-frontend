import { motion } from "framer-motion";
import ExecutionProcess from "../components/ExecutionProcess";
import Footer from "../components/Footer";
import PageCta from "../components/PageCta";
import RepresentativePortfolio from "../components/RepresentativePortfolio";
import ServiceHero from "../components/ServiceHero";
import ServicePillars from "../components/ServicePillars";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function ServicesPage() {
  return (
    <>
      <main id="home">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <ServiceHero />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <ServicePillars />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <ExecutionProcess />
        </motion.div>
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
          <RepresentativePortfolio />
        </motion.div>
      </main>
      <PageCta
        eyebrow="A personal approach to every property"
        heading="Let’s shape a plan around what matters to you."
        description="From development and sales to trusted asset management, our advisors can help you take the next step with clarity."
        buttonLabel="Book a consultation"
      />
      <Footer />
    </>
  );
}
