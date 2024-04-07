import { Box, Button, TextField, Typography } from "@mui/material";

export function SignUp() {
  return (
    <Box
      style={{
        paddingLeft: "20%",
        paddingRight: "20%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#00B6E2",
        paddingTop: 30,
        paddingBottom: 30,
      }}
    >
      <Typography color={"white"} style={{ fontSize: 40 }}>
        Get Early Access.
      </Typography>
      <Typography color={"white"} style={{ fontSize: 40 }}>
        Sign up today.
      </Typography>
      <TextField
        style={{
          width: "60%",
          backgroundColor: "white",
          borderRadius: 10,
          marginTop: 10,
        }}
      />
      <Button
        style={{
          width: "60%",
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
  );
}
