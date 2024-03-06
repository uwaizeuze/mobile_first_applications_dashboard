import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/userContext";

import Layout from "./layout/layout";
import UserList from "./pages/userList";
import UserForm from "./pages/userForm";

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <Layout>
            <Routes>
              <Route path="/" element={<UserList />} />
              <Route path="/add" element={<UserForm />} />
              <Route path="/edit/:id" element={<UserForm />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
