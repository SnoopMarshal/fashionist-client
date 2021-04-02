import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import DrawerNav from "./DrawerNav";
import DesktopNav from "./DesktopNav";

const Header = (props) => {
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

export default Header;
// DesktopNav.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });
// export default connect(mapStateToProps, { logoutUser })(Header);
