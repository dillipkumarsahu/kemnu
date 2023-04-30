
import { Chip, Stack, Typography } from "@mui/material";
const categoryList = ['All', 'Gossip', 'Tech', 'Politics', 'Sports', 'Health', 'Movie']

const CategoryList = ({ active, setActive }) => {

    return (
        <Stack
            spacing={{ xs: 1, sm: 1 }}
            direction="row"
            flexWrap="nowrap"
            overflow={'auto'}
            px={3}
            py={2}
        >
            {categoryList.map((category, i) => (
                <Chip
                    key={i}
                    label={category}
                    sx={{ px: 1 }}
                    onClick={() => setActive(category)}
                    color={active === category ? "primary" : "info"}
                />
            ))}
        </Stack>
    )
}
export default CategoryList;