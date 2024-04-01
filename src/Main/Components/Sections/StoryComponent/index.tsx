import { Box, Link, Typography } from "@mui/material";

export interface IStoryComponentProps {
  image: string;
  title: string;
  description: string;
  direction?: "right" | "left";
}

export function StoryComponent({
  title,
  description,
  image,
  direction = "left",
}: IStoryComponentProps) {
  return (
    <Box
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
      }}
    >
      {direction === "left" ? (
        <Box
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              variant="h3"
            >
              {title}
            </Typography>
            <Typography
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              variant="body1"
            >
              {description}
            </Typography>
            <Link
              style={{
                backgroundColor: "orange",
                padding: 12,
                borderRadius: 10,
              }}
            >
              Sign up
            </Link>
          </Box>
          <Box
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <img src={image} height="150px" width="220px" alt="story image" />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box style={{ flex: 1, justifyContent: "center" }}>
            <Box>
              <img src={image} height="150px" width="220px" alt="story image" />
            </Box>
          </Box>{" "}
          <Box
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Typography
              justifyContent={"flex-start"}
              alignItems={"flex-end"}
              variant="h3"
            >
              {title}
            </Typography>
            <Typography
              justifyContent={"flex-start"}
              alignItems={"flex-end"}
              variant="body1"
            >
              {description}
            </Typography>
            <Link
              style={{
                backgroundColor: "orange",
                padding: 12,
                borderRadius: 10,
              }}
            >
              Sign up
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
}
