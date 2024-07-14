import "./logoButton.scss";

export default function LogoButton({
  value,
  href,
  src,
  label,
}: {
  value: string;
  href: string;
  src: string;
  label: string;
}) {
  return (
    <a className={value} href={href}>
      <img src={src} alt={label} />
    </a>
  );
}
