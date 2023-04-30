/* eslint-disable @next/next/no-img-element */
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import menu from '@/json/menu'
import Link from "next/link";
import { useRouter } from "next/router";


const SideNavBar = () => {
    const router = useRouter()

    return (
        <Box
            position='fixed'
            top={0}
            left={0}
            bgcolor='#FFFFFF'
            sx={{ width: '90px', height: '100vh' }}
            display='flex'
            flexDirection={'column'}
            justifyContent='space-between'
        >
            <Box>
                <Box display={'flex'} alignItems="center" justifyContent={'center'} py={5}>
                    <Link href='/'>
                        <img src="./logo.svg" alt="logo" />
                    </Link>
                </Box>
                <Stack spacing={2} direction={'column'} alignItems='center'>
                    {
                        menu.map((e) => (
                            <Link href={e.url} key={e.id}>
                                <Tooltip title={e.title}>
                                    <IconButton>
                                        <img src={`./icons/menu/${e.url === router.pathname ? e.icon + `-active` : e.icon}.svg`} alt={e.title} width={30} />
                                    </IconButton>
                                </Tooltip>
                            </Link>
                        ))
                    }
                </Stack>
            </Box>
            <Box display={'flex'} alignItems="center" justifyContent={'center'} py={5}>
                <Tooltip title={'Logout'}>
                    <IconButton
                        onClick={() => {
                            localStorage.removeItem('loginSts');
                            router.push('/login');
                        }}
                    >
                        <img src="./icons/menu/logout.svg" alt="logo" />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    )
};
export default SideNavBar;