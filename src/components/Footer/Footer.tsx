import BlogrLogo from "../../assets/logo.svg";

import { Product, Company, Connect, NavItemsProps } from "../../utils/NavItems";

const Footer = () => {
  const NavItems = [Product, Company, Connect];

  return (
    <div
      className="bg-very-dark-black-blue rounded-tr-[100px] px-[11.5%] py-16 sm:h-[359px]
      flex flex-col sm:flex-wrap items-center sm:justify-between"
    >
      <img src={BlogrLogo} alt="Blogr logo" className="pb-20" />
      {NavItems.map(({ option, subOption }: NavItemsProps) => (
        <div
          key={option}
          className="flex flex-col items-center sm:block font-ubuntu text-[15px] leading-4 pb-10 sm:pb-0 w-full sm:w-60"
        >
          <p className="font-medium text-white mb-5">{option}</p>
          {subOption.map((subOption: string) => (
            <p
              key={subOption}
              className="mb-5 text-white opacity-75 hover:cursor-pointer hover:border-b-2 w-fit"
            >
              {subOption}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
