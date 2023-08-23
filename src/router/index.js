import { createWebHistory, createRouter, } from "vue-router";
import Register from '../components/Register.vue';
import Login from '../components/Login.vue'
import Forgot from '../components/Forgot.vue'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import SingleProduct from '../views/SingleProduct.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import Contact from '../views/Contact.vue'
import Allbrands from '../views/Allbrands.vue'
import Category from '../views/Category.vue'
import Profile from '../views/Profile.vue'
const routes = [
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/profile',
        name: 'Profile',
        beforeEnter: cekToken,
        component: Profile
    },
    {
        path: '/product/:slug',
        name: 'SingleProduct',
        component: SingleProduct,
        props: true
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/category',
        name: 'Category',
        component: Category,
        
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    },
    {
        path: '/brands',
        name: 'Allbrands',
        component: Allbrands,
        
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/reset',
        name: 'Reset',
        component: Forgot
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

function cekToken(to, from, next) {
    var isAuthenticated = false;
    if (localStorage.getItem("token")) isAuthenticated = true;
    else isAuthenticated = false;
    if (isAuthenticated) {
        next();
    } else {
        next("/login")
    }
}

export default router;