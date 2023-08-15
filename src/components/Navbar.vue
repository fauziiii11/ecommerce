<template>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
    <header class="navbar-head text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
  <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
    <span class="mr-2 w-8">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfnCTYark6YpXBXpHKBfyycxml1TGqEJql0g&usqp=CAU" alt="" />
    </span>
    Fauzi
  </a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-5 right-5 cursor-pointer lg:hidden" for="navbar-open">
    <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </label>
  <nav aria-label="Header Navigation" class="navbar peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row" >
    <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
        <RouterLink to="/">
      <li class="lg:mr-12"><a class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Home</a></li>
    </RouterLink>
    <RouterLink to="/product">
        <li class="lg:mr-12"><a class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Product</a></li>
    </RouterLink>
        <li class="lg:mr-12"><a class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#"></a></li>
      <li class="lg:mr-12"><a class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#"></a></li>
    </ul>
    <hr class="mt-4 w-full lg:hidden" />
    <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0" v-if="isAuthenticated">
      <button @click="logout"><font color="red">Logout</font></button>
    </div>
    <div class="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0" v-else>
      <a href="#" title="" class="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"><router-link to="/login"><font color= "blue">Log In</font></router-link></a>
      <a href="#" title="" class="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"><router-link to="/register"><font color= "gray">Register</font></router-link></a>
    </div>
  </nav>
</header>

</template>

<script>
import { RouterLink } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('auth', ['isAuthenticated']),
    },
    methods: {
        ...mapActions('auth', ['logout']),
    },
    components: { RouterLink }
};
</script>
