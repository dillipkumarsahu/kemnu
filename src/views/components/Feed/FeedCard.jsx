/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { red } from '@mui/material/colors';
import {
    Box,
    Typography,
    IconButton,
    Avatar,
    CardActions,
    CardContent,
    CardMedia,
    CardHeader,
    Card
} from '@mui/material';

// @import icons
import MoreVertIcon from '@mui/icons-material/MoreVert';


const FeedCard = ({ item }) => {

    const Title = () => {
        return (
            <Box display={'flex'} alignItems='center'>
                <Typography fontWeight={'bold'} color='#000' mr={1}>{item?.postedBy}</Typography>
                <img src='./icons/feed/angle-right-circle.svg' alt='vote-up' width={20} height={20} />
                <Typography fontWeight={'bold'} color='primary' ml={1}>{item?.category}</Typography>
            </Box>
        )
    }

    return (
        <Card sx={{ width: '100%' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} src={item?.userDp} aria-label="recipe">
                        {item?.postedBy?.charAt(0)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={<Title />}
                subheader={item?.postedAt}
            />
            <CardMedia
                component="img"
                height="194"
                image={item?.image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {item?.caption}
                </Typography>
            </CardContent>
            <CardActions
                sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: '#F2F2F2' }}
            >
                <Box display={'flex'} alignItems='center' pl={{ xs: 0.2, sm: 2 }}>
                    <IconButton>
                        <img src={`./icons/feed/vote-up${item?.voteType === `upvote` ? `-active` : ``}.svg`} alt='vote-up' width={25} height={22} />
                    </IconButton>
                    <Typography fontWeight={'bold'} color={item?.voteType === "upvote" && "#4BA441"} mx={{ xs: 0.2, sm: 1 }}>{item?.vote}</Typography>
                    <IconButton>
                        <img src={`./icons/feed/vote-down${item?.voteType === `downvote` ? `-active` : ``}.svg`} alt='vote-up' width={25} height={22} />
                    </IconButton>
                    <Box mx={{ xs: 0, sm: 2 }} />
                    <IconButton>
                        <img src='./icons/feed/comment.svg' alt='vote-up' width={25} height={22} />
                    </IconButton>
                    <Typography fontWeight={'bold'}>{item?.comments}</Typography>
                </Box>
                <Box display={'flex'} alignItems='center' pr={{ xs: 1, sm: 2 }}>
                    <IconButton>
                        <img src='./icons/feed/share.svg' alt='vote-up' width={25} height={22} />
                    </IconButton>
                    <Typography fontWeight={'bold'}>{item?.share}</Typography>
                </Box>
            </CardActions>
        </Card>
    );
}
export default FeedCard;