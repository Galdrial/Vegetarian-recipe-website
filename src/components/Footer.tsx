import githubgreen from '../assets/img/github-green.png';
import linkedingreen from '../assets/img/linkedin-green.png';
import sitegreen from '../assets/img/site-green.png';
import SocialIcon from './SocialIcon';

function Footer() {
  return (
    <nav className="w-full py-4 flex items-center justify-center flex-wrap gap-5 bg-white shadow-t">
      <p className='text-lime-700 text-center'>© 2025 Made with Passion by Simone Camerano</p>
      <div className="flex justify-center">
        <SocialIcon href='https://github.com/Galdrial' alt="GitHub" src={githubgreen} />
        <SocialIcon href='https://simonecamerano.dev' alt="Website" src={sitegreen} />
        <SocialIcon href='https://www.linkedin.com/in/simone-camerano/' alt="LinkedIn" src={linkedingreen} />
      </div>
    </nav>
  );
}

export default Footer;