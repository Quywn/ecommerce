<template>
  <header>
    <div class="header-container">
      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/img/design/logo.png" alt="Logo" />
      </div>
      <!-- Menu list -->
      <button class="menu-toggle">
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div class="menu-container">
        <nav>
          <ul id="menuList">
            <li><a href="#">TRANG CHỦ</a></li>
            <li><a href="#">GIỚI THIỆU</a></li>
            <li><a href="#">DANH MỤC</a></li>
            <li><a href="#">TIN TỨC</a></li>
            <li><a href="#">TÀI KHOẢN</a></li>
          </ul>
        </nav>
      </div>
      <!-- Header right: Search and Cart -->
      <!-- Header right: Search and Cart -->
      <div class="header-right">
        <div class="search-box">
          <i id="search-icon" class="fa fa-search" @click="toggleSearchInput"></i>
          <label for="search-input"></label>
          <input v-show="isSearchVisible" id="search-input" type="text" placeholder="Tìm kiếm...">
        </div>
        <div class="cart">
          <button id="cart-btn">
            <i class="fa fa-shopping-cart"></i>
            <span id="cart-count">{{ cartCount }}</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchVisible: false,
    };
  },
  methods: {
    toggleSearchInput() {
      this.searchVisible = !this.searchVisible;
    },
  },
};
</script>

<style scoped>
/* Thêm các kiểu dáng cần thiết */
</style>