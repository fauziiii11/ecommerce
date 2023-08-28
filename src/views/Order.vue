<template>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
    <div class="message text-center">
      <h1 class="text-3xl font-bold pt-10">Thank You For Your Order</h1>
      <p>Order Code : {{ getOrder.code }}</p>
      <p class="italic">
        THANK YOU FOR SHOPPING {{ getOrder.user.name }} !!!
      </p>
    </div>
    
    <div class="mx-auto my-10 flex max-w-xs flex-col items-center rounded-xl border px-4 py-4 text-center md:max-w-lg md:flex-row md:items-start md:text-left">
  <div>
  <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700 m-9">
  <div class="flex flex-col pb-3">
      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Order Code :</dt>
      <dd class="text-lg font-semibold">{{ getOrder.code }}</dd>
  </div>
  <div class="flex flex-col py-3">
      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Name :</dt>
      <dd class="text-lg font-semibold">{{ getOrder.user.name }}</dd>
  </div>
  <div class="flex flex-col pt-3">
      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email :</dt>
      <dd class="text-lg font-semibold">{{ getOrder.user.email }}</dd>
  </div>
  <div class="flex flex-col pt-3">
      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Shipping Address :</dt>
      <dd class="text-lg font-semibold">{{ getOrder.shipping_address.address }}, {{  getOrder.shipping_address.city }}, {{  getOrder.shipping_address.state }}, {{  getOrder.shipping_address.country }}, {{  getOrder.shipping_address.postal_code }}</dd>
  </div>
  <div class="flex flex-col py-3">
      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Total Order Amount :</dt>
      <dd class="text-lg font-semibold">{{  getOrder.orders[0].grand_total }}</dd>
  </div>
  <div class="flex flex-col py-3">
      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Payment Method :</dt>
      <dd class="text-lg font-semibold">{{ getOrder.orders[0].payment_type }}</dd>
  </div>
  <div class="flex flex-col py-3">
      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Delivery Type :</dt>
      <dd class="text-lg font-semibold">{{ getOrder.orders[0].delivery_type }}</dd>
  </div>
  <div class="flex flex-col py-3">
      <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone Number :</dt>
      <dd class="text-lg font-semibold">{{  getOrder.shipping_address.phone }}</dd>
  </div>
</dl>

</div>
    </div>
  
  </template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  props: ['orderCode'],
  computed: {
    ...mapGetters('order', ['getOrder']),
  },
  created() {
    this.$store.dispatch('order/fetchOrderData', this.orderCode);
  },
};
</script>

<style>
  * {
  font-family: 'Source Sans Pro';
  }
</style> 