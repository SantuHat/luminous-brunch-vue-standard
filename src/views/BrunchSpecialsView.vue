<template>
<div class="py-6  bg-pink">
<div class="container">
<h1
class="py-3 text-center text-primary fw-bolder font-NotoSerif mb-auto"
>
| 精 選 早 午 餐 |

</h1>
</div>
</div>

<!-- 健康能量餐 -->
<!-- PC -->
<div class="d-none d-lg-block">
<div class="bg-salad d-flex align-items-center py-7 mb-0">
  <div class="container">
    <div class="row justify-content-end align-items-center">
    <div class="col-lg-5">
      <div class="text-center py-6">
          <h2 class="fw-bold font-NotoSerif mb-6">
          健 人 高 蛋 白 推 薦
          </h2>
          <p class="fs-6">
          我們提供多樣化的健康餐選擇，精選含有30g以上的蛋白質的熱門餐點，適合運動後需要快速補充營養的你
          </p>
          <div
            v-for="item in specialsCombo.highProteinMeal" :key="item.id"
          >
          <div class="m-5 brunch-menu-bg">
          <div class="d-flex justify-content-between w-100">
              <h5 class="text-yellow-300 fw-bold font-NotoSerif">
              {{ item.title }}
              </h5>
              <button
                class="btn btn-yellow-300" type="button"
                @click.prevent="addCart(item.id, item, 1)"
              >
              加入購物車
              </button>
          </div>
          </div>
          </div>
      </div>
    </div>
    </div>
  </div>
</div>
</div>
<!-- PC END-->
<!-- Mobile -->
<div class="container d-lg-none mb-5">
  <div class="row">
    <div class="col-12">
      <div class="text-center py-6">
          <h2 class="fs-3 fw-bold font-NotoSerif mb-6 text-cente">
            健 人 高 蛋 白 推 薦
          </h2>
          <p class="fs-7">
        我們提供多樣化的健康餐選擇，精選含有30g以上的蛋白質的熱門餐點，適合運動後需要快速補充營養的你
        </p>
      </div>
    </div>
    <div
        class="col-6"
        v-for="item in specialsCombo.highProteinMeal" :key="item.id"
      >
        <div class="p-0">
          <div class="card-menu w-100 h-100 d-flex  flex-column justify-content-between text-center">
  <div class="card-img object-fit">
    <RouterLink :to="`/menuDetail/${item.id}`">
      <img :src="item.imageUrl" alt="點擊可以查看餐點詳細資訊" class="object-fit-cover w-100" title="點擊可以查看餐點詳細資訊">
    </RouterLink>
  </div>
  <div class="text-primary d-flex flex-column
  justify-content-center justify-content-lg-between p-lg-4 p-1">
      <p class="text-center mb-3">{{item.title}}</p>
      <div class="d-flex justify-content-center align-baseline ">
        <p class="text-danger fw-bold">NT${{item.price}}</p>
        <del class="ms-3" v-if="item.origin_price">{{item.origin_price}}</del>
      </div>
  </div>
  <div class="d-grid">
    <button
      @click.prevent="addCart(item.id, item, 1)"
      class="btn btn-outline-primary py-3 d-flex justify-content-center align-items-center text-center"
      type="button"
      :disabled="item.id === status?.addCartLoading"
    >
      <div
        class="spinner-border text-secondary me-4" role="status"
        v-if="item.id === status?.addCartLoading"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
      <span class="d-none d-lg-block">加入購物車</span>
      <span        class="material-symbols-outlined me-1 d-lg-none">
            shopping_cart
      </span>
    </button>
  </div>
</div>
        </div>
    </div>
  </div>
</div>
<!-- Mobile END-->
<!--END 健康能量餐 -->

