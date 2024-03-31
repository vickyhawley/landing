import { Box, Link } from "@mui/material";

export function Footer() {
  return (
    <Box flexDirection={"column"} style={{ flex: 1, backgroundColor: "black" }}>
      <Link>Link one</Link>
      <Link>Link two</Link>
      <Link>Link three</Link>
    </Box>
  );
}
