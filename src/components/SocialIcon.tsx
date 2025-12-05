

function SocialIcon({href, alt, src,}: {href?: string; alt?: string; src?: string;}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"><img src={src} alt={alt} className='w-10' /></a>
  )
}
export default SocialIcon;