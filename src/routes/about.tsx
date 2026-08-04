import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sinograph 诠字" },
      { name: "description", content: "Methodology, sourcing discipline, and inclusion criteria for Sinograph 诠字, a living reference to China's AI governance ecosystem." },
      { property: "og:title", content: "About — Sinograph 诠字" },
      { property: "og:description", content: "Methodology, sourcing discipline, and inclusion criteria for Sinograph 诠字, a living reference to China's AI governance ecosystem." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),

  component: Page,
});

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
      {children}
    </h2>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`space-y-4 ${className}`}>{children}</section>;
}

function Page() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <header className="mb-12 space-y-4">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          About Sinograph 诠字
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          A living reference to China's AI ecosystem — its institutions, relationships, governance discourse, and the cross-border interpreters who make it legible to international audiences.
        </p>
      </header>

      <div className="space-y-14">
        <Section>
          <SectionHeading>What is Sinograph?</SectionHeading>
          <p className="leading-relaxed text-foreground/90">
            Sinograph is a living reference to China's AI ecosystem — its institutions, relationships, governance discourse, and the cross-border interpreters who make it legible to international audiences.
          </p>
          <p className="leading-relaxed text-foreground/90">The project covers three layers:</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2 rounded-lg border border-border p-4">
              <h3 className="font-serif text-lg font-semibold text-primary">Structure</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                A curated directory of 90 actors across China's AI governance ecosystem — government agencies, research institutes, AI companies, industry associations, and international interpreters.
              </p>
            </div>
            <div className="space-y-2 rounded-lg border border-border p-4">
              <h3 className="font-serif text-lg font-semibold text-primary">Discourse</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The Voices section curates public statements from Chinese AI leaders — organized by topic, presented in original Chinese with English translations.
              </p>
            </div>
            <div className="space-y-2 rounded-lg border border-border p-4">
              <h3 className="font-serif text-lg font-semibold text-primary">Signal</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The Ecosystem Weekly Feed translates and curates AI governance discourse from 14 official Chinese WeChat accounts for English-speaking researchers and practitioners.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading>Why does this exist?</SectionHeading>
          <p className="leading-relaxed text-foreground/90">
            Global AI governance increasingly requires understanding how different national ecosystems work — not through Western analytical frameworks imposed from outside, but by reading each regime in its own institutional language. China's AI governance ecosystem is the most consequential one that remains largely illegible to international audiences, not because information is unavailable, but because it's published in Chinese, scattered across WeChat accounts and ministry websites, and structured by institutional conventions that don't map neatly to Western categories.
          </p>
          <p className="leading-relaxed text-foreground/90">
            Sinograph exists to close that gap. The project is grounded in a thesis we call <strong>ecosystem interpretability</strong> — the idea that meaningful international cooperation on AI governance requires first being able to read each other's ecosystems accurately. This isn't translation in the linguistic sense alone; it's translation of institutional structure, regulatory logic, and policy discourse.
          </p>
          <p className="leading-relaxed text-foreground/90">
            The name reflects this mission. A sinograph is a Chinese character — a unit of meaning in a writing system. Sinograph 诠字 treats China's AI ecosystem as a system of signs to be read, interpreted, and made legible.
          </p>
        </Section>

        <Section>
          <SectionHeading>Methodology</SectionHeading>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">Evidence discipline</h3>
              <p className="leading-relaxed text-foreground/90">
                Every institutional relationship on the map is backed by a primary-source citation. Approximately 81% of primary sources are Chinese-language — official ministry websites, TC260 standards documents, CAICT publications, university announcements. English-language secondary sources from established analysts (Carnegie, DigiChina, CSIS Interpret: China) are used for corroboration, not as primary evidence.
              </p>
              <p className="leading-relaxed text-foreground/90">
                When primary sources do not support a proposed relationship, we record it as "Unverified" rather than fabricating a plausible-sounding connection. Documenting the absence of evidence is treated as a valid and meaningful research outcome, not a gap to be filled.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">What counts as a relationship</h3>
              <p className="leading-relaxed text-foreground/90">We distinguish structural institutional ties from coverage. If an analyst writes about an organization, that is coverage — not a relationship. Only verifiable structural connections are included:</p>
              <ul className="list-disc space-y-2 pl-6 leading-relaxed text-foreground/90">
                <li><strong>Joint rulemaking</strong> — co-issued laws, regulations, standards, or explicit interagency coordination</li>
                <li><strong>Institutional relationship</strong> — hierarchy, oversight, hosting, sponsorship, operational ties</li>
                <li><strong>Personnel bridge</strong> — an individual whose affiliations connect two institutions</li>
                <li><strong>Membership</strong> — formal association membership, standards working group participation, safety commitment signatory</li>
                <li><strong>Collaboration</strong> — recurring joint work: dialogues, forums, joint research programs</li>
                <li><strong>Publication / production</strong> — joint reports, joint principles, one actor publishing another's output</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">Significance tiering</h3>
              <p className="leading-relaxed text-foreground/90">
                Not all relationships are equally important for understanding the ecosystem. Each relationship is assigned a significance tier:
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-relaxed text-foreground/90">
                <li><strong>Primary</strong> — foundational to understanding the ecosystem's structure. Removing this edge would change a reader's understanding of how the system works.</li>
                <li><strong>Secondary</strong> — real and documented, enriches the picture, but not essential for structural understanding. Visible on demand.</li>
              </ul>
              <p className="leading-relaxed text-foreground/90">
                Relationships assessed as minor (committee seats, shared leadership positions, minor affiliations) are preserved in the research workbook but not displayed on the network, to maintain readability.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">Bilingual sourcing</h3>
              <p className="leading-relaxed text-foreground/90">
                Chinese governance discourse is published primarily on WeChat, in Chinese. Relying exclusively on English-language analysis of Chinese AI governance introduces systematic distortion — not because English-language analysts are wrong, but because they necessarily filter, summarize, and reframe Chinese institutional language for Western audiences. Sinograph goes upstream: we read the original Chinese sources, preserve key terms in their original language where meaning would be lost in translation, and present institutional positioning as the actors themselves frame it.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground">What Sinograph is not</h3>
              <p className="leading-relaxed text-foreground/90">
                Sinograph is not an advocacy project. It does not argue for or against any governance model. It does not rank actors by influence or evaluate regulatory effectiveness. It does not provide policy recommendations. It is a reference tool — designed to make information accessible and institutional structure visible, so that researchers, policymakers, and practitioners can form their own judgments with better information.
              </p>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeading>Who built this?</SectionHeading>
          <p className="leading-relaxed text-foreground/90">
            Sinograph is an independent research project. The team has backgrounds in public policy, mathematics, and AI governance research, with affiliations across institutions in China, the UK, and the United States.
          </p>
          <p className="leading-relaxed text-foreground/90">
            The project is unfunded and editorially independent. Institutional relationships depicted on the map reflect publicly available information and do not imply endorsement by any institution profiled.
          </p>
        </Section>

        <Section>
          <SectionHeading>Contact & Feedback</SectionHeading>
          <p className="leading-relaxed text-foreground/90">
            We welcome corrections, suggestions, and collaboration inquiries. If you find an error — a broken link, a misattributed relationship, an outdated detail — please let us know. Evidence discipline depends on ongoing verification.
          </p>
          <p className="leading-relaxed text-foreground/90">
            Get in touch:{" "}
            <a
              href="mailto:sinograph.quanzi@gmail.com"
              className="text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary/80"
            >
              sinograph.quanzi@gmail.com
            </a>
          </p>
        </Section>
      </div>
    </article>
  );
}
