<template>
  <fragment>
    <p class="pop--error">Hello World</p>
    {{status}}
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
// import {mapGetters, mapMutations, mapActions} from 'vuex';
// import HelloWorld from "../components/HelloWorld.vue"

export default {
  name: 'FIXME',
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
    Fragment
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