import MenuMain from './Menu';
import SocialMedia from './SocialMedia';

const Header = () => {
  return (
    <header id="header" className="bg-red-400 flex justify-center items-center h-[300px]">
      <div
        id="header-content"
        className="flex justify-between items-center bg-yellow-300 md:max-w-7xl w-full"
      >
        <MenuMain />
        <SocialMedia />
      </div>
    </header>
  );
};

export default Header;
