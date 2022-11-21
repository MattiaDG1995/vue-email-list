var app = new Vue({
    el: '#root',
    data:{
        mail:[],
    },

    methods:{

        start(){

            this.mail=[];

            for(let i=0; i < 10; i++){
                if( this.mail.length < 10){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                   .then( (res) => {
            
                    let newMail = res.data.response
                    this.mail.push(newMail)
                    console.log(this.mail)
                })
            }
                
            }

            
            
        }


        
    }

})