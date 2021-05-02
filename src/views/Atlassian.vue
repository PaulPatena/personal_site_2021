<template>
  <fragment>
    <span class="pop--error">Hello World</span>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
//import {mapGetters, mapMutations} from 'vuex';

export default {
  name: '',
  data: () => ({
    status: "loading"
  }),
  computed: {

  },
  methods: {

  },
  created: () => {
    this.status = "successfully loaded"
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