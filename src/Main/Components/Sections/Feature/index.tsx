import { Box, Link, Typography } from "@mui/material";

export function Feature() {
  return (
    <Box
      style={{
        backgroundColor: "#034063",
        paddingLeft: "18%",
        paddingRight: "18%",
        paddingTop: 40,
        paddingBottom: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Typography
          fontWeight="200"
          color="#fff"
          textAlign="start"
          variant="h2"
        >
          Your <span style={{ fontWeight: 700, color: "#00B6E2" }}>Cloud</span>{" "}
          your way
        </Typography>
        <Typography color="#fff" textAlign="start" style={{ marginLeft: 4 }}>
          Customised experience to suit your business needs
        </Typography>
      </Box>
      <Box>
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
  );
}
