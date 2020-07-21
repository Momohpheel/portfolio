<template>
    <div id="app">      
                          
            <b-container>   
                <b-row>
                    <b-col class="col-md-8" >
                        <h1>Hi, I'm Philip Momoh!</h1>
                        <p>I'm a backend engineer and an aspiring technical writer based in Lagos, Nigeria.</p>              
                    </b-col>
<!--     
                    <b-col class="col-md-4">
                      <div class="clearfix">
                        <b-img  fluid :src="require('C:/laragon/portfolio-master/src/assets/av.jpg')" alt="Profile image"></b-img>
                        </div>
                    </b-col> -->
                </b-row>
            </b-container>
        
    </div>
</template>

<script>


export default {
    name: "Intro",
    components: {
        //TopHeader,
    },
    data(){
        return {
            src:"",
            size: {width: 300, height: 300, class: 'm1' }
    }
    }
}
</script>

<style scoped>
#app {
    padding-top : 100px;
    padding-bottom : 100px;
    background-image: url('C:/laragon/portfolio-master/src/assets/av.jpg');
}
h1, p {
    color: white;
}

</style>