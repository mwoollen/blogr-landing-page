import Dropdown from "../Dropdown/Dropdown";

import { Product, Company, Connect } from "../../utils/NavItems";

const Navigation = () => {
  return (
    <nav className="flex flex-col sm:flex-row gap-8 w-full items-center">
      <Dropdown data={Product} />
      <Dropdown data={Company} />
      <Dropdown data={Connect} />
    </nav>
  );
};

export default Navigation;
