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
        paddingLeft: "20%",
        paddingRight: "20%",
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
              textAlign={"start"}
              justifyContent={"flex-start"}
              color={"#00B6E2"}
              alignItems={"flex-start"}
              variant="h3"
              fontWeight={"bold"}
              style={{ marginBottom: 10 }}
            >
              {title}
            </Typography>
            <Typography
              display={"flex"}
              textAlign={"start"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              variant="body2"
              style={{ marginBottom: 24, width: "60%" }}
            >
              {description}
            </Typography>
            <Link
              style={{
                fontWeight: "bold",
                paddingLeft: 18,
                paddingRight: 18,
                paddingTop: 16,
                paddingBottom: 16,
                textDecoration: "none",
                backgroundColor: "#FF8200",
                color: "#000",
                fontSize: 20,
                borderRadius: 15,
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
              <img src={image} height="300px" alt="story image" />
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
              <img src={image} height="300px" alt="story image" />
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
              textAlign={"end"}
              justifyContent={"flex-start"}
              alignItems={"flex-end"}
              fontWeight={700}
              variant="h3"
              color={"#00B6E2"}
              style={{ marginBottom: 20 }}
            >
              {title}
            </Typography>
            <Typography
              textAlign={"end"}
              justifyContent={"flex-start"}
              alignItems={"flex-end"}
              variant="body2"
              style={{ marginBottom: 20, width: "60%" }}
            >
              {description}
            </Typography>
            <Link
              style={{
                fontWeight: "bold",
                paddingLeft: 18,
                paddingRight: 18,
                paddingTop: 16,
                paddingBottom: 16,
                textDecoration: "none",
                backgroundColor: "#FF8200",
                color: "#000",
                fontSize: 20,
                borderRadius: 15,
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
