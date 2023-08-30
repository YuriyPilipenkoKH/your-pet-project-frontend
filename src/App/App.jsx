import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import { Container } from '../components/Container/Container';
import PrivateRoute from 'routes/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';
import PublicRoute from 'routes/PublicRoute';
import { useAll } from 'hooks/useAll';
import { getRefreshing } from 'redux/auth/auth-selectors';
import { DotLoader } from 'react-spinners';
import { getPetsLoading } from 'redux/pets/petsSelectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = lazy(() => import("../pages/Home"));
const AddPetPage = lazy(() => import("../pages/AddPetPage"));
const NewsPage = lazy(() => import("../pages/News"));
const UserPage = lazy(() => import("../pages/UserPage"));
const NoticesPage = lazy(() => import("../pages/NoticesPage"));
const SponsorsPage = lazy(() => import("../pages/Sponsors"));
const NotfoundPage = lazy(() => import("../pages/NotFound"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

const App = () => {
    const dispatch = useDispatch();
    const { theme, language } = useAll();
    const regreshinggAuth = useSelector(getRefreshing);
    const loadingPets = useSelector(getPetsLoading);
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
                    </Route>
                </Routes>
            )}
        </Container>
    );
};
export default App;
