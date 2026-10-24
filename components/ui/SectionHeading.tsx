export default function SectionHeading({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  id: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
