<template>
  <h1>修改會員資料</h1>
  <!-- <LoadingView :active="isLoading" /> -->
  <h4 class="text-center my-5">修改會員資料</h4>
    <div class="col-8 col-md-5 col-lg-3 border border-gray box-shadow-gray-300 mx-auto">
      <form id="modifyMemberForm" class="pt-5 px-3">
        <div class="js-inputList"></div>
          <label for="username" class="mb-1">姓名</label>
          <input type="text" id="username" class="w-100 mb-5 bg-transparent py-1 border border-primary">
          <label for="phoneNumber" class="mb-1">手機號碼</label>
          <input type="tel" id="phoneNumber" class="w-100 mb-5 bg-transparent py-1 border border-primary">
          <label for="email" class="mb-1">信箱</label>
          <input type="email" id="email" class="w-100 mb-8 bg-transparent py-1 border border-primary">
        <div class="js-saveGroup d-flex justify-content-between mb-8">
          <button type="button" class="btn btn-outline-primary px-4 px-md-7">取消</button>
          <button type="button" class="js-saveBtn btn btn-primary px-4 px-md-7">儲存</button>
        </div>
      </form>
    </div>
</template>

<script>

export default {
}
</script>

<style>
.box-shadow-gray-300 {
  box-shadow: 1px 1px 3px #8B8B8B;
}
</style>
