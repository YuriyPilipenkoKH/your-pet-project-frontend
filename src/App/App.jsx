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
import PublickRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';

const App = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />

                    {/* <Route path="/register" element={<RegisterPage />} /> */}
                    <Route
                        path="/register"
                        element={
                            <PublickRoute
                                redirectTo="/notices"
                                component={<RegisterPage />}
                            />
                        }
                    />

                    {/* <Route path="/login" element={<LoginPage />} /> */}
                    <Route
                        path="/login"
                        element={
                            <PublickRoute
                                redirectTo="/notices"
                                component={<LoginPage />}
                            />
                        }
                    />

                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/add-pet" element={<AddPetPage />} />

                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/profile" element={<UserPage />} />
                    <Route path="/friends" element={<SponsorsPage />} />
                    <Route path="*" element={<NotfoundPage />} />

                    <Route path="/login" element={<PrivateRoute redirectTo="/notices" component={<LoginPage />}/>}/>
                       
                    <Route path="/notices" element={<NoticesPage />} />
                    {/* <Route index element={<Navigate to="sell" replace />} /> */}
                    {/* <Route path=":categoryName" element={<NoticesCategoriesList />} /> */}
                    <Route />
                    <Route path="/test" element={<TestPage />} />
                </Route>
            </Routes>
        </Container>
    );
};
export default App;
