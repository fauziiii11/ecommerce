<template>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
  <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
      <a href="#" class="text-2xl font-bold text-gray-800">Fauzi Store</a>
      <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div class="relative">
              <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                  <li class="flex items-center space-x-3 text-left sm:space-x-4">
                      <a class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                          href="#"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                              stroke="currentColor" stroke-width="2">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                          </svg></a>
                      <span class="font-semibold text-gray-900">Shop</span>
                  </li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <li class="flex items-center space-x-3 text-left sm:space-x-4">
                      <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                          href="#">2</a>
                      <span class="font-semibold text-gray-900">Shipping</span>
                  </li>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  <li class="flex items-center space-x-3 text-left sm:space-x-4">
                      <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                          href="#">3</a>
                      <span class="font-semibold text-gray-500">Payment</span>
                  </li>
              </ul>
          </div>
      </div>
  </div>
  <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
      <div class="px-4 pt-8">
          <p class="text-xl font-medium">Your Order</p>
          
          <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              <div v-for="product in getCart" :key="product.cart_id"
                  class="flex flex-col rounded-lg bg-white sm:flex-row">
                  <img class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTR0YGzDTlIV4_wTS0ZDFHj3FDaWwMOtyuwYZK6Pdvr3dNy41h4GHSbDLnkmyuIZf3IvY&usqp=CAU"
                      alt="" />
                  <div class="flex w-full flex-col px-4 py-4">
                      <span class="font-semibold">{{ product.name }}</span>
                      <span class="float-right text-gray-400">{{ product.qty }} pcs</span>
                      <p class="text-lg font-bold">Rp.{{ product.regular_price * product.qty }}</p>
                  </div>
              </div>
          </div>

          <p class="mt-8 text-lg font-medium">Delivery Option</p>
          <form class="mt-5 grid gap-6">
              <div class="relative">
                  <input class="peer hidden" id="radio_1" type="radio" value="standard" v-model="deliveryType" />
                  <span
                      class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label
                      class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      for="radio_1">
                      <img class="w-14 object-contain" src="data:image/png;base64,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"
                          alt="" />
                      <div class="ml-5">
                          <span class="mt-2 font-semibold">JNE (Jiga Nu Enya) - Standard</span>
                          <p class="text-slate-500 text-sm leading-6">Delivery: 2-100 Days</p>
                      </div>
                  </label>
              </div>
              <div class="relative">
                  <input class="peer hidden" id="radio_2" type="radio" value="express" v-model="deliveryType" />
                  <span
                      class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label
                      class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      for="radio_2">
                      <img class="w-14 object-contain" src="data:image/jpeg;base64,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"
                          alt="" />
                      <div class="ml-5">
                          <span class="mt-2 font-semibold">SICEPAT Buroq - Express</span>
                          <p class="text-slate-500 text-sm leading-6">Delivery: 1-2 second</p>
                      </div>
                  </label>
              </div>
          </form>

          <p class="mt-8 text-lg font-medium">Shipping Methods</p>
          <form class="mt-5 grid gap-6">
              <div class="relative">
                  <input class="peer hidden" id="radio_3" type="radio" value="cash_on_delivery" v-model="paymentType" />
                  <span
                      class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label
                      class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      for="radio_3">
                      <img class="w-14 object-contain"
                          src="data:image/png;base64,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"
                          alt="" />
                      <div class="ml-5 mt-4">
                          <span class="mt-2 font-semibold">Cash Or Duel</span>
                          <!-- <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p> -->
                      </div>
                  </label>
              </div>
              <div class="relative">
                  <input class="peer hidden" id="radio_4" type="radio" value="cash_on_delivery" v-model="deliveryType" />
                  <span
                      class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                  <label
                      class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                      for="radio_4">
                      <img class="w-14 object-contain"
                          src="https://png.pngtree.com/png-clipart/20190904/original/pngtree-orange-wallet-icon-png-image_4462385.jpg"
                          alt="" />
                      <div class="ml-5 mt-4">
                          <span class="mt-16 font-semibold leading-6">Payment Wallet</span>
                          <!-- <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p> -->
                      </div>
                  </label>
              </div>
          </form>
      </div>
      <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p class="text-xl font-medium">Payment Details</p>
          <p class="text-gray-400">Complete your order by providing your payment details.</p>
          <div class="">
              <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
              <div class="relative">
                  <input type="text" id="email" name="email"
                      class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="your.email@gmail.com" />
                  <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                  </div>
              </div>
              <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
              <div class="relative">
                  <input type="text" id="card-holder" name="card-holder"
                      class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Your full name here" />
                  <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                      </svg>
                  </div>
              </div>
              <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Card Details</label>
              <div class="flex">
                  <div class="relative w-7/12 flex-shrink-0">
                      <input type="text" id="card-no" name="card-no"
                          class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="xxxx-xxxx-xxxx-xxxx" />
                      <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                          <svg class="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                              fill="currentColor" viewBox="0 0 16 16">
                              <path
                                  d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                              <path
                                  d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                          </svg>
                      </div>
                  </div>
                  <input type="text" name="credit-expiry"
                      class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="MM/YY" />
                  <input type="text" name="credit-cvc"
                      class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="CVC" />
              </div>
              <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
              <div class="flex flex-col sm:flex-row">
                  <div class="relative flex-shrink-0 sm:w-7/12">
                      <input type="text" id="billing-address" name="billing-address"
                          class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Street Address" />
                      <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                          <img class="h-4 w-4 object-contain"
                              src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
                      </div>
                  </div>
                  <select type="text" name="billing-state"
                      class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                      <option value="State">State</option>
                  </select>
                  <input type="text" name="billing-zip"
                      class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="ZIP" />
              </div>

              <!-- Total -->
              <div class="mt-6 border-t border-b py-2">
                  <div class="flex items-center justify-between">
                      <p class="text-sm font-medium text-gray-900">Subtotal</p>
                      <p class="font-semibold text-gray-900">Rp. {{ totalHarga() }}</p>
                  </div>
                  <div class="flex items-center justify-between">
                      <p class="text-sm font-medium text-gray-900">Shipping</p>
                      <p class="font-semibold text-gray-900">Rp.0</p>
                  </div>
              </div>
              <div class="mt-6 flex items-center justify-between">
                  <p class="text-sm font-medium text-gray-900">Total</p>
                  <p class="text-2xl font-semibold text-gray-900">Rp.{{ totalHarga() }}</p>
              </div>
          </div>
          <button @click="performCheckout"
              class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
      return {
          paymentType: '',
          deliveryType: '',
      };
  },
  computed: {
      ...mapGetters('cart', ['getCart']),

  },
  methods: {
      ...mapActions('cart', ['fetchCart']),
      ...mapActions('product', ['fetchProducts']),
      ...mapActions('product', ['fetchProducts']),
      ...mapActions('auth', ['getUserAddress']),
      // total price
      totalHarga() {
          this.total = this.getCart.reduce((acc, product) => {
              return acc + parseFloat(product.regular_price * product.qty);
          }, 0);

          return this.total.toFixed(2);

      },
      async performCheckout() {
          // Collect the product IDs to be checked out
          const cartItemIds = this.getCart.map(product => product.cart_id);
          // Get user address
          const userAddressResponse = await this.$store.dispatch('auth/getUserAddress');
          const userAddressId = userAddressResponse.data[0].id;

          const checkoutPayload = {
              shippingAddress: userAddressId,
              billingAddress: userAddressId,
              paymentType: this.paymentType,
              deliveryType: this.deliveryType,
              cart_item_ids: cartItemIds
          };

          // Call the checkout action with the collected IDs and user address
          await this.$store.dispatch('cart/checkoutCart', checkoutPayload);
      }
  },
  beforeMount() {
      this.fetchProducts();
  },

  mounted() {
      this.fetchCart();
  },
}
</script>