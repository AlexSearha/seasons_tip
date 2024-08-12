import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = () => {
  return (
    <div id="socials" className="flex justify-end gap-4 h-8 w-full text-white">
      <FontAwesomeIcon icon={faFacebookF} className="transition-colors hover:text-blue-600 cursor-pointer" />
      <FontAwesomeIcon icon={faXTwitter} className="transition-colors hover:text-slate-300 cursor-pointer" />
      <FontAwesomeIcon icon={faInstagram} className="transition-colors hover:text-pink-400 cursor-pointer" />
    </div>
  );
};

export default SocialMedia;
