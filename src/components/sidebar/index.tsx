/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import LogoAI from "../../assets/svg/Logo.svg"
import Logo from "../../assets/svg/Logo.svg"
import LogoutIcon from '../../assets/svg/logout.svg'

import SidebarCard from "components/sidebar/componentsrtl/SidebarCard";
import routes from "routes";

const Sidebar = (props: {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
}) => {
  const { open, onClose } = props;
  
  return (
    
    <div
      className={`sm:none duration-175 linear fixed !z-50 py-4 h-screen dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <div className="relative rounded-r-[60px] flex flex-col bg-sidebar dark:!bg-navy-800 pb-10 shadow-2xl shadow-white/5 transition-all h-full">
      <span
        className="absolute top-8 right-8 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className=" font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
         <a href="/"><img src={Logo} alt="logo" /></a>
        </div>
      </div>
      <div className="mt-[20px] mb-7 " />
      {/* Nav item */}
      <div className="h-full flex flex-col justify-between overflow-auto px-10 ">
      <ul className="flex flex-col ">
        <Links routes={routes} />
        
      </ul>
      <div className="relative py-[14px] px-4 flex hover:cursor-pointer rounded-xl  ">
      
                <div
                className="my-[3px] flex cursor-pointer items-centerMain Dashboard"
                
              >
                <span
                  className=
                      "font-medium text-gray-600"
                >
                  <img src={LogoutIcon} alt="logo" />
                </span>
                <p
                  className="leading-1 ml-4 flex font-normal text-unselect"
                >
                  Logout
                </p>
              </div>
              
      </div>
      </div>
     


      {/* Nav item end */}
      </div>
    </div>
  );
};

export default Sidebar;
