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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';
import PublicRoute from 'routes/PublicRoute';
import { useAll } from 'hooks/useAll';
import { getRefreshing } from 'redux/auth/auth-selectors';
import { DotLoader } from 'react-spinners';
import { getPetsLoading } from 'redux/pets/petsSelectors';
import { getLoadingNotices } from 'redux/notices/notices-selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const dispatch = useDispatch();
    const { theme, language } = useAll();
    const regreshinggAuth = useSelector(getRefreshing);
    const loadingPets = useSelector(getPetsLoading);
    const loadingNotice = useSelector(getLoadingNotices);
    console.log(loadingNotice);
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-lang', language);

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);

    return (
        <Container>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {regreshinggAuth || loadingPets ? (
                <DotLoader
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        zIndex: '999',
                    }}
                    color="var(--blue)"
                    cssOverride={{}}
                    loading
                    size={70}
                />
            ) : (
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />} />

                        <Route
                            path="/register"
                            element={
                                <PublicRoute
                                    redirectTo="/profile"
                                    component={<RegisterPage />}
                                />
                            }
                        />

                        <Route
                            path="/login"
                            element={
                                <PublicRoute
                                    redirectTo="/profile"
                                    component={<LoginPage />}
                                />
                            }
                        />

                        <Route
                            path="/add-pet"
                            element={
                                <PrivateRoute
                                    redirectTo="/login"
                                    component={<AddPetPage />}
                                />
                            }
                        />

                        <Route
                            path="/profile"
                            element={
                                <PrivateRoute
                                    redirectTo="/login"
                                    component={<UserPage />}
                                />
                            }
                        />

                        <Route path="/notices" element={<NoticesPage />} />

                        <Route path="/news" element={<NewsPage />} />

                        <Route path="/friends" element={<SponsorsPage />} />

                        <Route path="*" element={<NotfoundPage />} />

                        <Route path="/test" element={<TestPage />} />
                    </Route>
                </Routes>
            )}
        </Container>
    );
};
export default App;
