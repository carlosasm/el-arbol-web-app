import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/appbar/AppBar';
import Toolbar from '../components/toolbar/ToolBar';
import ArbolLogo from '../assets/images/el-arbol-logo.jpg';

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'left', background: "#206D28" }}>
          <Box sx={{ flex: 0 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="#"
            sx={{ fontSize: 24 }}
          >
            <Box
                component="img"
                src={ArbolLogo}
                alt="suitcase"
                sx={{ height: 80}}
              />
          </Link>
          {/**
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-in/"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/premium-themes/onepirate/sign-up/"
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Sign Up'}
            </Link>
          </Box>
          */}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;