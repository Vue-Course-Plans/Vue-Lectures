<template>
  <div id="app">
    <header id="blog-header">
      <p>My baby album</p>
      <nav>
        <ul>
          <router-link tag="li" to="/"><a>Home</a></router-link>
          <router-link tag="li" to="/about"><a>About</a></router-link>
          <router-link tag="li" to="/book"><a>Books</a></router-link>
          <router-link tag="li" to="/contacts"><a>Contacts</a></router-link>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
    <footer>
      <p>&copy My Imaginary Friend Design Studio Ltd. Images Unsplash</p>
    </footer>
  </div>
</template>

  <style>
    @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i|PT+Serif');
    @import url('https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700,700i');
    body{
      margin: 0;
    }
    #app {
      font-family: 'PT Sans', sans-serif;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
     
  }
  #blog-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #FF7F50;
      padding: 0.2rem 4rem;
  }
  #blog-header p{
    font-size: 22px;
    color: white;
    font-style: italic;
    font-weight:bold;
  }
  #blog-header ul{
      display: flex;
      list-style-type: none;
      padding: 0;
  }
  #blog-header ul li{
    
  }
  #blog-header ul li a{   
    text-decoration: none;
    color: #FFEEBC;
    font-weight: bold;
  }
  #blog-header ul li a:hover{
    color: white;
  }
  #blog-header ul li:not(:last-child){
    padding-right: 2rem;
  }
  footer{
    margin-top: auto;
    text-align: center;
    background: #FF7F50;
    color: white;
  }

</style>
