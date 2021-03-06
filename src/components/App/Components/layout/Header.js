import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import DrawerNav from "./DrawerNav";
import DesktopNav from "./DesktopNav";
export default function Header() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMatch ? (
        <DrawerNav />
      ) : (
        <DesktopNav />
      )}
    </>
  );
}
