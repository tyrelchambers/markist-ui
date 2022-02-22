import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => loginWithRedirect()} className="bg-red-500">
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
