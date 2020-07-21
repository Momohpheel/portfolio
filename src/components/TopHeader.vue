<template>
    <div id="top-header">
        
  <b-navbar fixed    toggleable="xs">
    <ul id="home">
      <li><strong><a href="#">PHILIP</a></strong></li>
    </ul>
    <!-- <b-navbar-brand class="brand" href="#">Logo</b-navbar-brand>   -->
    <!-- <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav> -->
        <ul id="others">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
        </ul>
    <!-- </b-collapse> -->
  </b-navbar>


    </div>
</template>

<script>
export default {
    name: "TopHeader"
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
#others {
  list-style-type: none;
  padding: 0;
 float: right;
}
#home {
  list-style-type: none;
  padding: 0;
 float: left;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>