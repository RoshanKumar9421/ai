// import React from 'react'
// import { Outlet } from 'react-router-dom'

// const Layout = () => {
//   return (
//     <div>
//       <h1>Layout</h1>
//       <Outlet/>
//     </div>
//   )
// }

// export default Layout

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // if you have one

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
