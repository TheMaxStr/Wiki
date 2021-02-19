import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TableList from "./components/TableList";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./styles.css";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SearchAppBar />
        <Box m={4}>
          <Container maxWidth="md">
            <TableList />
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}
