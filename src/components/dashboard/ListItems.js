import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SchoolIcon from "@material-ui/icons/School";
// import FolderSharedIcon from "@material-ui/icons/FolderShared";
import WorkIcon from '@material-ui/icons/Work';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export const mainListItems = (
  <div>
<List component="nav" aria-label="Secondary mailbox folders">
    <ListItemLink button href="#dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemLink>

    <ListItemLink button href="#projects">
      <ListItemIcon>
          <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItemLink>

    <ListItemLink button href="#experience">
      <ListItemIcon>
          <WorkOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Work Experience" />
    </ListItemLink>

    <ListItemLink button href="#education">
      <ListItemIcon>
        {/* <FolderSharedIcon /> */}
        <SchoolIcon />
      </ListItemIcon>
      <ListItemText primary="Education" />
    </ListItemLink>

    <ListItemLink button href="http://jca.x10host.com/JCAweb/" target="_blank">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Thesis Project" />
    </ListItemLink>

    </List>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button >
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);