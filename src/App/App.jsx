import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { SharedLayout } from '../components/SharedLayout/SharedLayout';
import { Container } from '../components/Container/Container';
import AddPetPage from '../pages/AddPetPage';
import { NewsPage } from '../pages/News';
import UserPage from '../pages/UserPage';
import { TestPage } from '../pages/TestPage/TestPage';

import NoticesPage from '../pages/NoticesPage';
import { SponsorsPage } from '../pages/Sponsors';
import { NotfoundPage } from '../pages/NotFound';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

import PrivateRoute from 'routes/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';
import PublicRoute from 'routes/PublicRoute';
import { useAll } from 'hooks/useAll';

const App = () => {
    const dispatch = useDispatch();
    const {theme, lang} = useAll()

    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-lang', lang);

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);

    return (
        <Container>
            <Routes>
                <Route path="/" element={<SharedLayout />}>

                    <Route index element={<Home />} />

                    <Route  path="/register"
                        element={ <PublicRoute
                        redirectTo="/profile"
                        component={<RegisterPage />} /> } />

                    <Route path="/login"  
                            element={ <PublicRoute
                            redirectTo="/profile"
                            component={<LoginPage />} /> } />

                    <Route path="/add-pet"
                            element={ <PrivateRoute
                            redirectTo="/login"
                            component={<AddPetPage />}/> } />

                    <Route
                        path="/profile" 
                            element={ <PrivateRoute
                            redirectTo="/login"
                            component={<UserPage />} />  } />

                    <Route path="/notices" element={<NoticesPage />} />

                    <Route path="/news" element={<NewsPage />} />

                    <Route path="/friends" element={<SponsorsPage />} />

                    <Route path="*" element={<NotfoundPage />} />

                    <Route path="/test" element={<TestPage />} />
                    
                </Route>
            </Routes>
        </Container>
    );
};
export default App;
