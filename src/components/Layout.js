import React from "react";
import { Outlet } from "react-router-dom";
import NaVBar from "./NaVBar";

const Layout = () => {
    return (
        <div>
            <NaVBar/>
            <Outlet/>
        </div>
    );
};

export default Layout;