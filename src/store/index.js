import { createStore } from "vuex";
import auth from "./modules/auth";
import brands  from "./modules/brands";
import product from "./modules/product";
import category from "./modules/category";
import user from "./modules/user";


const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        brands,
        product,
        category,
        user
    }
});

export default store;