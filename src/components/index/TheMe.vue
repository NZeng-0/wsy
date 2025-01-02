<script setup>

</script>

<template>
  <div class="main_nav">
    <div class="left">
      <img src="../../assets/images/logo.jpg" alt=""/>
      <span class="nickname">
        Design By BTXL
      </span>
    </div>
    <div class="right">
      <div class="actions">
        <button class="btn">
          Follow
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main_nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  /*line-height: 55px;*/
  align-items: center;
}

.main_nav .r_ {
  width: 100px;
  height: 30px;
  border-radius: 20px;
  background-color: black;
  color: #cccccc;
  text-align: center;
  line-height: 30px;
}

.right .left img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
}

.actions {
  cursor: pointer;
  .btn {
    cursor: pointer;
    display: block;
    width: 120px;
    height: 30px;
    background: none;
    border: 1px solid #786450;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    color: #786450;

    &:hover {
      background: #786450;
      color: #fff;
    }
  }
}

.left {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.left img {
  margin-right: 10px; /* 图片和文字之间的间距 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影 */
}

.nickname{
  font-size: 15px;
  font-weight: 600;
  font-style: italic; /* 设置斜体 */
}
</style>
