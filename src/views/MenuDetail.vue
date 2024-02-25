<template>
<div class="py-6">
  <div class="container">
      <div class="row m-3 pb-6 border-bottom">
        <div class="col-lg-6">
            <img :src="product.imageUrl" alt=""
            class="menu-detail-img object-fit-cover">
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-between">
            <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><RouterLink to="/index">首頁</RouterLink></li>
                    <li class="breadcrumb-item">
                      <RouterLink :to="`/menuview/menulist?category=${product.category}`">
                        {{ categoryTitle[0]?.name }}系列
                      </RouterLink>
                    </li>
                    <li class="breadcrumb-item" aria-current="page" active>
                      <RouterLink :to="`/menuDetail/${product.id}`">{{ product.title }}</RouterLink>
                    </li>
                </ol>
            </nav>
            <div class="my-3">
                <h2 class="text-primary fw-bolder  font-NotoSerif my-5">{{ product.title }}</h2>
                <p class="mb-3">{{ product.description }}</p>
                <p class="fw-bold fs-3">NT:$ {{ product.price }} </p>
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
                      @click.prevent="addCart(product.id, product)"
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
<!-- <AddCartToast ref="AddCartToast"></AddCartToast> -->
</template>
<script>
import { RouterLink } from 'vue-router'

// import AddCartToast from '../components/AddCartToast.vue'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  // components: { AddCartToast },
  data () {
    return {
      product: {},
      categoryTitle: [],
      qty: 1,
      categoryTitleList: [
        {
          name: '沙拉',
          query: 'salad'
        },
        {
          name: '漢堡',
          query: 'burger'
        },
        {
          name: '三明治',
          query: 'sandwich'
        },
        {
          name: '早午餐',
          query: 'brunch'
        },
        {
          name: '義大利麵',
          query: 'pasta'
        },
        {
          name: '飲品',
          query: 'drink'
        }
      ]
    }
  },
  mounted () {
    console.log(this.$route)
    // 判斷當前的$route參數
    const { id } = this.$route.params
    this.$http.get(`${VITE_API}api/${VITE_PATH}/product/${id}`)
      .then((res) => {
        console.log(res)
        this.product = res.data.product
        // 找出目前分類的中文渲染畫面
        this.matchCategory()
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    addCart (id, item) {
      console.log(id)
      const url = `${VITE_API}/api/${VITE_PATH}/cart`
      const postData = {
        data: {
          product_id: id,
          qty: this.qty
        }
      }
      this.$http.post(url, postData)
        .then((res) => {
          console.log(res)
          this.$refs.AddCartToast.show()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    matchCategory () {
      this.categoryTitle = this.categoryTitleList.filter((item) => {
        return item.query === this.product.category
      })
    }
  },
  components: { RouterLink }
}
</script>
