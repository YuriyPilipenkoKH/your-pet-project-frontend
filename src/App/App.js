import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { Container } from '../components/Container/Container';
import RegisterForm from '../components/Forms/RegisterForm/RegisterForm';
import LoginForm from '../components/Forms/LoginForm/LoginForm';

function App() {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route index path='/register' element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm />} />
                </Route>
            </Routes>
        </Container>
    );
}
export default App;