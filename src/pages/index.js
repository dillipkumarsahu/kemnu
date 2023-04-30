import React, { useEffect, useState } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import BaseLayout from "@/views/layouts/BaseLayout";
import MainLayout from "@/views/layouts/MainLayout";
import CategoryList from "@/views/components/Feed/CategoryList";
import FeedCard from "@/views/components/Feed/FeedCard";
import posts from "@/json/posts";

export default function Home() {
  const [active, setActive] = useState("All");
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    if (active === "All") {
      setPostList(posts);
    } else {
      setPostList(posts.filter((item) => item.category === active));
    }
  }, [active]);

  return (
    <BaseLayout title={"Feeds"}>
      <MainLayout>
        <CategoryList active={active} setActive={setActive} />
        <Divider />
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 1, md: 3 }}
          columnSpacing={{ xs: 0, md: 3 }}
          p={2}
        >
          {postList.length > 0 ? (
            postList.map((item, i) => (
              <Grid item xs={12} md={6} key={i}>
                <FeedCard item={item} />
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography textAlign={"center"} m={2} variant="h5">
                No Post Found on {active} !
              </Typography>
            </Grid>
          )}
        </Grid>
      </MainLayout>
    </BaseLayout>
  );
}
