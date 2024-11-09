import AppLayout from "./components/AppLayout/AppLayout";
import { EventDataProvider } from "./stateManagement/EventDataProvider";

function App() {
  return (
    <EventDataProvider>
      <AppLayout />
    </EventDataProvider>
  );
}

export default App;
