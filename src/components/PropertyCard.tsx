import { ArrowRight, BadgeCheck, MapPin } from "lucide-react";
import type { Property } from "../api/propertyApi";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group flex flex-col bg-[#f7f8f5] transition-shadow duration-300 hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#dce5dc]">
        <img
          src={property.image}
          alt={`${property.name}, ${property.location}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-[#052719]/75 to-transparent px-5 pb-5 pt-14">
          <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white">{property.status}</span>
          <span className="inline-flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-white/85">
            <BadgeCheck size={13} className="text-[#e2c36d]" />
            {property.tag}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
        <div className="mb-3 flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-[#68756c]">
          <MapPin size={12} className="shrink-0 text-terracotta" />
          {property.location}
        </div>
        <h3 className="font-display text-[25px] font-normal leading-tight text-navy">
          {property.name}
        </h3>
        <p className="mt-3 line-clamp-2 min-h-12 text-xs leading-6 text-muted">
          {property.description}
        </p>

        <div className="my-5 grid grid-cols-3 border-y border-[#dce5dc] py-4">
          {Object.values(property.specs).map((spec, index) => (
            <div key={spec} className={index === 1 ? "border-x border-[#dce5dc] px-2 text-center" : "px-2 text-center"}>
              <p className="text-[10px] font-medium leading-4 text-navy">{spec}</p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.1em] text-[#68756c]">
                {["Bedrooms / features", "Land / area", "Title status"][index]}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <span className="text-[9px] text-muted">{property.priceNote}</span>
            <p className="mt-1 font-display text-[20px] font-normal leading-tight text-navy">
              {property.price}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-medium text-terracotta">{property.foreignPrice}</p>
            <p className="mt-1 text-[9px] text-muted">{property.foreignNote}</p>
          </div>
        </div>

        <div className="mt-auto">
          <a
            href="/contact#consultation"
            className="group inline-flex items-center gap-2 border-b border-terracotta pb-2 text-[9px] font-medium uppercase tracking-[0.16em] text-terracotta"
          >
            Enquire about this property <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
}
