import { useOpenCloseDropdown } from "../../hooks/useOpenCloseDropdown";
import { useOutsideClick } from "../../hooks/useOutsideClick";

import { NavItemsProps } from "../../utils/NavItems";

import ArrowDownLightIcon from "../../assets/icon-arrow-light.svg";

interface DropdownProps {
  data: NavItemsProps;
}

const Dropdown = ({ data: { option, subOption } }: DropdownProps) => {
  const { isDropdownOpen, handleDropdownOpen } = useOpenCloseDropdown();

  function handleClickOutsideDropdown() {
    handleDropdownOpen();
  }

  const ref = useOutsideClick(isDropdownOpen, handleClickOutsideDropdown);

  return (
    <div className="flex items" ref={ref}>
      <div>
        <div className="flex items-center gap-2">
          <a
            className="text-very-dark-blue sm:text-white opacity-75 hover:cursor-pointer hover:border-b-2"
            onClick={handleDropdownOpen}
          >
            {option}
          </a>
          <img
            src={ArrowDownLightIcon}
            alt="Arrow Icon"
            className={`transition-all ${isDropdownOpen && "rotate-180"}`}
          />
        </div>

        <div
          className={`absolute z-10 -ml-5 ${
            isDropdownOpen ? "block pt-5" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-1 bg-white rounded-md shadow-dropdown p-6 w-40">
            {subOption.map((subOption: string) => (
              <p
                key={subOption}
                className="hover:font-bold hover:cursor-pointer text-very-dark-gray-blue"
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
