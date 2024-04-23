import { Box, Link, Typography } from "@mui/material";
import "./style.css";

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
    <Box id="budgeting" className={"container-story"}>
      {direction === "left" ? (
        <Box className={"inner-container-layout-left"}>
          <Box className={"text-container-story-left"}>
            <Typography
              className="title-right"
              color={"#00B6E2"}
              variant="h2"
              fontWeight={"bold"}
              style={{ marginBottom: 10 }}
            >
              {title}
            </Typography>
            <Typography
              className="body-right"
              display={"flex"}
              variant="body2"
              style={{ marginBottom: 24, width: "60%" }}
            >
              {description}
            </Typography>
            <Link className={"link-story"}>Sign up</Link>
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
              <img
                src={image}
                className="image-story-left"
                alt="colourful vector explaining the title of the component"
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box className={"inner-container-layout-right"}>
          <Box style={{ flex: 1, justifyContent: "center" }}>
            <Box>
              <img
                src={image}
                className="image-story-right"
                alt="colourful vector explaining the title of the component"
              />
            </Box>
          </Box>{" "}
          <Box className={"text-container-story-right "}>
            <Typography
              className="title-left"
              fontWeight={700}
              variant="h2"
              color={"#00B6E2"}
              style={{ marginBottom: 20 }}
            >
              {title}
            </Typography>
            <Typography
              className="body-right"
              variant="body2"
              style={{ marginBottom: 20, width: "60%" }}
            >
              {description}
            </Typography>
            <Link className={"link-story"}>Sign up</Link>
          </Box>
        </Box>
      )}
    </Box>
  );
}
