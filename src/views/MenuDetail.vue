<template>
<div class="py-6">
  <div class="container">
      <div class="row m-3 pb-6 border-bottom">
        <div class="col-lg-6">
            <img src="https://images.unsplash.com/photo-1627308595216-439c00ade0fe?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
            class="menu-detail-img">
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-between">
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">全部餐點</a></li>
                    <li class="breadcrumb-item"><a href="#">三明治系列</a></li>
                    <li class="breadcrumb-item" aria-current="page" active><a href="#">燻鮭魚酪梨開放三明治 </a></li>
                </ol>
            </nav>
            <div class="my-3">
                <h2 class="text-primary fw-bolder  font-NotoSerif my-5">燻鮭魚酪梨開放三明治</h2>
                <p class="mb-3">經典煙燻鮭魚搭配新鮮、營養的酪梨,同時補充平時生活不易取得的Omega-3脂肪酸以及維生素D,兩種新鮮食材搭配恰到好處,給你精神滿滿的一天</p>
                <p class="fw-bold fs-3">NT: 80 $</p>
                <div class="d-flex justify-content-between mb-3">
                    <p>數量</p>
                    <div class="numberCal">
                        <button class="btn" type="button" @click="qty--">-</button>
                        <span class="ms-3 me-3 fw-bold">{{ qty }}</span>
                        <button class="btn" type="button" @click="qty++">+</button>
                    </div>
                </div>
                <div class="d-grid gap-2 mb-3">
                    <button class="btn btn-primary py-3" type="button"
                      @click.prevent="addCart(item.id, item)"
                      >加入購物車</button>
                </div>
                <div class="mx-auto d-flex">
                    <button type="button" class="btn mx-auto d-flex">
                        <span class="material-symbols-outlined material-symbols-outlined-fill">
                            favorite
                        </span>
                        <span class="ms-3">加入收藏清單</span>
                    </button>

                </div>
            </div>
        </div>
      </div>
      <!-- 近期瀏覽 -->
      <div class="my-7">
        <h2 class="text-center text-primary fw-bolder  font-NotoSerif">近期瀏覽</h2>

            <!-- Swiper -->
        <div class="swiper menuDetailswiper my-5">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://images.unsplash.com/photo-1525184782196-8e2ded604bf7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://images.unsplash.com/photo-1525184782196-8e2ded604bf7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="https://images.unsplash.com/photo-1525184782196-8e2ded604bf7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                </div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
            </div>
        <div class="swiper-pagination mt-3"></div>

        </div>

    </div>
  </div>
</div>
</template>
<script>
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      product: {},
      qty: 1
    }
  },
  methods: {
    addCart (id, item) {
      console.log(id)
      this.productTemp = item
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      const postData = {
        data: {
          product_id: id,
          qty: 1
        }
      }
      this.$http.post(url, postData)
        .then((res) => {
          console.log(res)
          this.$refs.addCartToast.show()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
