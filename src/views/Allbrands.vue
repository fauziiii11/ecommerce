<template>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
<h1 class="mt-2 text-5xl font-extrabold text-black text-center mt-9">ALL-BRANDS</h1>
<div class="grid grid-cols-4 gap-4 m-9">
    <div v-for="brands in getBrands.data.splice(0,8)" >
  <div>
    <div class="group my-10 flex w-full max-w-xs flex-col overflow-hidden bg-white">
  <a class="relative flex h-80 w-72 overflow-hidden" href="#">
    <img class="absolute top-0 right-0 h-full w-full object-cover" :src="brands.logo"
 alt="product image" />
    
    <div class="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
      <button class="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
        </svg>
      </button>
      <button class="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      </button>
    </div>
  </a>
  <div class="mt-4 pb-5">
    <a href="#">
      <h5 class="text-center tracking-tight text-black-500">{{ brands.name }}</h5>
    </a>
  </div>
</div>
</div>
  </div>
</div>


</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {

    computed: {
        ...mapGetters('brands', ['getBrands']),
    },
    methods: {
        ...mapActions('brands', ['fetchBrands']),
    },
    created() {
        this.fetchBrands();
    }
}
</script>
<style>
  * { 
  font-family: 'Source Sans Pro';
  }
</style>
