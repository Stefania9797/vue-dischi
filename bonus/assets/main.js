let root= new Vue({
    el:"#root",
    data:{
        albums:[],
        selected:"all"
    },
    methods:{},
    mounted(){
        axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(response=>{
            this.albums=response.data.response
        })
    }
})