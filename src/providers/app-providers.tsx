import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    mode: "dark",
  },
})

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default AppProviders
