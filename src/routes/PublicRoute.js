
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';


const PublickRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    // const { isLoggedIn, token } = useSelector(selectAuth);


  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  
};

export default PublickRoute;