<!-- 美式經典早午餐 -->
<!-- PC -->
<div class="d-none d-lg-block">
<div
class="d-flex justify-content-between align-items-center"
>
  <div class="container">
  <div class="row align-items-center justify-content-center">
  <div class="col-lg-8">
    <div class="text-center py-6">
        <h2 class="fw-bold font-NotoSerif mb-6">
         美 式 經 典 早 午 餐
        </h2>
        <p class="fs-6 mb-6">
        品味濃郁經典美式風味,讓您在悠閒的早午時光中享受豐盛美味饗宴
        </p>
        <div
          v-for="item in specialsCombo.AmericanBrunch" :key="item.id"
        >
          <div class="mb-5 brunch-menu-bg bg-pink">
            <div class="d-flex justify-content-between w-100">
                <h5 class="text-yellow-300 fw-bold font-NotoSerif">
                {{ item.title }}
                </h5>
                <button
                @click.prevent="addCart(item.id, item, 1)"
                class="btn btn-yellow-300" type="button">
                加入購物車
                </button>
            </div>
          </div>
        </div>
    </div>
  </div>
  </div>
  </div>
  <div class="bg-burger d-flex align-items-center w-100 py-7">
  </div>
</div>
</div>
<!-- PC END-->

<!-- Mobile -->
<div class="container d-lg-none mb-5">
  <div class="row">
    <div class="col-12">
      <div class="text-center py-6">
          <h2 class="fs-3 fw-bold font-NotoSerif mb-6 text-cente">
            美 式 經 典 早 午 餐
          </h2>
          <p class="fs-7">
            品味濃郁經典美式風味,讓您在悠閒的早午時光中享受豐盛美味饗宴
          </p>
      </div>
    </div>
    <div
        class="col-6"
        v-for="item in specialsCombo.AmericanBrunch" :key="item.id"
      >
        <RouterLink
          :to="`/menuDetail/${item.id}`"
          class="card-menu w-100 h-100 d-flex  flex-column justify-content-between text-center">
          <div class="card-img object-fit">
            <img :src="item.imageUrl" alt="點擊可以查看餐點詳細資訊" class="object-fit-cover w-100" title="點擊可以查看餐點詳細資訊">
          </div>
          <div class="text-primary d-flex flex-column
          justify-content-center justify-content-lg-between p-lg-4 p-1">
              <p class="text-center mb-3">{{item.title}}</p>
              <div class="d-flex justify-content-center align-baseline ">
                <p class="text-danger fw-bold">NT${{item.price}}</p>
                <del class="ms-3" v-if="item.origin_price">{{item.origin_price}}</del>
              </div>
          </div>
          <div class="d-grid">
            <button
              @click.prevent="addCart(item.id, item, 1)"
              class="btn btn-outline-primary py-3 d-flex justify-content-center align-items-center text-center"
              type="button"
              :disabled="item.id === status?.addCartLoading"
            >
              <div
                class="spinner-border text-secondary me-4" role="status"
                v-if="item.id === status?.addCartLoading"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              <span class="d-none d-lg-block">加入購物車</span>
              <span        class="material-symbols-outlined me-1 d-lg-none">
                    shopping_cart
              </span>
            </button>
          </div>
        </RouterLink>
    </div>
  </div>
</div>
<!-- Mobile END-->
<!--END 美式經典早午餐 -->

<!-- 素食 -->
<!-- PC -->
<div class="d-none d-lg-block">
<div class="bg-pasta d-flex align-items-center py-7 mb-0">
  <div class="container">
    <div class="row justify-content-end align-items-center">
    <div class="col-lg-5">
      <div class="text-center py-6">
          <h2 class="fw-bold font-NotoSerif mb-6">
            鮮 蔬 素 食 套 餐
          </h2>
          <p class="fs-6">
            打造獨特口味的素食套餐,讓您沉浸在健康美味的素食世界中
          </p>
          <div
            v-for="item in specialsCombo.vegetarianDiet" :key="item.id"
          >
          <div class="m-5 brunch-menu-bg">
          <div class="d-flex justify-content-between w-100">
              <h5 class="text-yellow-300 fw-bold font-NotoSerif">
              {{ item.title }}
              </h5>
              <button
                class="btn btn-yellow-300" type="button"
                @click.prevent="addCart(item.id, item, 1)"
              >
              加入購物車
              </button>
          </div>
          </div>
          </div>
      </div>
    </div>
    </div>
  </div>
</div>
</div>
<!-- PC END-->
<!-- Mobile -->
<div class="container d-lg-none mb-5">
  <div class="row">
    <div class="col-12">
      <div class="text-center py-6">
          <h2 class="fs-3 fw-bold font-NotoSerif mb-6 text-cente">
            素 食 之 旅 套 餐
          </h2>
          <p class="fs-7">
            打造獨特口味的素食套餐,讓您沉浸在健康美味的素食世界中
        </p>
      </div>
    </div>
    <div
        class="col-6"
        v-for="item in specialsCombo.vegetarianDiet" :key="item.id"
      >
        <div class="card-menu w-100 h-100 d-flex  flex-column justify-content-between text-center">
