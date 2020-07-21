<template>
  <div id="app">
      <TopHeader /> 
      <Intro />
      <About />
      <b-container>
          <b-row id="card" align-v = "center">
            <Project v-for="project in projects" :key="project.id"  :project ="project"/>
          </b-row>
      </b-container>
      <Contact />
      <!-- <center><p>Momoh Philip 2020</p></center> -->
  </div>
</template>

<script>
import TopHeader from './components/TopHeader.vue'
import Intro from './components/Intro.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
import Contact from './components/Contact.vue'
export default {
  name: 'App',
  components: {
    TopHeader,
    Intro,
    About,
    Project,
    Contact
  },
  mounted() {
    this.fetchData();
  },
  data(){
    return{
      projects: [],
    };
  },
  methods: {
    //api.github.com/users/Momohpheel/repos
    fetchData(){
     fetch('sample.json')
     .then((res) =>  res.json())
     .then((data) => {
       for(let i = 0; i < 3; i++){
        this.projects.push(data[i]);
       }
       
       })
     .catch((err) => {console.log(err)});
     }

  }
}
</script>

<style>
#app {
/* background-color : blue; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#card {
  padding-top : 40px
} 

/* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
</style>
