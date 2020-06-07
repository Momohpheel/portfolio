<template>
  <div id="app">
      <TopHeader /> 
      <Intro />
      <About />
      <b-container>
          <b-row id="card" align-v = "center">
            <Project />
            <Project />
            <Project />
            <Project />
          </b-row>
      </b-container>
      <Contact />
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
