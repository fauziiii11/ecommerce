import axios from 'axios';

const product = {
    namespaced: true,
    state: {
        dataProduct: [],
        getProductId :[],
        cart:[]
    },
    getters: {
        getAllProduct: (state) => state.dataProduct,
    },
    actions: {
        async fetchProduct({ commit }) {
            try {
                const urlBrand = 'https://ecommerce.olipiskandar.com/api/v1/product/latest/8';
                const productApi = await axios.get(urlBrand);
                commit('SET_PRODUCT', productApi.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async fetchProductid({ commit }, slug) {
            try {
                const urlBrand = `https://ecommerce.olipiskandar.com/api/v1/product/details/${slug}`;
                const productApi = await axios.get(urlBrand);
                commit('SET_PRODUCT_ID', productApi.data['data']);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        async addToCart({ commit }, productId) {
            try {
              const response = await axios.post(
                "https://ecommerce.olipiskandar.com/api/v1/carts/add",
                {
                    "variation_id": productId,
                    "qty":  1,
                    "temp_user_id": null,
                }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
                });
                commit("ADD_TO_CART", response.data)
                console.log(response.data)
            } catch (error) {
              console.error(error);

            }
          },
    },
    mutations: {
        SET_PRODUCT(state, product) {
            state.dataProduct = product;
        },
        SET_PRODUCT_ID(state, product) {
            state.getProductId = product;
        },
        ADD_TO_CART(state, cart) {
            state.cart = cart
        },
    },
};

export default product;