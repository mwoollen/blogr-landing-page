import useWindowDimensions from "../../hooks/useWindowSize";
import { useOpenCloseDropdown } from "../../hooks/useOpenCloseDropdown";
import { useOutsideClick } from "../../hooks/useOutsideClick";

import { NavItemsProps } from "../../utils/NavItems";

import ArrowDownLightIcon from "../../assets/icon-arrow-light.svg";
import ArrowDownDarkIcon from "../../assets/icon-arrow-dark.svg";

interface DropdownProps {
  data: NavItemsProps;
}

const Dropdown = ({ data: { option, subOption } }: DropdownProps) => {
  const { width } = useWindowDimensions();
  const { isDropdownOpen, handleDropdownOpen } = useOpenCloseDropdown();

  function handleClickOutsideDropdown() {
    handleDropdownOpen();
  }

  const ref = useOutsideClick(isDropdownOpen, handleClickOutsideDropdown);

  return (
    <div className="flex justify-center max-sm:w-full" ref={ref}>
      <div className="max-sm:w-full max-sm:px-8">
        <div className="max-sm:relative flex justify-center items-center gap-2">
          <a
            className="text-very-dark-blue font-semibold sm:font-bold sm:text-white opacity-75 hover:cursor-pointer sm:hover:border-b-2"
            onClick={handleDropdownOpen}
          >
            {option}
          </a>
          <img
            src={width > 640 ? ArrowDownLightIcon : ArrowDownDarkIcon}
            alt="Arrow Icon"
            className={`transition-all ${
              isDropdownOpen && "rotate-180"
            }`}
          />
        </div>

        <div
          className={`sm:absolute sm:z-10 sm:-ml-5 ${
            isDropdownOpen ? "block pt-5 max-sm:text-center" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-1 bg-grayish-blue sm:bg-white rounded sm:shadow-dropdown w-full p-6 sm:w-40">
            {subOption.map((subOption: string) => (
              <p
                key={subOption}
                className="sm:hover:font-bold hover:cursor-pointer text-very-dark-gray-blue"
              >
                {subOption}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
