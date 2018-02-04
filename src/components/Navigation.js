import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Drawer from "material-ui/Drawer";
import { MenuList, MenuItem } from "material-ui/Menu";
import { ListItemIcon, ListItemText } from "material-ui/List";
import * as MaterialIcons from "material-ui-icons";
import * as Routes from "../constants/Routes";

const menuItems = [
  {
    icon: "List",
    route: Routes.LOAN_INFORMATION,
    text: "Loan Information"
  },
  {
    icon: "TrendingDown",
    route: Routes.PAYOFF_SCHEDULE,
    text: "Payoff Schedule"
  }
];

const Navigation = ({ classes, isOpen, onClose }) => (
  <Drawer open={isOpen} onClose={onClose}>
    <MenuList>
      {menuItems.map(({ icon, route, text }) => (
        <Link className={classes.link} to={route} key={text} onClick={onClose}>
          <MenuItem selected={window.location.pathname === route}>
            <ListItemIcon>
              {React.createElement(MaterialIcons[icon])}
            </ListItemIcon>
            <ListItemText primary={text} />
          </MenuItem>
        </Link>
      ))}
    </MenuList>
  </Drawer>
);

Navigation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default withStyles({
  link: {
    textDecoration: "none"
  }
})(Navigation);
