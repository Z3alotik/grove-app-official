import AppLayout from "./components/AppLayout/AppLayout";
import { AuthProvider } from "./stateManagement/AuthProvider";
import { EventDataProvider } from "./stateManagement/EventDataProvider";
import SnackbarProvider from "./stateManagement/SnackbarProvider";

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
