export default function StructuredData({ data }) {
  const entries = Array.isArray(data) ? data.filter(Boolean) : [data].filter(Boolean);
  return entries.map((entry, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
    />
  ));
}
