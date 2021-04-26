<template>
  <v-app>
    <v-app-bar app clipped-left dense color="primary" dark>
      <div class="d-flex align-center">
        <v-img src="@/assets/pp-outline.png" transition="scale-transition" width="32" />
      </div>

      <v-spacer></v-spacer>

      <v-btn icon title="contact Paul">
        <v-icon>mdi-email</v-icon>
      </v-btn>

      <v-btn icon title="Paul's LinkedIn account">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>

      <v-btn icon title="Paul's Github account">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer :dark="darkMode" app clipped v-model="drawer" :mini-variant="mini" permanent
      :class="{'darkBackground': darkMode, 'lightBackground': !darkMode}"
    >
      <v-list-item class="px-2">
        <v-btn icon :color="accentColor" @click.stop="mini = !mini">
          <v-icon v-if="mini" title="expand drawer">mdi-chevron-right</v-icon>
          <v-icon v-else title="minimize drawer">mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

        <v-list nav dense>
          <v-list-item-group
            v-model="selectedItem"
            color="warning">
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              @click="$router.push({name: item.routeName})"
            >
              <v-list-item-icon>
                <v-icon :title="item.title">
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      

      <section v-if="!mini">
        <v-divider></v-divider>
        <v-list-item dense>
          <v-list-item-content class="pa-0 px-2">
            <v-switch v-model="darkMode" :label="darkMode ? 'Dark Mode': 'Light Mode'" hide-details dense />
          </v-list-item-content>
        </v-list-item>
      </section>

    </v-navigation-drawer>

    <v-main :class="{'darkBackground': darkMode, 'lightBackground': !darkMode}">
      <v-container fluid>
        <transition name="fade-transition" mode="out-in">
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </v-container>

    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {},

  data: () => ({
    selectedItem: 0,
    darkMode: false,
    accentColor: "orange darken-2",
    items: [
      { title: 'About Me', icon: 'mdi-account', routeName: "Home" },
      { title: 'Home DIY', icon: 'mdi-hammer-screwdriver', routeName: "Diy" },
      { title: 'Home Proj Videos', icon: 'mdi-play-circle', routeName: "Videos" },
      { title: 'Home Proj Photos', icon: 'mdi-image', routeName: "Gallery" },
      { title: 'My Certificates', icon: 'mdi-medal', routeName: "MyCerts" },
    ],
    mini: true,
  }),

  methods: {}
};
</script>

<style lang="scss" scoped>
.clickable {
  cursor: pointer;
}

.darkBackground {
  background-color: #363636;
  color: #F4F4F4;
}

.lightBackground {
  background-color: #D3E6FF;
  // color: #F4F4F4;
}

.maxHeight {
  min-height: 50%;
}
</style>
