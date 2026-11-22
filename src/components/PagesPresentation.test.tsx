import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import Header from "./Header";
import PageCta from "./PageCta";
import PageHero from "./PageHero";

describe("secondary page presentation", () => {
  it("shows the company logo in the main navigation", () => {
    const markup = renderToStaticMarkup(<Header />);

    expect(markup).toContain('src="/keyland-logo.png"');
    expect(markup).toContain('alt="Keyland Properties · Sri Lanka"');
  });

  it("renders a centered text-only hero and consultation link", () => {
    const markup = renderToStaticMarkup(
      <PageHero
        eyebrow="Property portfolio"
        title="A considered collection"
        description="A clear overview of selected properties."
        actionLabel="Explore properties"
      />,
    );

    expect(markup).toContain("<h1");
    expect(markup).toContain("A considered collection");
    expect(markup).not.toContain("<img");
    expect(markup).toContain("text-center");
    expect(markup).toContain('href="/contact#consultation"');
  });

  it("keeps the prominent page CTA linked to consultation", () => {
    const markup = renderToStaticMarkup(
      <PageCta
        eyebrow="Start a conversation"
        heading="Find your next step."
        description="Talk with the Keyland team."
        buttonLabel="Speak with our team"
      />,
    );

    expect(markup).toContain("Find your next step.");
    expect(markup).toContain('href="/contact#consultation"');
    expect(markup).toContain("Speak with our team");
  });
});
