import { ThemeProvider } from "@mui/material/styles";
import AppLayout from "./components/AppLayout/AppLayout";
import { AuthProvider } from "./stateManagement/AuthState/AuthProvider";
import { EventDataProvider } from "./stateManagement/EventState/EventDataProvider";
import SnackbarProvider from "./stateManagement/SnackbarState/SnackbarProvider";
import { GA_Theme } from "./common/theme";

function App() {
  return (
    <SnackbarProvider>
      <AuthProvider>
        <EventDataProvider>
          <ThemeProvider theme={GA_Theme}>
            <AppLayout />
          </ThemeProvider>
        </EventDataProvider>
      </AuthProvider>
    </SnackbarProvider>
  );
}

export default App;
