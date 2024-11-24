import AppLayout from "./components/AppLayout/AppLayout";
import { EventDataProvider } from "./stateManagement/EventDataProvider";
import SnackbarProvider from "./stateManagement/SnackbarProvider";

function App() {
  return (
    <SnackbarProvider>
      <EventDataProvider>
        <AppLayout />
      </EventDataProvider>
    </SnackbarProvider>
  );
}

export default App;
