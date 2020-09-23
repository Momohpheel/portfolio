<template>
    <div id="top-header">
      <div class="header">
        <header>
          <p class="name">PHILIP</p>
        </header>
      </div>
      <!-- <div class="tab">
        <main >
          <ul>
            
            <a href=""><li class="tabs">Bio</li></a>
            
            <a href="#"><li class="tabs">Contact</li></a>
          </ul>
        </main>
      </div> -->
    </div>
</template>

<script>
export default {
    name: "TopHeader",
    data (){
      return{
        
      }
    },
    method: {
      bio(){
        
      }
    }
}
</script>

<style>
*{
  font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  margin: 0;
}
#top-header{
 display: flex;
}
.header{
  flex: 6;
}

  .header header p{
    font-size: 2.4em;
    font-weight: 800;
    padding: 20px 40px;
    opacity: 0.7;
    color: #fff;
    
  }

  .name:hover{
    text-shadow: 0px 3px coral;
    font-size: 2.5em;
    color: #fff;
    opacity: 1
  }
  
  .tab ul{
    list-style-type: none;
    margin: 30px;
  }
  .tabs{
    display: inline;
    flex: 4;
    color: #fff;
     padding: 20px 20px;

  }
  .tab main ul a:hover{
    padding: 10px 10px;
    background-color: coral;
    

  }
</style>