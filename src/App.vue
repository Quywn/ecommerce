<template>
  <div id="app">
    <Header />
    <Banner />
    <ProductList />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Banner from './components/Banner.vue';
import ProductList from './components/ProductList.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    ProductList,
    Footer
  }
}
</script>

<style>
/* CSS chung cho ứng dụng */
</style>
