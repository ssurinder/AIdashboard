import Footer from "components/footer/FooterAuthDefault";
import SidebarAuth from '../../components/sidebar/indexAuth'
import authImg from "assets/img/auth/auth.png";
import {  Routes, Route, Navigate } from "react-router-dom";
import routes from "routes";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";

export default function Auth() {
  const getRoutes = (routes: RoutesType[]): any => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full">
      <SidebarAuth />
      <div className="h-full w-full bg-white dark:!bg-navy-900">
      <main className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]">
          <div className="h-full">
            <div className="flex h-full w-full">
              
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                <Routes>
                  {getRoutes(routes)}
                  <Route
                    path="/"
                    element={<Navigate to="/auth/sign-in" replace />}
                  />
                </Routes>
                
              </div>
              <Footer />
            </div>
          </div>
        </main>
        </div>
    </div>
  );
}
