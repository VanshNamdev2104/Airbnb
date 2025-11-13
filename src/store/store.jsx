import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import searchReducer from "../features/searchSlice";
import staysReducer from "../features/staysSlice";
import experienceReducer from "../features/experienceSlice";

export default configureStore({
    reducer:{
        auth: authReducer,
        search: searchReducer,
        stays: staysReducer,
        experience: experienceReducer,
    }
})
