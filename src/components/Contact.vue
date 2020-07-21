<template>
<div class="container">
   
           <form>
                <b-form-group>
                    <h2>Contact</h2>
                    <h4>You want us to talk?, reach me at:</h4>
                    <b-form-row>
                    <div class="col-md-4">
                        <label>Name</label>
                        <input type="text" name="name" class="form-control">
                    </div>
                    <div class="col-md-4">
                        <label>Email Address</label>
                        <input type="email" name="email" class="form-control">
                    </div>
                    </b-form-row>

                    <b-form-row>
                        <div class="col-md-4">
                        <label>Subject</label>
                    <input type="text" name="subject" class="form-control">
                    </div>
                    <div class="col-md-4">
                        <label>Message</label>
                        <textarea name="message" class="form-control"></textarea>
                    </div>
                    </b-form-row>

                    <input type="submit" value="Send Mail" class="btn btn-primary btn-lg"/>
                </b-form-group>
            </form>
    <center>        
           <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Fadeyi, Lagos, Nigeria</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+234(0)8168252201</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>momohmayowa14@gmail.com</p>
                </li>
            </ul>
    </center>

         
       </div>
       
 

</template>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>

</style>