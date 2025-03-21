<template>
  <div class="home">
    <!-- Header Component -->
    <Header />

    <!-- Banner Component -->
    <Banner />

    <!-- Product List Component -->
    <ProductList />

    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
// Import các component mà bạn đã tạo trước đó
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import ProductList from '@/components/ProductList.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    ProductList,
    Footer
  }
}
</script>

<style scoped>
/* Các kiểu dáng CSS riêng cho trang Home (nếu cần) */
.home {
  font-family: Arial, sans-serif;
}
</style>
