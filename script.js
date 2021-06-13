const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/82.jpg',
        }
    }
})

app.mount('#script')