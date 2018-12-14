<template>
  <section class="home">
    
    <article class="home-left">
        <h1>Hello World!</h1>
        <h2>My name is Lilly!</h2>
        <p>Hello! My name is  and I am a fictional character. My sole purpose is inhabiting this blog and giving it life. Some of the lines that you will read here will make no sense to you but don't worry, there is a reason for that. See, in my world, we don't use the same words that you do. Like in every foreign country you visit it takes some time to adjust and start understanding the people around you. My world, it is exactly the same. The more you look, the more meaning you will find and the more you will start understanding my habitat. If I was a real person, I would be a good person so let me give you a few tips. Start with the big things like the titles, the pictures, the buttons, all the things that look familiar. Once you feel more comfortable try reading the text more carefully and if you start seeing the meaning it is because you have crossed the border and you are now in my world. If I was a real person, I would also be a curious one, so don't worry and let's explore together!</p>
    </article>
    <article class="home-right">
      <div class="media">
        <img src="../assets/img/image09.jpg" alt="Baby looking at the sea">
      </div>
      <div class="media">
        <img src="../assets/img/image05.jpg" alt="Baby dressed as a bear">
      </div>
      <div class="media">
        <img src="../assets/img/image07.jpg" alt="Baby sleeping">
      </div>
      <div class="media">
        <img src="../assets/img/image10.jpg" alt="Baby on the street">
      </div>
    </article>
  </section>
</template>
<!--<template>
  <div class="home">
    
  </div>
</template>-->

<style>
  .home{
    width:80%;
    margin: 2rem auto;
    display: flex;
  }
  .home h1{
    font-size: 42px;
  }
  .home .home-left{
    flex: 0 0 50%;
    margin-right: 1rem;
  }
  .home .home-right{
    grid-column: 3/span 2;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-auto-flow: row dense;
    gap: .1rem 1.1rem;
  }
  .home .media{
    align-self: end;
  }
  .home img{
    width: 100%;
    height: auto;
  }
</style>
