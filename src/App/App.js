import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { Container } from '../components/Container/Container';
import RegisterForm from '../components/Forms/RegisterForm/RegisterForm';
import LoginForm from '../components/Forms/LoginForm/LoginForm';
import { NewsPage } from '../pages/Nwes';
import { SponsorsPage } from "../pages/Sponsors";
import UserPage from '../pages/UserPage';
import { NotfoundPage } from '../pages/NotFound';


// import { Notfound } from '../components/Notfound/NotfoundCont.styled';







function App() {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/find pet" element={<NotfoundPage />} />
          <Route path="/our friends" element={<SponsorsPage />} />
          <Route path="/profile" element={<UserPage />} />
          <Route path="*" element={<NotfoundPage />} />
          
        </Route>
      </Routes>
      
      
      
    </Container>
  );

}
export default App;

//=====================================
// function App() {

//   return (
//     <Container>
    
      
//       <FindPetCard/>
      
//     </Container>
//   );

// }
// export default App;