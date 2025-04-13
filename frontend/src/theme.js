import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" }
  },
  typography: {
    h1: { fontSize: "2rem", fontWeight: 500 },
    h2: { fontSize: "1.5rem", fontWeight: 500 },
    body1: { fontSize: "1rem" }
  },
  components: {
    MuiAppBar: { defaultProps: { elevation: 2 } },
    MuiCard: { defaultProps: { elevation: 3 } }
  }
});

export default theme;
