const app = new Vue({
    el:'#app',
    data: {
        errors: [],
        name: null,
        age: null,
        email: null
    },
    
    methods:{
        isAllFilled(){
            if (!this.name || !this.age || !this.email) return false;
            return true;
        },
        isNameValid() {
            if (this.name.length < 3) return false;
            return true;
        },
        isAgeValid(){
            return typeof this.age === 'number' && this.age > 12 && this.age < 120
        },
        isEmailValid() {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(this.email);
        },
        submitForm (e) {
            this.errors = [];
            if (!this.isAllFilled()) {
                this.errors.push('All the fields are required.')
                e.preventDefault();
                return false;
            }
            if (!this.isNameValid()) {
                this.errors.push('Name must be at least 3 characters long')
            }
            if (!this.isAgeValid()){
                this.errors.push('Age range is between 12 and 120')
            }
            if(!this.isEmailValid(this.email)) {
                this.errors.push('The email must be valid')
            }
            if (!this.errors.length) {
                return true;
            }
            e.preventDefault();
        },

    },
})
