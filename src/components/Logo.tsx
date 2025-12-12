import { Link } from 'react-router-dom';

interface LogoProps {
  href: string;
  alt: string;
  text: string;
  src: string;
  ariaLabel?: string;
}

function Logo({ href, alt, text, src, ariaLabel }: LogoProps) {
  return (
    <Link to={href} className="flex items-center min-w-max" aria-label={ariaLabel || text}>
      <img src={src} alt={alt} className="w-10 inline" />
      <span className="font-playwrite text-2xl text-lime-700">{text}</span>
    </Link>
  );
}

export default Logo;