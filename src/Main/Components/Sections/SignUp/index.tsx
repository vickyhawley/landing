import { Box, Button, TextField, Typography } from "@mui/material";
import "./style.css";

export function SignUp() {
  return (
    <Box id="signup" className="container-signup">
      <Box>
        <Typography color={"white"} style={{ fontSize: 40 }}>
          Get Early Access.
        </Typography>
        <Typography color={"white"} style={{ fontSize: 40 }}>
          Sign up today.
        </Typography>
      </Box>
      <Box className="input-container-signup">
        <TextField
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            marginTop: 10,
          }}
          type="email"
          name="email"
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
          onSubmit={() => "mailto:v.l.hawley@hotmail.com"}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}