<div class="card-img object-fit">
  <RouterLink :to="`/menuDetail/${item.id}`">
    <img :src="item.imageUrl" alt="點擊可以查看餐點詳細資訊" class="object-fit-cover w-100" title="點擊可以查看餐點詳細資訊">
  </RouterLink>
</div>
<div class="text-primary d-flex flex-column
justify-content-center justify-content-lg-between p-lg-4 p-1">
    <p class="text-center mb-3">{{item.title}}</p>
    <div class="d-flex justify-content-center align-baseline ">
      <p class="text-danger fw-bold">NT${{item.price}}</p>
      <del class="ms-3" v-if="item.origin_price">{{item.origin_price}}</del>
    </div>
</div>
<div class="d-grid">
  <button
    @click.prevent="addCart(item.id, item, 1)"
    class="btn btn-outline-primary py-3 d-flex justify-content-center align-items-center text-center"
    type="button"
    :disabled="item.id === status?.addCartLoading"
  >
    <div
      class="spinner-border text-secondary me-4" role="status"
      v-if="item.id === status?.addCartLoading"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <span class="d-none d-lg-block">加入購物車</span>
    <span        class="material-symbols-outlined me-1 d-lg-none">
          shopping_cart
    </span>
  </button>
</div>
        </div>
    </div>
  </div>
</div>
<!-- Mobile END-->
<!--END 素食 -->

<!-- 豐盛早午餐組合 -->
<!-- PC -->
<div class="d-none d-lg-block">
<div
class="d-flex justify-content-between align-items-center"
>
  <div class="container">
  <div class="row align-items-center justify-content-center">
  <div class="col-lg-8">
      <div class="">
      <div class="text-center py-6">
          <h2 class="fw-bold font-NotoSerif mb-6">
           豐 盛 早 午 餐 組 合
          </h2>
          <p class="fs-6 mb-6">
          精心搭配多樣美食元素,包括新鮮蔬果、蛋品、麵包,打造出一場豐盛的早午餐盛
          </p>
          <div class=""
            v-for="item in specialsCombo.sumptuousBrunch" :key="item.id"
          >
            <div class="mb-5 brunch-menu-bg bg-pink">
              <div class="d-flex justify-content-between w-100">
                  <h5 class="text-yellow-300 fw-bold font-NotoSerif">
                  燻鮭魚乾酪班尼迪克蛋
                  </h5>
                  <button
                  @click.prevent="addCart(item.id, item, 1)"
                  class="btn btn-yellow-300" type="button">
                  加入購物車
                  </button>
              </div>
            </div>
          </div>
      </div>
      </div>
  </div>
  </div>
  </div>
  <div class="bg-sandwich d-flex align-items-center w-100 py-7">
  </div>
</div>
</div>
<!-- PC END-->
<!-- Mobile -->
<div class="container d-lg-none mb-5">
  <div class="row">
    <div class="col-12">
      <div class="text-center py-6">
          <h2 class="fs-3 fw-bold font-NotoSerif mb-6 text-cente">
            豐 盛 早 午 餐 組 合
          </h2>
          <p class="fs-7">
            精心搭配多樣美食元素,包括新鮮蔬果、蛋品、麵包,打造出一場豐盛的早午餐盛
          </p>
      </div>
    </div>
    <div
        class="col-6"
        v-for="item in specialsCombo.sumptuousBrunch" :key="item.id"
      >
        <div class="card-menu w-100 h-100 d-flex  flex-column justify-content-between text-center">
      <div class="card-img object-fit">
        <RouterLink :to="`/menuDetail/${item.id}`">
          <img :src="item.imageUrl" alt="點擊可以查看餐點詳細資訊" class="object-fit-cover w-100" title="點擊可以查看餐點詳細資訊">
        </RouterLink>
      </div>
<div class="text-primary d-flex flex-column
justify-content-center justify-content-lg-between p-lg-4 p-1">
    <p class="text-center mb-3">{{item.title}}</p>
    <div class="d-flex justify-content-center align-baseline ">
      <p class="text-danger fw-bold">NT${{item.price}}</p>
      <del class="ms-3" v-if="item.origin_price">{{item.origin_price}}</del>
    </div>
