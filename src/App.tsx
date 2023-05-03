import { ContactsProvider } from "./contexts/contacts/ContactsContext";
import { UserProvider } from "./contexts/users/UserContext";
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
