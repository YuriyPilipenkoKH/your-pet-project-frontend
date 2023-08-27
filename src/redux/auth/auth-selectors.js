export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;
export const getUserId = state => state.auth.user._id;
export const getRefreshing = state => state.auth.isRefreshing;
export const getToken = state => state.auth.token;
export const getIsLoading = state => state.auth.isLoading;
export const getIsFetching = state => state.auth.isFetching;
export const getRegistrationSuccessful = state => state.auth.registrationSuccessful;
export const getUser = state => state.auth.user;
export const getPets = state => state.auth.pets;

export const authSelectors = {
    getIsLoggedIn,
    getUsername,
    getRefreshing,
    getToken,
    getIsLoading,
    getIsFetching,
    getRegistrationSuccessful,
    getUser,
    getPets,
};
export default authSelectors;
