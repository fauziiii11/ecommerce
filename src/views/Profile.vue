<template>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
  <br>
  <br>
  <center>
  <div class="m-10 max-w-sm">
<div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
  <div class="relative mx-auto w-36 rounded-full">
    <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
    <img class="mx-auto h-auto w-full rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2M5Bn28U5LuOxSkC_AF-IHvIyIjuAtQk4-YRpHVllcDOyDcCgm0u8vV1FJImtBGvbNWk&usqp=CAU" alt="" />
  </div>
  <br>
  <h2 class="font-lg text-extrabold text-center leading-6 text-gray-600">{{ getUser.name }}</h2>
  <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">{{ getUser.email }}</p>
  <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shzadow">
    <li class="flex items-center py-3 text-sm">
      <center><span class="ml-auto">Address : {{ address.address }} </span></center>
    </li>
    <li class="flex items-center py-3 text-sm">
      <center><span class="ml-auto">Country : {{ address.country }}</span></center>
    </li>
    <li class="flex items-center py-3 text-sm">
      <center><span class="ml-auto">City : {{ address.city }}</span></center>
    </li>
    <li class="flex items-center py-3 text-sm">
      <center><span class="ml-auto">State : {{ address.state }} </span></center>
    </li>
    <li class="flex items-center py-3 text-sm">
      <center><span class="ml-auto">Postal Code : {{ address.postal_code }} </span></center>
    </li>
  </ul>
</div>
</div>
</center>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
      ... mapGetters('user', ['getUser']),
      ... mapGetters('auth', ['getAddress']),
      address(){
        return this.getAddress.data[0]
      }
  },
  methods: {
      ...mapActions('user', ["fetchUser"]),
      ...mapActions('auth', ["getUserAddress"]),
  },
  created() {
    this.getUserAddress();
    this.fetchUser();
  },
}
</script>