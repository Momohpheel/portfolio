<template>
  <div id="app">
  <div class="contact"></div>
  <div class="bio"></div>
    <div class="colo">
      <div class="top-header">
        <div class="head">
          <TopHeader @click="close" />
        </div>
      <div class="tab">
        <main >
          <ul>
            
            <li class="tabs" @click="bioButton">Bio</li>
          <li class="tabs" @click="contactButton">Contact</li>
          </ul>
        </main>
      </div>
      </div>

      <section >
        
        <div id="about">
        </div>
        <div id="contact">
        </div>
      </section>

      <div class="showcase"> 
        <main>      
            <div class="intro">
                <h1>Hi, I'm <span>Momoh</span> Philip!</h1>
            </div>
            <div class="bio">
                <h4>I'm a Fullstack Engineer and an aspiring Data Analyst based in Lagos, Nigeria.</h4>                 
            </div>
            <div class="pl">
                <ul>
                  <li><img :src="require('C:/laragon/portfolio-master/src/assets/laravel.png')" width="3%"></li>
                  <li><img :src="require('C:/laragon/portfolio-master/src/assets/logo.png')" width="3%"></li>
                  <li><img :src="require('C:/laragon/portfolio-master/src/assets/mysql2.png')" width="4% "></li>
                  <li><img class="git" :src="require('C:/laragon/portfolio-master/src/assets/git.png')" width="4%"></li>
                  <li><img :src="require('C:/laragon/portfolio-master/src/assets/python.png')" width="4%"></li>

                </ul>
            </div>
            <div class="buttons">
              <a href="https://github.com/Momohpheel"><button class="button">Projects</button></a>
              <a href="./assets/MomohPhilip.docx" download><button class="button">Resume</button></a>
            </div>
        </main> 

        <footer id="main-footer">
          Copyright &copy; 2020 momohmayowa14@gmail.com
        </footer>

      </div>
    </div>
  <div style="margin-bottom: 0;"></div>
  </div> 
</template>

<script >
//import Email from './smtp.js';

import TopHeader from './components/TopHeader.vue'

export default {
  name: 'App',
  components: {
    TopHeader,
   
  },
  data(){
    return {
    
    }
  },
 methods: {
 
   bioButton(e){
     e.preventDefault();

     const about = document.getElementById('about');
     const contact = document.getElementById('contact');
     //const closes = document.getElementById('close');
    //closes.innerHTML = `<h1>X</h2>`;
     contact.innerHTML = "";
     about.innerHTML = `
             <div class="me">
            <div id="close" style="color:red">close</div>
              <p>
                I am a Fullstack Software developer based in Lagos, Nigeria. I'm familiar with a number of programming languages 
                and frameworks, such as Php, JavaScript, Python, HTML, CSS, Laravel, Django and Vue Js.
                I have done some mini-projects which can be found on my <a style="color:blue;" href="https://github.com/Momohpheel">Github repositories</a>.
                I am passionate about doing more in tech, learning, meeting tech gurus, 
                and gaining so much experience. 
                I am very keen to take new responsibilities with bigger operations and high challenges.
                I am a fast learner and can adapt to new situations.
                I’m passionate about building software’s that will ease our day-to-day activities,
                I enjoy solving complex problems using web technologies. When
                I’m not coding you can find me geeking about designs and making cool designs also...
                I am also fluent in verbal and written skills in English and Yoruba language.
              </p>

            </div>
          </div> `;

          const closes = document.getElementById('close');

          closes.addEventListener('click', (e)=>{
                e.preventDefault();

            const about = document.getElementById('about');
            const contact = document.getElementById('contact');

            contact.innerHTML = "";
            about.innerHTML = "";
          });


   }
,
   contactButton(e){
     e.preventDefault();
      const contact = document.getElementById('contact');
      const about = document.getElementById('about');
  //const closes = document.getElementById('close');
    //closes.innerHTML = `<h1>X</h2>`;
     about.innerHTML = "";
     contact.innerHTML = `<div class="email">
       <div id="close" style="color:red">close</div>  
            <h3 >Let's Talk!! </h3>
            <div class="form-group">
            <label>Subject</label>
            <input type="text" class="input" placeholder="Your Subject.." name="">
            </div>
            <div class="form-group">
            <label>Email</label>
            <input type="text" class="input" placeholder="example@example.com" name="">
            </div>
            <div class="form-group">
            <label>Message</label>
            <textarea type="text" class="input" placeholder="Message here..." name=""></textarea>
            </div>
            <input type="submit" class="button">
          </div>`;

           const closes = document.getElementById('close');

          closes.addEventListener('click', (e)=>{
                e.preventDefault();

            const about = document.getElementById('about');
            const contact = document.getElementById('contact');

            contact.innerHTML = "";
            about.innerHTML = "";
          });


   }
   ,
  close(e){
      e.preventDefault();

     const about = document.getElementById('about');
     const contact = document.getElementById('contact');

     contact.innerHTML = "";
     about.innerHTML = "";
    
   },
//    sendEmail(e){
//      Email.send({
//     Host : "smtp.mailtrap.io",
//     Username : "<Mailtrap username>",
//     Password : "<Mailtrap password>",
//     To : 'recipient@example.com',
//     From : "sender@example.com",
//     Subject : "Test email",
//     Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
// }).then(
//   message => alert(message)
// );   }
   
 }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  
  font-family:Arial, Helvetica, sans-serif;

  
}
#app{
  background-image: url('./assets/sample.png');
  /* background-color: rgba(0,0,0,0.95); */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-size: cover;
  background-position: bottom;
  min-height: 100vh;
}
.colo{
  background-color: rgba(0,0,0,0.95);
}
a {
  text-decoration: none;
  color: #fff;
}
a:hover{
  text-decoration: none;
  
}
span{
  color: yellow;
}
.showcase{
  margin: 30px;
}
.showcase main{
  padding: 30px 0px;
}