</div>
<div class="d-grid">
  <button
    @click.prevent="addCart(item.id, item, 1)"
    class="btn btn-outline-primary py-3 d-flex justify-content-center align-items-center text-center"
    type="button"
    :disabled="item.id === status?.addCartLoading"
  >
    <div
      class="spinner-border text-secondary me-4" role="status"
      v-if="item.id === status?.addCartLoading"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
    <span class="d-none d-lg-block">加入購物車</span>
    <span        class="material-symbols-outlined me-1 d-lg-none">
          shopping_cart
    </span>
  </button>
</div>
        </div>
    </div>
  </div>
</div>
<!-- Mobile END-->

<!--END 豐盛早午餐組合 -->
<!--Vue End -->

<AddCartToast ref="addCartToast"></AddCartToast>

<FooterView />
</template>

<script>
import FooterView from '@/components/FooterView.vue'

import { mapActions, mapState } from 'pinia'
import AddCartToast from '@/components/AddCartToast.vue'
import cartStore from '@/stores/cartStore.js'
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  components: {
    FooterView, AddCartToast
  },
  data () {
    return {
      apiData: [],
      keyWords: {
        highProteinMeal: ['舒肥雞胸沙拉', '義式牛肉寬管麵'],
        AmericanBrunch: ['經典花生培根牛肉堡', '香煎牛肉培根蛋吐司'],
        vegetarianDiet: ['酪梨穀物能量沙拉', '酪梨太陽蛋酸種吐司'],
        sumptuousBrunch: ['燻鮭魚乾酪班尼迪克蛋', '羅勒番茄蛋開放式吐司']
      },
      specialsCombo: {
        highProteinMeal: [],
        AmericanBrunch: [],
        vegetarianDiet: [],
        sumptuousBrunch: []
      },
      isLoading: false
    }
  },
  mounted () {
    this.getProducts()
  },
  watch: {
    cartUpdated () {
      this.$refs.addCartToast.show()
      this.setCartUpdate()
    }
  },
  methods: {
    ...mapActions(cartStore, ['addCart', 'setCartUpdate']),
    getProducts (category = '') {
      this.isLoading = true
      this.$http.get(`${VITE_API}/api/${VITE_PATH}/products/all`)
        .then((Response) => {
          this.apiData = Object.values(Response.data.products)
          Object.keys(this.specialsCombo).forEach((item) => {
            this.filter(item)
          })
          this.isLoading = false
        })
        .catch((err) => {
          alert(err)
          this.isLoading = false
        })
    },
    filter (category) {
      const keywords = this.keyWords[category]
      this.specialsCombo[category] = this.apiData.filter((item) => {
        return keywords.some((keyword) => item.title === keyword)
      })
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'status', 'cartUpdated', 'cartData'])
  }
}
</script>

<style>
.bg-menu {
  background-image: url(index-menu-1.jpg);
  background: no-repeat cover ;
  height: 500px;
}
.bg-salad {
    background-image: url(salad.jpg);
    background-repeat: no-repeat ;
    background-size: cover;
    background-position:  center;
    height: 500px;
}
.bg-burger {
  background-image: url(burger2.jpg);
  background-repeat: no-repeat  ;
  background-size: cover;
  background-position:  right;
  object-fit: cover;
  height: 500px;

}
.bg-sandwich {
  background-image: url(sandwich.jpg);
  background-repeat: no-repeat ;
  background-size: cover;
  background-position:  right;
  height: 500px;
  object-fit: cover;
}
.bg-pasta {
  background-image: url(pasta.jpg);
  background: no-repeat cover ;
  background-position:  center;
  height: 500px;

}
.bg-brunch {
  background-image: url(brunch1.jpg);
  background-repeat: no-repeat  ;
  background-size: cover;
  background-position:  center;
  height: 500px;
  object-fit: cover;
}
.bg-juice {
  background-image: url(juice.jpg);
    background-repeat: no-repeat ;
    background-size: cover;
   background-position:  right;
    height: 500px;
    object-fit: cover;
}
.bg-opcity {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(2px);
  padding: 24px;
}
</style>
