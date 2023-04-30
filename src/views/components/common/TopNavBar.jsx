/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { Box, Hidden, IconButton, Typography } from '@mui/material';
import { appConfig } from "@/apps/config/app.config";
import MenuIcon from '@mui/icons-material/Menu';

const TopNavBar = () => {
    return (
        <Box py={{ xs: 2, sm: 4 }} display='flex' alignItems={'center'}>
            <Hidden smUp>
                <IconButton>
                    <MenuIcon sx={{ fontSize: "37px" }} />
                </IconButton>
                <img src='./logo.png' alt='logo' width={34} />
            </Hidden>
            <Box ml={{ xs: 1, sm: 0 }}>
                <Typography variant="h4" fontSize={{ xs: 25, sm: 36 }} fontWeight="bold" color="#4B1C7C">
                    {appConfig.appName}
                </Typography>
                <Typography color={'#000'} fontSize={{ xs: 12, sm: 15 }}>Welcome Back, <b>Bijay</b></Typography>
            </Box>
        </Box>
    );
}
export default TopNavBar;