<template>
    <div>
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo">
                    Login With OTP
                </a>
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <form class="space-y-4 md:space-y-6" id="login_form">
                            <div class="hidden">
                                <label for="phone"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                                    Number</label>
                                <input v-model="phone" type="tel" name="phone" id="phone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Phone Number" required="">
                            </div>
                            <div>
                                <!-- <label for="otp"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Otp</label> -->
                                <input type="otp" v-model="otp" name="otp" id="otp"
                                    placeholder="••••••••"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="">
                            </div>

                            <button v-on:click.prevent="sbmit" type="submit"
                                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                phone: null,
                otp: null
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            sbmit() {
                axios.post('http://survey-collector.test/api/otp-login', {
                        'phone': this.phone,
                        'otp': this.otp
                    })
                    .then(response => {
                        console.log("data", response.data);

                        // Save access token to local storage
                        localStorage.setItem('accessToken', response.data['Access Token']);

                        this.$router.push('/regions');

                    })
                    .catch(error => {

                        console.error('Error:', error);
                    });
            },
            async fetchData() {
                try {
                    // Use localStorage.getItem in an asynchronous manner
                    this.phone = await localStorage.getItem('phone');
                    this.otp = await localStorage.getItem('otp');
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            },

        }
    }
</script>

<style>

</style>
