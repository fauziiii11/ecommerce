import axios from 'axios';

const product = {
    namespaced: true,
    state: {
        dataProduct: [],
        getProductId :[]
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
    },
    mutations: {
        SET_PRODUCT(state, product) {
            state.dataProduct = product;
        },
        SET_PRODUCT_ID(state, product) {
            state.getProductId = product;
        },
    },
};

export default product;