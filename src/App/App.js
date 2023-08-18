import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { SharedLayout } from "../components/SharedLayout/SharedLayout";
import {Container} from "../components/Container/Container"


function App() {
  return (
    <Container>
      
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" />
          <Route path="/login" />
          
        </Route>
      </Routes>
    </Container>
  );
}
export default App;