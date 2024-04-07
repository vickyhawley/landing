import Carousel from "react-material-ui-carousel";
import { Box, Typography } from "@mui/material";
import stepOne from "../../../Images/1. Step 1_D.png";
import stepTwo from "../../../Images/2a. Step 2_Grid_D.png";
import stepThree from "../../../Images/3. Step 3_D.png";
import storyDash from "../../../Images/4a. Dashboard_Grid_D.png";

export function StoryCarousel() {
  const images = [
    { name: "Dashboard", url: storyDash, description: "a dashboard" },
    {
      name: "Filters",
      url: stepOne,
      description: "The first step is...",
    },
    {
      name: "Approvals",
      url: stepTwo,
      description: "The second step is...",
    },
    {
      name: "Step Three",
      url: stepThree,
      description: "The third step is...",
    },
  ];

  return (
    <Box style={{ paddingLeft: "15%", paddingRight: "15%", marginBottom: 60 }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 60,
          marginBottom: 36,
        }}
      >
        <Typography style={{ width: "60%" }} variant={"h4"} fontWeight={600}>
          Everything you need to{" "}
          <span style={{ color: "#00B6E2" }}>organise</span> AWS projects
        </Typography>
        <Typography variant={"h5"} style={{ marginTop: 8 }} fontWeight={100}>
          Explore the dashboard
        </Typography>
      </Box>
      <Carousel
        indicators={false}
        navButtonsAlwaysVisible
        autoPlay={true}
        interval={3000}
        height={500}
      >
        {images.map((item, i) => (
          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              style={{ color: "#FF8200", marginBottom: 24 }}
            >
              {item.name}
            </Typography>
            <Typography style={{ marginBottom: 24 }}>
              {item.description}
            </Typography>
            <img height={450} src={item.url} alt={item.description} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
