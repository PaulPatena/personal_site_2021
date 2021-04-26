<template>
  <v-app>
    <v-app-bar app clipped-left dense color="primary" dark>
      <div class="d-flex align-center">
        <v-img src="@/assets/pp-outline.png" transition="scale-transition" width="32" />
      </div>

      <v-spacer></v-spacer>

      <v-btn icon title="send Paul an email">
        <v-icon>mdi-email</v-icon>
      </v-btn>

      <v-btn icon title="Paul's LinkedIn account">
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>

      <v-btn icon title="Paul's Github account">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer :dark="darkMode" app clipped v-model="drawer" :mini-variant.sync="mini" permanent>
      <v-list-item class="px-2">
        <v-btn icon color="primary" @click.stop="mini = !mini">
          <v-icon v-if="mini" title="expand drawer">mdi-chevron-right</v-icon>
          <v-icon v-else title="minimize drawer">mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-group v-for="entry in navigationEntries" :key="entry.key" v-model="entry.active" :prepend-icon="entry.icon" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{entry.text}}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="childPage in entry.children" :key="childPage.key">
            <v-list-item-content>
              <v-list-item-title>{{childPage.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-group>
        <!-- <v-list-item v-for="entry in navigationEntries" :key="entry.key" link>
          <v-list-item-icon :title="entry.text">
            <v-icon>{{ entry.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ entry.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
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


    <v-main :class="{'darkBackground': darkMode}">
      <!-- <HelloWorld /> -->
      <v-container fluid>
        <v-row>
          <v-col cols=12>
            <v-card class="pa-4" :dark="darkMode">
              <h1>School Manager goes to Vue and Google MD</h1>
              <h2>by Paul</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis vitae leo consequat suscipit. Nam auctor tellus vestibulum dui vehicula tempor. Nunc ipsum ligula, iaculis eget egestas nec, ultrices ut quam. Donec vehicula cursus lectus, nec interdum risus feugiat non. Nam in nulla eleifend, pulvinar lacus eu, blandit odio. In auctor sem et elit elementum, ac mattis nulla interdum. Suspendisse at lectus at arcu ullamcorper fermentum. Donec sodales ornare eros eget accumsan. Quisque mattis velit ut volutpat porta. Curabitur vel orci at elit ultrices bibendum. In dapibus nulla sed lectus rutrum imperdiet et id nisi. Nam feugiat lacus quis erat iaculis, eget facilisis eros congue.</p>
              <p>Proin at nunc non mi scelerisque suscipit. Nullam ante ex, vehicula sit amet vulputate sit amet, tincidunt in nibh. Nullam consectetur, nunc eget accumsan convallis, augue est sollicitudin odio, a pulvinar risus sapien nec sem. Praesent bibendum, nunc nec sodales porta, justo nisl vulputate sem, nec dictum lacus ipsum eget ex. Aenean venenatis commodo enim et tristique. Donec lobortis eros neque, et porttitor nulla molestie eget. Donec vitae venenatis quam. Mauris commodo blandit cursus. Quisque nisl eros, rhoncus et dictum et, tincidunt eget diam.</p>
              <p>Suspendisse potenti. Aenean eget mauris hendrerit, ultrices justo quis, malesuada est. Mauris nulla neque, feugiat eget lectus et, tristique rutrum lorem. Duis eget scelerisque nunc, non faucibus massa. Sed at suscipit nisi, vel venenatis nibh. Curabitur tincidunt placerat arcu nec auctor. Vivamus feugiat justo quam, ac venenatis felis bibendum vitae. Vestibulum venenatis lacus nec leo lobortis malesuada. Nunc in orci bibendum, gravida nisi vel, iaculis lacus. Praesent dignissim eu risus id lobortis. Nulla imperdiet venenatis fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis arcu vitae ex tincidunt porta. Curabitur varius ante eget nisl cursus, nec pellentesque lorem pellentesque. Quisque eleifend auctor metus, eu placerat mauris.</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld,
  },

  data: () => ({
    darkMode: false,
    dropDownChoices: ["My Account", "Sign Out"],
    navigationEntries: [
      {
        text: "Statistics",
        icon: "mdi-chart-bar",
        key: "Statistics-Route",
        active: true,
        children: [
          { text: "Overview", key: "Statistics-Route-Overview" },
          { text: "Apps and Websites", key: "Statistics-Route-AppsAndWebsites" },
          { text: "Users", key: "Statistics-Route-Users" },
        ],
      },
      {
        text: "Cyber Safety",
        icon: "mdi-shield-half-full",
        key: "CyberSafety-Route",
        active: false,
        children: [
          {text: "Overview", key: "CyberSafety-Route-Overview"},
          {text: "Activity and Compliance", key: "CyberSafety-Route-ActivityAndCompliance"},
          {text: "Red Flags", key: "CyberSafety-Route-RedFlags"},
          {text: "Searches", key: "CyberSafety-Route-Searches"},
          {text: "Videos", key: "CyberSafety-Route-Videos"},
          {text: "Mobile Apps", key: "CyberSafety-Route-MobileApps"},
          {text: "Videos", key: "CyberSafety-Route-Videos"},
        ]
      },
      { text: "Filtering", icon: "mdi-filter", key: "main-routes-3", active: false },
      { text: "Edge Networking", icon: "mdi-earth", key: "main-routes-4", active: false },
      { text: "Configuration", icon: "mdi-cog", key: "main-routes-5", active: false },
      { text: "Debugging", icon: "mdi-bug", key: "main-routes-6", active: false },
    ],
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home-city" },
      { title: "My Account", icon: "mdi-account" },
      { title: "Users", icon: "mdi-account-group-outline" },
    ],
    mini: true,
  }),
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

.maxHeight {
  min-height: 50%;
}
</style>
