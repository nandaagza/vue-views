<template>
    <div>
        <sidebar></sidebar>
        <div class="p-4 sm:ml-64">
        <div class="mb-6">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
            <input type="text" id="default-input" v-model="formData.name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <button type="button" @click="submit"
                class="text-white mt-3  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button>
        </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Sidebar from '../../layouts/sidebar.vue';
    const url = 'http://survey-collector.test/api/regions';
    export default {
        // data() {
        //     return {
        //         formData: {
        //             name: null
        //         },
        //     };
        // },
        data: () => ({
            formData: {
                name: null
            },
        }),
        methods: {
            submit() {
                // console.log(this.formData.name);
                axios.post(url, this.formData)
                    .then(response => {
                        // Handle the successful response
                        console.log('Response data:', response.data);
                        this.$router.push('/regions');
                    })
                    .catch(error => {
                        // Handle errors
                        console.error('Error:', error);
                    });
            }
        },
        components: {
            Sidebar
        }
    }
</script>

<style>

</style>
