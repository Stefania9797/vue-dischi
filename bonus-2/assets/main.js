let root= new Vue({
    el:"#root",
    data:{
        albums:[]
    },
    methods:{},
    mounted(){
        axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then(response=>{
            this.albums=response.data.response
            this.albums.sort(function(a,b){
                return a.year-b.year
            })
        })
    }
})