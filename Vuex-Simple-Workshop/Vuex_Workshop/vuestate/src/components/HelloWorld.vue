<template>
  <div class="hello">
    <div class="left">
      <h1> {{ title }} </h1>

      <form @submit.prevent='addLink'>
      <input class="link-input" type="text" placeholder="Add a Book Link" v-model="newLink"/>
      

      </form>
      <ul>
        <li v-for="(link, index) in links" v-bind:key="index">
        {{ link }}
        <button v-on:click="removeLinks(index)" class='rm'>Remove</button>
        </li>
      </ul>
    </div>
    <div class="right">
        <stats />
    </div>
  </div>
</template>

  <script>
    import Stats from '@/components/Stats.vue'
    import { mapState, mapMutations, mapActions } from 'vuex'

    export default {
      name: 'HelloWorld',
      data(){
        return {
          newLink: ''
        }
      },
      components: {
        Stats
      },
      computed:{
        ...mapState([
          'title',
          'links'
        ]),
            
      } ,
      methods: {
        ...mapMutations([
          'ADD_LINK'
        ]),
        ...mapActions([
          'removeLink'
        ]),
        addLink: function () {
          this.ADD_LINK(this.newLink)
          this.newLink = ''
        },
        removeLinks: function(link){
          this.removeLink(link)
        }
      }
    
  }
</script>

  
  <style>
  html, #app, .home {
    
  }
  body {    
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .hello .left,
  .hello .right {
    padding: 30px;
  }

  .hello ul {
    list-style-type: none;
    padding: 0;
  }
  .hello ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .hello .right {
    grid-area: right;
    
  }
  .hello input{
    border: none;
    border-bottom:1px solid #FF7F50; 
    padding: 20px;
    width: calc(100% - 40px);
    margin-bottom:50px;
    outline: none;
  }
  .rm{
    float: right;
    text-transform: uppercase;
    font-size: 0.8em;
    background: #f9d0e3;
    border: none;
    padding: 5px;
    color: red;
    cursor: pointer;
  }

</style>
