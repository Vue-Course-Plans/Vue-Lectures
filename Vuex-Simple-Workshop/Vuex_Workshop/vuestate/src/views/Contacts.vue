<template>
  <section class="contacts">  
        <header class="section-title page">
            <h2 class="page-title">Contact me</h2>
        </header>

        <article class="address">
            <p>Address: Sofia, Mladost1</p>
            <p>Phone: 0899 546 877</p>
            <p>Email: babyAlbum@gmail.com</p>
        </article>

        <form class="contact-form">
            <h2>Send me a message</h2>
            <div class="contact-box">
                <div class="half left">
                    <input type="text" id="input-name" placeholder="Name">
                    <input type="email" id="input-email" placeholder="Email address">
                    <input type="text" id="input-subject" placeholder="Subject">
                </div>
                <div class="half right">
                    <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                </div>                
            </div>
            <input class="main-button" type="submit" value="Send">
        </form>
   
  </section>
</template>

<script>

</script>

<style>


.contacts{
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;
    
}
.contacts .main-button {
    border: 0;
    border-radius: 1rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    color: #FFEEBC;
    background: #FF7F50;
    width: 40%;
    margin: 0 auto;
}
.contacts .main-button:hover {
    border-color: transparent;
    background: rgb(89, 214, 5);
    color: #FF7F50;
    background: white;
    border: 1px solid #FF7F50;
    border-radius: 1rem;
}
  
.contacts h2 {
    text-align: center;
}
.contacts .address {
    text-align: center;
    width: 80%;
    margin: auto;
    font-size: 1rem;
}
.contact-form {    
    text-align: center;
    margin: 1rem auto;
    padding: 2rem;
   
}
form input:focus,
form textarea:focus {
    border: #FF7F50 1px solid;
    box-shadow: 0 0 1px black;
    border-radius:1rem;
    outline: none;
} 
.contact-box{
    width: 80%;
    margin: 0 auto;
    margin-bottom: 4rem;
}
.contact-form  input,
.contact-form textarea {
    padding: 1.2rem;
    display: block;    
    margin-top: 1em;
    resize: none;
    border: none;
    border-bottom: 1px solid #FF7F50;
   
    
}
.contact-form textarea {
    height: 13rem;
    width: 80%
}
.contact-form .contact-box {
    display: flex;
}
.contact-form .half {
    flex: 0 0 50%;    
}
.contact-form .right {
    flex: 0 0 50%;
}
.contact-form .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 2%;
}
 
 
</style>