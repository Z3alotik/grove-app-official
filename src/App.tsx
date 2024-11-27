import AppLayout from "./components/AppLayout/AppLayout";
import { AuthProvider } from "./stateManagement/AuthState/AuthProvider";
import { EventDataProvider } from "./stateManagement/EventState/EventDataProvider";
import SnackbarProvider from "./stateManagement/SnackbarState/SnackbarProvider";

function App() {
  return (
    <SnackbarProvider>
      <AuthProvider>
        <EventDataProvider>
          <AppLayout />
        </EventDataProvider>
      </AuthProvider>
    </SnackbarProvider>
  );
}

export default App;
