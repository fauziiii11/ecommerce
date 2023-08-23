<template>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
  <h1 class="mb-12 text-center font-sans text-5xl font-bold pt-20">PRODUCT</h1>
  <div class="bg">
      <div class="grid grid-cols-4 gap-10 m-9">
          <div class="w-full max-w-sm  bg-white border border-black-400 rounded-lg shadow dark:bg-gray-1000 dark:border-gray-700 "
              v-for="product in getAllProduct.data" :key="product.id">
              <router-link :to="{ name: 'SingleProduct', params: { slug: product.slug } }" class="group">
                  <img class="p-8 rounded-t-lg object-contain h-80 w-60 ml-10" src="https://www.specs.id/media/catalog/product/s/p/spe200779-1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=330&width=330&canvas=330:330" alt="product image" style="height: 200px; width: 200px;" />
              </router-link>
              <div class="px-10 pb-5">
                  <a href="">
                      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"> {{ product.name }}
                      </h5>
                  </a>
                  <div class="flex items-center mt-2.5 mb-5">
                      <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor" viewBox="0 0 22 20">
                          <path
                              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                          <path
                              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <span
                          class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{ product.rating }}</span>
                      
                  </div>
                  <div class="flex items-center justify-between">
                      <span class="text-3xl font-bold text-gray-900 dark:text-white"> Rp.{{ product.base_price }}</span>
                      
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<style></style>


<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
      ...mapGetters('product', ['getAllProduct']),
  },
  methods: {
      ...mapActions('product', ['fetchProduct'])
  },
  created() {
      this.fetchProduct();
  },
}
</script>