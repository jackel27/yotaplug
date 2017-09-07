<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:100');
#logo {
  font-family: 'Roboto', sans-serif;
  font-size: 2em;
}
</style>

<template>
  <div>
    <nav class="navbar ">
  <div class="navbar-brand">
    <a class="navbar-item" href="">

      <p id="logo">Project <strong>Yota</strong>Plug</p>
    </a>

    <a class="navbar-item is-hidden-desktop" href="https://www.instagram.com/yotaplug/" target="_blank">
      <span class="icon" style="color: #333;">
        <i class="fa fa-instagram"></i>
      </span>
    </a>

    <a class="navbar-item is-hidden-desktop" href="https://www.youtube.com/yotaplug/" target="_blank">
      <span class="icon" style="color: #e62117;">
        <i class="fa fa-youtube-play"></i>
      </span>
    </a>


    <a class="navbar-item is-hidden-desktop" href="https://twitter.com/yotaplug" target="_blank">
      <span class="icon" style="color: #55acee;">
        <i class="fa fa-twitter"></i>
      </span>
    </a>
<!-- add is-active class here to turn burger into cross -->
    <div class="navbar-burger burger" v-bind:class="{ 'is-active': burgerisactive }" @click="mobileMenu" data-target="navMenubd-example">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
<!-- add is-active class here toggle -->
  <div id="navMenubd-example" class="navbar-menu" :class="{ 'is-active': burgerisactive }">
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link  is-active" href="">
          About
        </a>
        <div class="navbar-dropdown ">
        <router-link :to="{ path: '/ProjectDescription' }">
          <a class="navbar-item " href="">
            Project Description
          </a>
          </router-link>
          <router-link :to="{ path: '/ProjectSpecifics' }">
          <a class="navbar-item " href="">
            Project Specifics
          </a>
          </router-link>
          <router-link :to="{ path: '/ProjectOutcome' }">
          <a class="navbar-item " href="">
            Project Outcome
          </a>
          </router-link>
          
  <!--           <a class="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">
              Components
            </a> -->
          
  <!--         <hr class="navbar-divider">
          <div class="navbar-item">
            <div>
              <p class="is-size-6-desktop">
                <strong class="has-text-info">0.5.1</strong>
              </p>
              
                <small>
                  <a class="bd-view-all-versions" href="/versions">View all versions</a>
                </small>
              
            </div>
          </div> -->
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link " href="http://bulma.io/blog/">
          Blog
        </a>
        <div id="blogDropdown" class="navbar-dropdown " data-style="width: 18rem;">
          
 <!--            <a class="navbar-item" href="/2017/08/03/list-of-tags/">
              <div class="navbar-content">
                <p>
                  <small class="has-text-info">03 Aug 2017</small>
                </p>
                <p>New feature: list of tags</p>
              </div>
            </a>
          
            <a class="navbar-item" href="/2017/08/01/bulma-bootstrap-comparison/">
              <div class="navbar-content">
                <p>
                  <small class="has-text-info">01 Aug 2017</small>
                </p>
                <p>Bulma / Bootstrap comparison</p>
              </div>
            </a> -->
           <router-link :to="{ path: '/blog/09-07-2017' }">
            <a class="navbar-item" href="">
              <div class="navbar-content">
                <p>
                  <small class="has-text-info">7 Sept 2017</small>
                </p>
                <p>Let's start the build!</p>
              </div>
            </a>
           </router-link>
          <router-link :to="{ path: '/blog/MorePosts' }">
          <a class="navbar-item" href="">
            More posts
          </a>
          </router-link>
          <hr class="navbar-divider">
          <div class="navbar-item">
            <div class="navbar-content">
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <strong>Stay up to date!</strong>
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <a class="button bd-is-rss is-small" href="">
                      <span class="icon is-small">
                        <i class="fa fa-rss"></i>
                      </span>
                      <span>Subscribe</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <div class="navbar-link">
          Real-Time
        </div>
        <div id="moreDropdown" class="navbar-dropdown ">
          <a class="navbar-item " href="http://bulma.io/extensions/">
            <div class="level is-mobile">
              <div class="level-left">
                <router-link :to="{ path: '/Timeline' }">
                  <div class="level-item">
                    <p>
                      <strong>Timeline</strong>
                      <br>
                      <small>See current progress and what's next to come &nbsp</small>
                    </p>
                  </div>
                </router-link>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <span class="icon has-text-info">
                    <i class="fa fa-tasks"></i>
                  </span>
                </div>
              </div>
            </div>
          </a>
          <a class="navbar-item " href="http://bulma.io/extensions/">
            <div class="level is-mobile">
              <div class="level-left">
                <router-link :to="{ path: '/Partslist' }">
                  <div class="level-item">
                    <p>
                      <strong>Parts List</strong>
                      <br>
                      <small>What we got, what we need, and what we want  &nbsp</small>
                    </p>
                  </div>
                </router-link>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <span class="icon has-text-info">
                    <i class="fa fa-wrench"></i>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
 <!--      <a class="navbar-item " href="http://bulma.io/expo/">
        <span class="bd-emoji">⭐️</span>
        Expo
      </a> -->
      <a class="navbar-item " href="http://bulma.io/love/">
        <span class="bd-emoji">❤️</span>
        &nbsp Donate
      </a>
    </div>

    <div class="navbar-end">
      <a class="navbar-item is-hidden-desktop-only" href="https://www.instagram.com/yotaplug/" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fa fa-instagram"></i>
        </span>
      </a>
      <a class="navbar-item is-hidden-desktop-only" href="https://youtube.com/yotaplug" target="_blank">
        <span class="icon" style="color: #e62117;">
          <i class="fa fa-youtube-play"></i>
        </span>
      </a>
      <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/yotaplug" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fa fa-twitter"></i>
        </span>
      </a>
     <!--  <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button"
  data-social-network="Twitter"
  data-social-action="tweet"
  data-social-target="http://bulma.io"
  target="_blank"
  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
  <span class="icon">
    <i class="fa fa-twitter"></i>
  </span>
  <span>
    Tweet
  </span>
</a>

          </p>
          <p class="control">
            <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div> -->
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'mymenu',
  computed: {
  },
  components: {
  },
  mounted () {
  },
  data () {
    return {
      burgerisactive: false
    }
  },
  methods: {
    mobileMenu () {
      this.burgerisactive = !this.burgerisactive
      console.log('it works!')
    }
  }
}
</script>
