import { Box, Button, TextField, Typography } from "@mui/material";

export function SignUp() {
  return (
    <Box
      style={{
        paddingLeft: "20%",
        paddingRight: "20%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#00B6E2",
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <Box>
        <Typography color={"white"} style={{ fontSize: 40 }}>
          Get Early Access.
        </Typography>
        <Typography color={"white"} style={{ fontSize: 40 }}>
          Sign up today.
        </Typography>
      </Box>
      <Box style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <TextField
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            marginTop: 10,
          }}
        />
        <Button
          style={{
            backgroundColor: "#FF8200",
            borderRadius: 10,
            height: 50,
            fontWeight: "700",
            fontSize: 24,
            marginTop: 10,
            color: "white",
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}
