<template>
    <div>
        <sidebar></sidebar>
        <div class="p-4 sm:ml-64 ">

            <div>
                <router-link to="/township/create"> <button type="button"
                        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Create
                        Township</button>
                </router-link>
            </div>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                No
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Region
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(township, index) in data" :key="township.id"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ index + 1 }}
                            </th>
                            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ township . name }}
                            </td>
                            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ township.region ? township.region.name : ""}}
                            </td>
                            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <!-- <router-link :to="'/township/edit/' + township.id" class="text-green-400 me-2">Edit</router-link> -->
                                <button class="text-red-400" @click="deleteTownship(township.id)" type="submit">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import localForage from 'localforage';
    import Sidebar from '../../layouts/sidebar.vue';
    export default {
        data() {
            return {
                data: null,
            };
        },
        mounted() {
            // Example API endpoint,
            const apiUrl = 'http://survey-collector.test/api/townships';
            // Use Axios to make a GET request when the component is mounted
            axios.get(apiUrl)
                .then(response => {
                    // Handle successful response
                    this.data = response.data.data;
                    console.log(this.data);
                })
                .catch(error => {
                    // Handle error
                    console.error('Error fetching data:', error);
                });
        },
        methods: {
            deleteTownship(id) {
                const apiUrl = `http://survey-collector.test/api/townships/${id}`;
                axios.delete(apiUrl)
                    .then(response => {
                        // Handle successful deletion
                        console.log(`Township with ID ${id} deleted`);

                        this.data = this.data.filter(township => township.id !== id);
                    })
                    .catch(error => {
                        // Handle error
                        console.error(`Error deleting township with ID ${id}:`, error);
                    });
                console.log(id);
            }
        },
        components: {
            Sidebar
        }
    }
</script>

<style>

</style>
