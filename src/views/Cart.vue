<template>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />

    <section class="h-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-center">
      <h1 class="text-2xl font-semibold text-gray-900">Your Cart</h1>
    </div>

    <div class="mx-auto mt-8 max-w-2xl md:mt-12">
      <div class="bg-white shadow">
        <div v-for="cart in getCart" :key="cart.id">
        <div class="px-4 py-6 sm:px-8 sm:py-10">
          <div class="flow-root">
            <ul class="-my-8">
              <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                <div class="shrink-0">
                  <img class="h-24 w-24 max-w-full rounded-lg object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTR0YGzDTlIV4_wTS0ZDFHj3FDaWwMOtyuwYZK6Pdvr3dNy41h4GHSbDLnkmyuIZf3IvY&usqp=CAU" alt="" />
                </div>

                <div class="relative flex flex-1 flex-col justify-between">
                  <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div class="pr-8 sm:pr-5">
                      <p class="text-base font-semibold text-gray-900">{{ cart.name }}</p>
                      <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                    </div>

                    <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                      <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">Rp.{{ cart.regular_price }}</p>

                      <div class="flex items-center border-gray-100">
                                <!-- Counter Item -->
                                <button  @click="changeQty({ cartId: cart.cart_id, typeQty: 'minus'})"
                                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-black hover:text-yellow-50">
                                    - </button>
                                <span class="mr-2 ml-2">
                                    {{ cart.qty }}
                                </span>
                                <button  @click="changeQty({ cartId: cart.cart_id, typeQty: 'plus'})"
                                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-black hover:text-yellow-50">
                                    + </button>
                                    
                            </div>
                    </div>
                  </div>

                  <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                    <button type="button" @click="removeItem(cart.cart_id)"
                     class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
                      </svg>
                    </button>
                  
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

          <div class="mt-6 border-t border-b py-2 m-9">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-400">Subtotal</p>
              <p class="text-lg font-semibold text-gray-900">Rp.{{ totalHarga()  }}</p>
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-400">Shipping</p>
              <p class="text-lg font-semibold text-gray-900">Rp. 0

              </p>
            </div>
          </div>
          <div class="mt-6 flex items-center justify-between m-9">
            <p class="text-sm font-medium text-gray-900">Total</p>
            <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">Rupiah</span>{{ totalHarga() }}</p>
          </div>

          <div class="mt-6 text-center">
            <router-link to="/checkout">
            <button type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
              Checkout
              <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
        </router-link>
          </div>
        
      </div>
    </div>
  
  </div>
</section>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
  ...mapGetters('cart', ['getCart']),
},
methods: {
  ...mapActions('cart', ['fetchCart']),
  ...mapActions('product', ['fectchProduct']),
  totalHarga() {
    this.total = this.getCart.reduce((acc, product) => {
      return acc + parseFloat(product.regular_price * product.qty);
    }, 0);
    return this.total.toFixed(2);
  },
  // change
  changeQty(cartId, typeQty) {
    this.$store.dispatch('cart/changeQuantityCart', cartId,typeQty);
  },

  // remove
  removeItem(cartId) {
    this.$store.dispatch('cart/removeFromCart', cartId);
  }
},
beforeMount() {
  this.fectchProduct();
},
mounted() {
  this.fetchCart();
}
}

</script>