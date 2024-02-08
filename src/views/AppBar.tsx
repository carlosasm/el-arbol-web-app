import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/appbar/AppBar";
import Toolbar from "../components/toolbar/ToolBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { GREEN_APPBAR, WHITE } from "../utils/Constants";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ArbolLogoTransparent from "../assets/images/el-arbol-logo-transparent.png";

function AppAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: { xs: "flex", md: "flex-end", background: GREEN_APPBAR },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: { xs: 2 }, display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            <Box
              component="img"
              src={ArbolLogoTransparent}
              alt="suitcase"
              sx={{ height: 100, marginTop: "20px" }}
            />
          </Link>
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="#"
              sx={{ color: "black", marginRight: "30px" }}
            >
              {"Inicio"}
            </Link>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="#english"
              sx={{ color: "black", marginRight: "30px" }}
            >
              {"Aprende Inglés"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="#vet"
              sx={{ color: "black", marginRight: "30px" }}
            >
              {"Veterinaria"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="#contact"
              sx={{ color: "black", marginRight: "30px" }}
            >
              {"Contáctanos"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          BackdropProps: {
            color: WHITE,
          },
        }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <List>
          <ListItem key="inicio" onClick={handleDrawerToggle}>
            <a href="/">
              <ListItemText
                primary="Inicio"
                sx={{
                  color: "black",
                  "& .MuiListItemText-root::before": {
                    content: "none", // Removes bottom border
                  },
                }}
              />
            </a>
          </ListItem>
          <ListItem key="english" onClick={handleDrawerToggle}>
            <a href="#english">
              <ListItemText
                primary="Aprende Inglés"
                sx={{
                  color: "black",
                  "& .MuiListItemText-root::before": {
                    content: "none",
                  },
                }}
              />
            </a>
          </ListItem>
          <ListItem key="vet" onClick={handleDrawerToggle}>
            <a href="#vet">
              <ListItemText
                primary="Veterinaria"
                sx={{
                  color: "black",
                  "& .MuiListItemText-root::before": {
                    content: "none",
                  },
                }}
              />
            </a>
          </ListItem>
          <ListItem key="contact" onClick={handleDrawerToggle}>
            <a href="#contact">
              <ListItemText
                primary="Contáctanos"
                sx={{
                  color: "black",
                  "& .MuiListItemText-root::before": {
                    content: "none",
                  },
                }}
              />
            </a>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default AppAppBar;
