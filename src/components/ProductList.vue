<template>
  <section class="products">
    <h2>Hàng Sẵn Có</h2>
    <div id="product-list" class="product-list">
      <div v-for="product in products" :key="product.id" class="product-item">
        <img :src="product.image" alt="Product" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} USD</p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],  // Danh sách sản phẩm
      loading: true, // Trạng thái tải
      error: null,   // Trạng thái lỗi
    };
  },
  created() {
    this.fetchProducts();  // Gọi hàm khi component được tạo ra
  },
  methods: {
    async fetchProducts() {
      try {
        // Thực hiện gọi API để lấy danh sách sản phẩm
        const response = await axios.get('http://localhost:8080/general/products');

        // Gán dữ liệu nhận được vào biến products
        this.products = response.data;

        // Đặt loading là false khi dữ liệu đã được tải xong
        this.loading = false;
      } catch (error) {
        // Xử lý lỗi nếu có
        this.error = 'Có lỗi xảy ra khi tải dữ liệu!';
        this.loading = false;
      }
    }
  },
  filters: {
    currency(value) {
      if (!value) return '';
      return value.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'USD'
      });
    }
  }
};
</script>

<style scoped>
/* CSS cho Product List */
</style>
