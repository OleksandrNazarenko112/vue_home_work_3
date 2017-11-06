const About = {
  template:`<div><section class="about">
    <h2>Роуты</h2>
  </section></div>`
}
const Blog = {
      data: function() {
      return {
        posts: posts
      }
    },
  template:`
  <div class="blog">

    <div class="blog__post" v-for="(post, index) in posts">
      <img :src="post.image" alt="">
      <h3>{{ post.title }}</h3>
      <router-link :to="{ name: 'post', params: { id: index } }">Подробнее</router-link>

    </div>
<router-view ></router-view>
  </div>`
}
const Post = {

template:`
  <div class="post" v-if="post">

    <img :src="post.image" alt="">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>

  </div>`,

    data: function() {
      return {
        posts: posts,
        post: null

      }
       console.log(data.posts)
    },
    created: function() {
      var postId = this.$route.params.id
      this.post = this.posts[postId]
    }
   
  }

const router = new VueRouter({
routes:[
{path:"/about", component: About },
{ path: '/blog', component: Blog, children: [ { path: 'post/:id', name: 'post', component: Post }]},


]
})
var posts = [
  {
    title: 'Nokia 3310',
    body: 'Хороший телефон, надежный',
    image: 'data:image/jpeg;base64,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'
  },
  {
    title: 'Закат',
    body: 'Текст — зафиксированная на каком-либо материальном носителе',
    image: 'https://cs4.pikabu.ru/post_img/big/2016/05/14/11/1463254240179629600.jpg'
  }

]

new Vue({
el: "#app",
router: router,
  components: {
    About,
    Blog,
    Post

 
  }
})
router.beforeEach ( ( to, from, next ) => {
  console.log ( 'router from: ', from.path )
  console.log ( 'router to: ', to.path )
  next ()
})