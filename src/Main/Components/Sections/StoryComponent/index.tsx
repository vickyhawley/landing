import { Box, Link, Typography } from "@mui/material";

export interface IStoryComponentProps {
  image: string;
  title: string;
  description: string;
}

export function StoryComponent({
  title,
  description,
  image,
}: IStoryComponentProps) {
  return (
    <Box style={{ flex: 1, flexDirection: "row" }}>
      <Box style={{ flex: 1 }}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <Link
          style={{ backgroundColor: "orange", padding: 12, borderRadius: 10 }}
        >
          Sign up
        </Link>
      </Box>
      <Box style={{ flex: 1 }}>
        <Box style={{ backgroundColor: "blue", height: 200, width: 150 }}>
          <img src={image} height="200px" width="150px" alt="story image" />
        </Box>
      </Box>
    </Box>
  );
}
