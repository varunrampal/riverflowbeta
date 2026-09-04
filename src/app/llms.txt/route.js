import { TREATMENTS } from "../../data/treatments";
import { SITE_CONFIG } from "../../data/site";
import { getServerPublishedBlogPosts } from "../../lib/blogServer";

export const revalidate = 3600;

export async function GET() {
  const posts = await getServerPublishedBlogPosts();
  const treatmentLinks = Object.values(TREATMENTS)
    .map((treatment) =>
      `- [${treatment.title}](${SITE_CONFIG.url}/treatments/${treatment.id}): ${treatment.short}`,
    )
    .join("\n");
  const blogLinks = posts
    .map((post) =>
      `- [${post.title}](${SITE_CONFIG.url}/blog/${post.slug}): ${post.excerpt}`,
    )
    .join("\n");

  const content = `# ${SITE_CONFIG.name}

> A laser and skin clinic in Langley, British Columbia offering personalized cosmetic treatments, professional skincare guidance, and consultations.

Riverflow Laser & Skin Clinic serves Langley and nearby communities from ${SITE_CONFIG.address.streetAddress}, ${SITE_CONFIG.address.addressLocality}, ${SITE_CONFIG.address.addressRegion}. Content is educational and does not replace an in-person suitability assessment or medical advice.

## Primary pages

- [Home](${SITE_CONFIG.url}/): Clinic overview, featured services, reviews, and consultation options.
- [Treatments](${SITE_CONFIG.url}/treatments): Complete treatment directory.
- [About](${SITE_CONFIG.url}/about): Clinic approach and technology.
- [Team](${SITE_CONFIG.url}/team): Clinic team information.
- [FAQ](${SITE_CONFIG.url}/faq): Preparation, appointments, treatments, and aftercare questions.
- [Contact](${SITE_CONFIG.url}/contact): Address, phone, email, and inquiry details.
- [Book a consultation](${SITE_CONFIG.url}/make-appointment): Appointment request options.
- [Blog](${SITE_CONFIG.url}/blog): Skincare and treatment guidance.

## Treatments

${treatmentLinks}

## Articles

${blogLinks || "- No published articles are currently available."}

## Contact

- Phone: ${SITE_CONFIG.phoneDisplay}
- Email: ${SITE_CONFIG.email}
- Location: ${SITE_CONFIG.address.streetAddress}, ${SITE_CONFIG.address.addressLocality}, ${SITE_CONFIG.address.addressRegion} ${SITE_CONFIG.address.postalCode}, Canada
- Canonical website: ${SITE_CONFIG.url}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
