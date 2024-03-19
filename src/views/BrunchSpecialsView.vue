<template>
<div class="py-6">
<div class="container">
<h1
class="py-3 text-center text-primary fw-bolder font-NotoSerif mb-auto"
>
| 精 選 早 午 餐 |

</h1>
</div>
</div>

<div class="d-none d-lg-block">
<!-- 健康能量餐 -->
<div class="bg-salad d-flex align-items-center py-7 mb-6 mb-lg-0">
  <div class="container d-none d-lg-block">
  <div class="row justify-content-end align-items-center">
  <div class="col-lg-5">
    <div class="text-center py-6">
        <h2 class="fw-bold font-NotoSerif mb-6">
        | 健 人 高 蛋 白 推 薦 |
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
<!-- Mobile -->
  <div class="container d-lg-none">
    <div class="bg-opcity">
      <div class="col-lg-5">
        <div class="">
          <div class="text-center py-6">
            <h2 class="fs-4 fw-bold font-NotoSerif mb-6">
              | 美 式 經 典 早 午 餐 |
            </h2>
            <p class="fs-6">
              品味濃郁的經典美式風味,讓您在悠閒的早午時光中享受豐盛的美味饗宴
            </p>
            <div class="m-5 brunch-menu-bg">
              <div class="d-flex justify-content-between w-100">
                <h5 class="text-yellow-300 fw-bold font-NotoSerif">
                  經典花生培根牛肉堡
                </h5>
                <button class="btn btn-yellow-300" type="button">
                  加入購物車
                </button>
              </div>
            </div>
            <div class="m-5 brunch-menu-bg">
              <div class="d-flex justify-content-between w-100">
                <h5 class="text-yellow-300 fw-bold font-NotoSerif">
                  香煎牛肉培根蛋吐司
                </h5>
                <button class="btn btn-yellow-300" type="button">
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
<!--END 健康能量餐 -->
<!-- 美式經典早午餐 -->
<div
class="d-flex justify-content-between align-items-center mb-6 mb-lg-0"
>
<div class="container d-none d-lg-block">
<div class="row align-items-center justify-content-center">
<div class="col-lg-8">
  <div class="text-center py-6">
      <h2 class="fw-bold font-NotoSerif mb-6">
      | 美 式 經 典 早 午 餐 |
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
<!-- Mobile -->
<div class="container d-lg-none">
<div class="bg-opcity">
    <div class="col-lg-5">
    <a href="4-1_menu-salad.html?menu=Burger" class="">
        <div class="text-center py-6">
        <h2 class="fs-4 fw-bold font-NotoSerif mb-6">
            | 漢 堡 系 列 |
        </h2>
        <p class="fs-6">
            漢堡作為經典的早午餐品項之一，各種變化和創新也不斷出現,例如素食漢堡、特色漢堡、健康漢堡等,我們能為您提供最適合您喜好的餐點
        </p>
        </div>
    </a>
    </div>
</div>
</div>
</div>
</div>
<!--END 美式經典早午餐 -->
<!-- 素食 -->
<div class="bg-pasta d-flex align-items-center py-7 mb-6 mb-lg-0">
<div class="container d-none d-lg-block">
<div class="row justify-content-end align-items-center">
<div class="col-lg-5">
    <div>
    <div class="text-center py-6">
        <h2 class="fw-bold font-NotoSerif mb-6">
        | 素 食 之 旅 套 餐 |
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
<!-- Mobile -->
<div class="container d-lg-none">
<div class="bg-opcity">
<div class="col-lg-5">
    <a href="4-1_menu-salad.html?menu=Pasta" class="">
    <div class="text-center py-6">
        <h2 class="fs-4 fw-bold font-NotoSerif mb-6">
        | 義 大 利 麵 系 列 |
        </h2>
        <p class="fs-6">
        常見的義大利麵有直麵、通心粉、斜管麵、螺旋麵等,搭配不同醬料如碎肉醬、青醬、海鮮醬等,形成豐富多樣的義大利麵料理
        </p>
    </div>
    </a>
</div>
</div>
</div>
</div>
<!--END 素食 -->
<!-- 豐盛早午餐組合 -->
<div
class="d-flex justify-content-between align-items-center mb-6 mb-lg-0"
>
<div class="container d-none d-lg-block">
<div class="row align-items-center justify-content-center">
<div class="col-lg-8">
    <div class="">
    <div class="text-center py-6">
        <h2 class="fw-bold font-NotoSerif mb-6">
        | 豐 盛 早 午 餐 組 合 |
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
<!-- Mobile -->
<div class="container d-lg-none">
<div class="bg-opcity">
    <div class="col-lg-5">
    <div >
        <div class="text-center py-6">
        <h2 class="fs-4 fw-bold font-NotoSerif mb-6">
            | 漢 堡 系 列 |
        </h2>
        <p class="fs-6">
            漢堡作為經典的早午餐品項之一，各種變化和創新也不斷出現,例如素食漢堡、特色漢堡、健康漢堡等,我們能為您提供最適合您喜好的餐點
        </p>
        </div>
      </div>
    </div>
</div>
</div>
</div>
</div>
<!--END 豐盛早午餐組合 -->
<!--Vue End -->
</div>
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
          console.log(this.apiData)
          Object.keys(this.specialsCombo).forEach((item) => {
            this.filter(item)
          })
          this.isLoading = false
        })
        .catch((err) => {
          console.log(err)
          this.isLoading = false
        })
    },
    filter (category) {
      const keywords = this.keyWords[category]
      this.specialsCombo[category] = this.apiData.filter((item) => {
        return keywords.some((keyword) => item.title === keyword)
      })
      console.log(this.specialsCombo)
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
