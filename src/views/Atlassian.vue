<template>
  <v-container fluid>
    <p class="pop--error">Hello World</p>
    {{status}}
  </v-container>
</template>

<script>
// import {mapGetters, mapMutations, mapActions} from 'vuex';
// import HelloWorld from "../components/HelloWorld.vue"

export default {
  name: 'Atlassian',
  data: () => ({
    status: "loading"
  }),
  props: {
    x: {type: Number, default: 0}
  },
  computed: {

  },
  methods: {

  },
  created: function() {
    this.status = "successfully loaded";
  },
  components: {
  }

}
</script>

<style lang="scss" scoped>
.pop {
  font-size: 20px;
}

.pop--error {
  @extend .pop;
  color: red;
}
</style>