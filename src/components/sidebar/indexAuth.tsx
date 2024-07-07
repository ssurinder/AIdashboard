/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import LogoAI from "../../assets/svg/Logo.svg"
import Logo from "../../assets/svg/Logo.svg"
import LogoutIcon from '../../assets/svg/logout.svg'

import SidebarCard from "components/sidebar/componentsrtl/SidebarCard";
import routes from "routes";

const Sidebar = () => {
  
  return (
    
    <div
      className="sm:none duration-175 linear fixed !z-50 py-4 h-screen dark:text-white md:!z-50 lg:!z-50 xl:!z-0
      "
    >
      <div className="relative rounded-r-[60px] flex flex-col bg-sidebar dark:!bg-navy-800 pb-10 shadow-2xl shadow-white/5 transition-all h-full">
      

      <div className="mt-[20px] mb-7 " />
      {/* Nav item */}
      <div className="h-full flex flex-col w-[480px] items-center justify-center overflow-auto px-10 ">
      <a href="/"><img src={Logo} alt="logo" /></a>
        <div>dfvnfdsvnkdfl</div>
      </div>
     


      {/* Nav item end */}
      </div>
    </div>
  );
};

export default Sidebar;
