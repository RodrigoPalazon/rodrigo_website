import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

function Navbar() {
  return (
    <AppBar>
        <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>Test Test</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;