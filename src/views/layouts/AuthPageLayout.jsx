/* eslint-disable @next/next/no-img-element */
import { Box, Grid, Hidden } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BaseLayout from "./BaseLayout";

const AuthPageLayout = ({ children, title, description }) => {
    const router = useRouter()

    useEffect(() => {
        if (localStorage.getItem('loginSts'))
            router.push('/');
    });

    return (
        <BaseLayout title={title} description={description}>
            <Grid container>
                <Hidden smDown>
                    <Grid
                        item
                        xs={12} sm={6}
                        bgcolor="#F7E2FF"
                        height={'100vh'}
                        display='flex'
                        justifyContent='center'
                        overflow='hidden'
                    >
                        <img src="./auth/login-aside.png" style={{ height: '100vh' }} alt="login image" />
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={6} height={'100vh'} px={{ xs: 5, sm: 5, md: 10, lg: 18 }} display="flex" alignItems='center'>
                    <Box sx={{ width: "100%" }}>
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </BaseLayout>
    )
};
export default AuthPageLayout;