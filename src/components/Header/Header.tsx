import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowSize";

import LogoSvg from "../../assets/logo.svg";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";

import MenuIcon from "../../assets/icon-hamburger.svg";

const Header = () => {
  const { width } = useWindowDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function handleMenuOpen() {
    setIsMenuOpen(!isMenuOpen);
  }

  const navStyle =
    width > 640
      ? "flex items-center justify-between w-full"
      : isMenuOpen
      ? "flex flex-col items-center bg-white w-full mt-12 rounded py-8"
      : "hidden";

  return (
    <header className="flex items-center justify-between px-[11.4%] pt-16 z-10 sm:font-ubuntu">
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between w-full">
        <img src={LogoSvg} alt="Blogr logo" className="mr-16" />
        <img
          src={MenuIcon}
          className="block sm:hidden"
          onClick={handleMenuOpen}
        />
        <div className={navStyle}>
          <Navigation />
          {width <= 640 ? (
            <div className="h-[1px] bg-gray-500 w-10/12 my-6" />
          ) : null}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 font-bold">
            {width > 640 ? (
              <>
                <Button text="Login" />
                <Button text="Sign Up" primary />
              </>
            ) : (
              <>
                <Button text="Login" buttonHeader />
                <Button text="Sign Up" buttonHeaderPrimary />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
