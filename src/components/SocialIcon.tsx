interface SocialIconProps {
  href?: string;
  alt?: string;
  src?: string;
  ariaLabel?: string;
}

function SocialIcon({ href, alt, src, ariaLabel }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || alt}
    >
      <img src={src} alt={alt} className='w-10 hover:opacity-60 transition-opacity duration-200' />
    </a>
  );
}
export default SocialIcon;