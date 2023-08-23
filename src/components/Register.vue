<template>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />
    <div class="flex h-screen w-full items-center justify-center bg-gray-100">
  <div class="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-lg sm:flex">
    
    <div class="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5" style="background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxC9L2wWC-G_uJg5BCKAVY-j3APBWMsvrkk3LHW7cTMGDVg71YN1zhWqsaN28Cvxotug&usqp=CAU)"></div>
    <div class="w-full sm:w-3/5">
      <div class="p-8">
        <h1 class="text-3xl font-black text-slate-700">Sign up</h1>
        <p class="mt-2 mb-5 text-base leading-tight text-gray-600">Create an account to get access to Fauzi Store</p>
        
        <form  @submit.prevent="performRegister" class="mt-8">
          <div class="relative mt-2 w-full">
            <input v-model="name" type="text" id="text" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label for="text" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">Name</label>
          </div>
          <div class="relative mt-2 w-full">
            <input v-model="email" type="email" id="email" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label for="email" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">Email</label>
          </div>
          <div class="relative mt-2 w-full">
            <input v-model="password" type="password" id="password" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label for="password" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">Password</label>
          </div>
          <div class="relative mt-2 w-full">
            <input v-model="confirm_password" type="password" id="password" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label for="password" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">Comfirm Password</label>
          </div>
          <div class="relative mt-2 w-full">
            <input v-model="phone" type="number" id="number" class="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
            <label for="number" class="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">Phone</label>
          </div>
          <br>
            <div class="mb-4">
            <button class="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none" type="submit">Sign in</button>
          </div>
        </form>
        
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { mapActions } from 'vuex';

export default {
    auth() {
        return {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirm_password:'',
        };
    },
    methods: {
        ...mapActions('auth', ['register']),
        async performRegister() {
            const credentials = {
           name : this.name,
             email: this.email,
                phone: this.phone,
                password: this.password,
                confirm_password: this.confirm_password,
            };
            const success = await this.register(credentials);
            
            if(success) {
                this.$router.push('/login');
            } else {
                alert("Register Failed!")
            }
        },
    },
};
</script>