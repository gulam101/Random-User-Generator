const app = Vue.createApp({
    data() {
        // Default values dispalyed as placeholder
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/82.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()


            // using the 'This' keyword allows us to access the data
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].name.email
            this.gender = results[0].name.gender
            this.picture = results[0].name.picture
        },
    },
})

app.mount('#script')