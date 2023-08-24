// import { combineReducers } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import { authReducer } from "./auth";


// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: ["token"],
//   };
  
//   const persistedAuthReducer = persistReducer(persistConfig, authReducer);
  
//   const rootReducer = combineReducers({
//     auth: persistedAuthReducer,
//     notices: noticesReducer,
//     // friends: friendsReducer,
//     // news: newsReducer,
//   });
  
//   export default rootReducer;