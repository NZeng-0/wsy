<template>
  <div class="nav_" @click="goIndex()"><b>X</b></div>

</template>
<script>
import {useRouter} from "vue-router";

export default {
  setup() {
    const router=useRouter();
    function goIndex() {
      router.push("/");
    }

    return {
      goIndex
    }
  }

}
</script>
<style>

</style>