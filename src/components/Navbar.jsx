import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CssBaseline } from "@mui/material";
import SpaSharpIcon from "@mui/icons-material/SpaSharp";

import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Inicio", "Novedades", "Perfil", "Contacto"];
const [inicio, novedades, perfil, contacto] = navItems;

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigation = useNavigate();

  const perfilRoute = () => {
    navigation("/login");
  };

  const homeRoute = () => {
    navigation("/");
  };

  const newsRoute = () => {
    navigation("/news");
  };

  const contactRoute = () => {
    navigation("/about-us");
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#fff" }}>
        PLANTASIA
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", bgcolor: "green" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          sx={{
            bgcolor: "transparent",
            color: "#000",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              component="div"
              fontFamily={"Roboto"}
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                color: "white",
              }}
            >
              <SpaSharpIcon
                sx={{
                  fontSize: "30px",
                  color: "white",
                  position: "relative",
                  bottom: "5px",
                }}
              />
              PLANTASIA
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                key={inicio}
                sx={{ color: "white", fontSize: "16px" }}
                onClick={homeRoute}
              >
                {inicio}
              </Button>
              {/**const [ inicio, novedades, perfil, contacto ] = navItems; */}
              <Button
                key={novedades}
                sx={{ color: "white", fontSize: "16px" }}
                onClick={newsRoute}
              >
                {novedades}
              </Button>

              <Button
                key={perfil}
                sx={{ color: "white", fontSize: "16px" }}
                onClick={perfilRoute}
              >
                {perfil}
              </Button>

              <Button
                key={contacto}
                sx={{ color: "white", fontSize: "16px" }}
                onClick={contactRoute}
              >
                {contacto}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 4 }}>
          <Toolbar />
          <Typography></Typography>
        </Box>
      </Box>
    </>
  );
};


export default NavBar