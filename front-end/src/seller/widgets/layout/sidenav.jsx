import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import {Button,Typography} from "@material-tailwind/react";
import { useMaterialTailwindController } from "../../context/index";
import routes from '../../routes';
import Logo from '../../../assets/Logo2.png'

export function Sidenav({ brandImg, brandName, }) {
  const [controller] = useMaterialTailwindController();
  const {  sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-primary-normal text-white",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-0 ml-0 h-[calc(100vh)] w-[230px] rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    >
      <div className=" my-0 text-center divide-y solid divide-red-500"
      >
        <Link to="/" >
           <img src={Logo} alt="logo" className="w-[200px] h-[130px]"/>
        </Link>
      </div>
      <div className=" mb-4 ml-4 mr-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "dark" : "text"}
                      className={`flex  items-center gap-3 px-4 py-2 capitalize text-primary-normal  ${isActive ? 'bg-primary-normal text-white' : ''}`}
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "/img/logo-ct.png",
  brandName: "Material Tailwind React",
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
