import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { getPublicReviews, type PublicReview } from "../api/contentApi";
import SectionHeading from "./SectionHeading";

const fallbackReviews: PublicReview[] = [
  { id: "review-1", name: "M. Perera", role: "Property investor", rating: 5, quote: "The team made a complex cross-border purchase clear and well-coordinated.", featured: true },
  { id: "review-2", name: "S. Fernando", role: "Diaspora client", rating: 5, quote: "Thoughtful advice, transparent communication, and reliable follow-through.", featured: true },
  { id: "review-3", name: "A. Wijesinghe", role: "Development partner", rating: 5, quote: "Their diligence and local knowledge helped us move forward with confidence.", featured: true },
];

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(fallbackReviews);

  useEffect(() => {
    getPublicReviews().then(setReviews).catch((error: Error) => {
      console.warn("Could not load client reviews from the Keyland API; showing the public-site defaults.", error.message);
    });
  }, []);

  return (
    <section className="bg-[#edf2ec] py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <SectionHeading eyebrow="Client perspective" title="Trusted through every step." description="A selection of experiences shared by our clients and partners." />
        <div className="mt-10 grid gap-px bg-[#dce5dc] md:grid-cols-3">
          {reviews.filter((review) => review.featured).map((review) => (
            <article key={review.id} className="bg-[#f7f8f5] p-7 sm:p-8">
              <div className="flex gap-1 text-terracotta" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: Math.max(0, Math.min(5, review.rating)) }, (_, index) => <Star key={index} size={14} fill="currentColor" />)}
              </div>
              <blockquote className="mt-5 min-h-24 font-display text-[21px] leading-8 text-navy">“{review.quote}”</blockquote>
              <p className="mt-6 border-t border-[#dce5dc] pt-5 text-[10px] font-medium uppercase tracking-[0.12em] text-navy">{review.name}</p>
              <p className="mt-1 text-[10px] text-muted">{review.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
