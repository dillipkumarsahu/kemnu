/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Box, Hidden } from "@mui/material";
import { useEffect } from "react";
import SideNavBar from "../components/common/SideNavBar";
import TopNavBar from "../components/common/TopNavBar";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
    const router = useRouter()

    useEffect(() => {
        if (!localStorage.getItem('loginSts'))
            router.push('/login');
    })

    return (
        <Box bgcolor={"#F2F2F2"} minHeight='100vh'>
            <Box pl={{ xs: 1, sm: 15 }} pr={{ xs: 1, sm: 4 }}>
                <TopNavBar />
                <Hidden smDown>
                    <SideNavBar />
                </Hidden>
                <Box bgcolor={'#FFFFFF'} borderRadius={1}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}
export default MainLayout;