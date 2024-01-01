<template>
    <div>
        <sidebar></sidebar>
        <div class="p-4 sm:ml-64">

            <div>
                <router-link to="/department/create"> <button type="button"
                        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Create
                        Department</button>
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
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(department, index) in data" :key="department.id"
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ index + 1 }}
                            </th>
                            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ department . name }}
                            </td>
                            <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <router-link :to="'/department/edit/' + department.id" class="text-green-400 me-2">Edit</router-link>
                                <button class="text-red-400" @click="deleteDepartment(department.id)"
                                    type="submit">Delete</button>
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
            const apiUrl = 'http://survey-collector.test/api/departments';

            const authToken = localStorage.getItem('accessToken');

            console.log(authToken);

            // Set up the request config with the Authorization header
            const axiosConfig = {
                headers: {
                    Authorization: `Bearer ${authToken}`, // Include the token in the Authorization header
                },
            };
            // Use Axios to make a GET request when the component is mounted
            axios.get(apiUrl, axiosConfig)
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
            deleteDepartment(id) {
                const apiUrl = `http://survey-collector.test/api/departments/${id}`;
                const authToken = localStorage.getItem('accessToken');

                console.log(authToken);

                // Set up the request config with the Authorization header
                const axiosConfig = {
                    headers: {
                        Authorization: `Bearer ${authToken}`, // Include the token in the Authorization header
                    },
                };
                axios.delete(apiUrl, axiosConfig)
                    .then(response => {
                        // Handle successful deletion
                        console.log(`Department with ID ${id} deleted`);

                        this.data = this.data.filter(department => department.id !== id);
                    })
                    .catch(error => {
                        // Handle error
                        console.error(`Error deleting department with ID ${id}:`, error);
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
