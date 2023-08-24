import { useSelector } from 'react-redux';
import {
  getUsername,
  getIsLoggedIn,
  getRefreshing,
  getIsFetching,
  getToken,
  getIsLoading,
  getRegistrationSuccessful
  
} from '../redux/auth/auth-selectors';


export const useAuth = () => {

  return {
    isLoggedIn: useSelector(getIsLoggedIn),
    isRefreshing: useSelector(getRefreshing),
    user: useSelector(getUsername),
    isLoading: useSelector(getIsLoading),
    isFetching: useSelector(getIsFetching),
    token: useSelector(getToken),
    registrationSuccessful: useSelector(getRegistrationSuccessful),
  };
};