import { Outlet } from "react-router-dom";
import Header from "./Header";

const RootLayout = () => {
  return (
    <div className="pb-16 md:pb-0">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
