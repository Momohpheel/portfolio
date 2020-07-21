<template>
    <div id="about">
    
        <b-card >
            <b-container>
            <b-card-text id="card">
                <strong>A bit about me</strong>
                <p>I’m a backend engineer and graphics designer based in Lagos, Nigeria. I’m passionate building software’s that will ease our day-to-day activities, I enjoy solving complex problems using web technologies. 
                    When I’m not coding you can find me geeking about designs and making cool designs also.!</p>
            </b-card-text>
    <div class="row">
        <div class="col-md-6">
        
            <a href="\laragon\portfolio-master\public\esl.docx" download><input type="submit" class="btn btn-success" value="DOWNLOAD MY RESUME" ></a>
        
        </div>
        <div class="col-md-6">
            <h5>HTML & CSS</h5>
            <b-progress value="60" :max="max" show-value class="mb-2"></b-progress>

            <h5>PHP</h5>
            <b-progress value="60" :max="max" show-value class="mb-2"></b-progress>

            <h5>MySQL</h5>
            <b-progress value="65" :max="max" show-progress class="mb-2"></b-progress>

            <h5>LARAVEL</h5>
            <b-progress value="69" :max="max" :precision="2" show-value class="mb-2"></b-progress>

            <h5>VueJs</h5>
            <b-progress value="40" :max="max" :precision="2" show-value class="mb-2"></b-progress>
        </div>
    </div>
          
            </b-container>
        </b-card>

          

    </div>
</template>

<script>
export default {
    name: "About",

   data() {
      return {
        value : "",
        max: 100
      }
   }

}

</script>

<style scoped>
#card{
    padding : 40px;
}
</style>