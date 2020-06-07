<template>
    <div id="top-header">
        
  <b-navbar toggleable="lg">
    <b-navbar-brand class="brand" href="#">Logo</b-navbar-brand>  
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
    </b-collapse>
  </b-navbar>


    </div>
</template>

<script>
export default {
    
}
</script>

<style>
/* .nav{
    float: right;
    position : absolute;
    padding-left: 823px; 
} */

#top-header{
    box-shadow: 0.5px 0.5px white;
}
ul {
  list-style-type: none;
  padding: 0;
 
  float: right;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>