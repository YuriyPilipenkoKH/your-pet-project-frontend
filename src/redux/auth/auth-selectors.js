const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;
 const getRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getRefreshing,
};
export default authSelectors;