<template>
  <section class="banner">
    <img :src="bannerImage" alt="Banner Shop" />
  </section>
</template>

<script>
import bannerImage from '@/assets/img/design/banner.png';  // Đảm bảo đường dẫn đúng

export default {
  name: 'Banner',
  data() {
    return {
      bannerImage
    };
  }
}
</script>

<style scoped>
/* CSS cho Banner */
</style>