.intro{
  padding-top: 70px;
  color: #fff;
}
.bio{
  color: #fff;
}
ul{
  list-style-type: none;
  padding: 0;
}
.pl li{
  display: inline;
  margin: 0px 20px 0px 0px;
}
img:hover{
  width: 5%;
}
.button{
  background-color: #333;
  /* opacity: 0.6; */
  padding: 10px 40px;
  margin-right: 10px;
  /* border-radius: 16px 10px 16px 10px; */
  color: #fff;
  border: none;
  
}
.top-header{
  display: flex;
}
.head{
  flex: 3;
}
  .tab ul{
    list-style-type: none;
    margin: 30px;
    
  }
  .tabs{
    display: inline;
   
    color: #fff;
     padding: 20px 20px;

  }
  .tab main ul li:hover{
    padding: 10px 10px;
    background-color: coral;
    

  }


.button:hover{
  background-color: #fff;
  color: #000;
  opacity: 1;
  padding: 12px 45px;
  border: 1px solid coral;
}

#main-footer{
  margin-top: 169px;

  color:#fff;
  text-align: center;
  padding: 20px;
}

.me{
  margin: 20px;
  background-color: rgba(0,0,0,0.95);
  min-height: 60vh;
  position: absolute;
}
.me p {
  color: #fff;
  margin: 20px 20px;
  padding: 50px 20px;
  text-align: center;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
.image{
  margin: 10px 20px;
  padding: 20px 20px 0px 470px;
  
  
}

.email{
  margin: 20px;
  background-color: rgba(0,0,0,0.95);
  min-height: 60vh;
  position: absolute;
  padding: 20px 100px;
}
.email .form-group{
  padding-bottom: 15px;
  
}
.email label {
  color: #fff;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: block;

}
.email h3{
  color: #fff;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-bottom: 15px;
}
.email input[type="text"]{
  width: 120%;
  padding: 8px;
}
.email textarea{
  width: 120%;
  padding: 8px;
}
.close{
  color: red;
  padding-left: 40px;
}
@media(max-width: 1200px){

img{
  width: 5%;
}

img:hover{
  width: 7%;
}
.bio h4{
  font-size: 23px;
}
.intro h1{
  font-size: 35px;
  
}
}
@media(max-width: 600px){

img{
  width: 7%;
}

img:hover{
  width: 9%;
}
.bio h4{
  font-size: 23px;
}
.intro h1{
  font-size: 35px;
  
}
.me{
  margin:15px 40px;
  background-color: rgba(0,0,0,0.95);
  width: 80%;
  position:absolute;
  
}
.me p {
  color: #fff;
  font-size: 90%;
  
  text-align: center;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}


}

@media(max-width: 375px){

img{
  width: 5%;
}

img:hover{
  width: 7%;
}
.bio h4{
  font-size: 21px;
}
.intro h1{
  font-size: 23px;
  
}
.me{
  margin:10px 35px;
  background-color: rgba(0,0,0,0.95);
  width: 60%;
  position:absolute;
  
}
.me p {
  color: #fff;
  font-size: 80%;
  
  text-align: center;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
#app{
  background-image: url('./assets/sample.png');
  /* background-color: rgba(0,0,0,0.95); */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-size: cover;
  background-position: bottom;
  min-height: 90vh;
}
.tab ul{
    list-style-type: none;
    margin: 30px 20px;
    
  }
  .tabs{
    display: inline;
   
    color: #fff;
     padding: 15px 10px;

  }
  .tab main ul li:hover{
    padding: 10px 10px;
    background-color: coral;
    

  }
.me{
  margin: 0px 60px;
  background-color: rgba(0,0,0,0.95);
  min-height: 60vh;
  position: absolute;
}
.me p {
  color: #fff;
  margin: 10px 10px;
  padding: 20px 10px;
  
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
.image{
  margin: 10px 20px;
  padding: 20px 20px 0px 470px;
  
  
}

}

</style>
