import { ContactsProvider } from "./contexts/ContactsContext";
import { UserProvider } from "./contexts/UserContext";
import Routes from "./routes";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <ContactsProvider>
        <UserProvider>
          <Routes />
        </UserProvider>
      </ContactsProvider>
    </>
  );
}

export default App;
