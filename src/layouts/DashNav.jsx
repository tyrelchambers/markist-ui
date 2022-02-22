import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faCubes } from "@fortawesome/pro-duotone-svg-icons";
import { Link } from "react-location";

const DashNav = () => {
  return (
    <nav className="mt-10">
      <ul className="flex flex-col gap-8">
        <li>
          <Link
            to="/dashboard/todos"
            className="flex items-center text-slate-700"
          >
            <FontAwesomeIcon icon={faCubes} className="mr-6" />
            <p>Todos</p>
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/settings"
            className="flex items-center text-slate-700"
          >
            <FontAwesomeIcon icon={faCog} className="mr-6" />
            <p>Settings</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DashNav;
