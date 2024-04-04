<template>
<div class="py-6">
  <div class="container">
    <div class="row py-7 border-bottom">
      <div class="col-lg-6 d-none d-lg-block text-center">
          <img :src="product.imageUrl" alt="餐點圖片"
          class="menu-detail-img object-fit-cover">
      </div>
      <div class="col-lg-6">
        <div class="d-flex flex-column justify-content-between">
          <nav>
              <ol class="breadcrumb">
                  <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
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
              <h2 class="text-primary fw-bolder  font-NotoSerif my-4">{{ product.title }}</h2>
              <div class="d-lg-none mb-4">
                  <img :src="product.imageUrl" alt="餐點圖片"
                  class="menu-detail-img object-fit-cover">
              </div>
              <p class="mb-4">{{ product.description }}</p>
              <p class="fw-bold fs-3">NT:$ {{ product.price }} </p>
              <div class="d-flex justify-content-between mb-3">
                  <p>數量</p>
                  <div class="numberCal">
                      <button class="btn btn-primary" type="button" @click="editQty--"
                        :disabled="editQty==1"
                      >–</button>
                      <span class="ms-3 me-3 fw-bold">{{ editQty }}</span>
                      <button class="btn btn-primary" type="button" @click="editQty++">+</button>
                  </div>
              </div>
              <div class="d-grid gap-2 mb-3">
                <button class="btn btn-primary py-3 d-flex justify-content-center align-items-center text-center" type="button"
                  :disabled="product.id === status?.addCartLoading"
                  @click.prevent="addCart(product.id, product, editQty)"
                  >
                  <div
                      class="spinner-border text-secondary me-4" role="status"
                      v-if="product.id === status?.addCartLoading"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  加入購物車
                </button>
              </div>
              <!-- 收藏清單按鈕 -->
              <!-- <div class="mx-auto d-flex">
                  <button type="button" class="btn mx-auto d-flex">
                      <span class="material-symbols-outlined material-symbols-outlined-fill">
                          favorite
                      </span>
                      <span class="ms-3">加入收藏清單</span>
                  </button>
              </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="row py-7">
      <h2 class="text-center text-primary fw-bolder font-NotoSerif mb-7">常見問題</h2>
      <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item py-4">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Q1. 是否有提供素食飲食需求的選項？
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">是的，Luminous早午餐訂餐網站會提供素食、無麩質、無奶製品等特殊飲食需求的選項。</div>
    </div>
  </div>
  <div class="accordion-item py-4">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Q2. 請問可以客製化餐點嗎？
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">是的，Luminous早午餐訂餐網站允許用戶自訂餐點，例如添加特定的配料或調整食物的份量。</div>
    </div>
  </div>
  <div class="accordion-item py-4">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Q3. 如何取消或修改訂單？
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">大多數情況下，您可以在截止日期之前取消或修改您的訂單。通常，這可以通過在您的帳戶頁面上進行操作完成。</div>
    </div>
  </div>
</div>
    </div>
    <!-- 近期瀏覽 -->
    <div class="py-7">
      <h2 class="text-center text-primary fw-bolder font-NotoSerif mb-7">熱門餐點</h2>
      <!-- Swiper -->
      <MealDetailSwiper/>
    </div>
  </div>
</div>
<AddCartToast ref="addCartToast"></AddCartToast>

<FooterView></FooterView>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import AddCartToast from '@/components/AddCartToast.vue'
import FooterView from '@/components/FooterView.vue'
import MealDetailSwiper from '@/components/MealDetailSwiper.vue'
import cartStore from '@/stores/cartStore'
// import AddCartToast from '../components/AddCartToast.vue'
const { VITE_API, VITE_PATH } = import.meta.env
export default {
  components: { AddCartToast, FooterView, MealDetailSwiper },
  data () {
    return {
      product: {},
      editQty: 1,
      categoryTitle: [],
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
    // 判斷當前的$route參數
    const { id } = this.$route.params
    this.$http.get(`${VITE_API}api/${VITE_PATH}/product/${id}`)
      .then((res) => {
        this.product = res.data.product
        // 找出目前分類的中文渲染畫面
        this.matchCategory()
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    ...mapActions(cartStore, ['addCart', 'setCartUpdate', 'getProduct']),
    matchCategory () {
      this.categoryTitle = this.categoryTitleList.filter((item) => {
        return item.query === this.product.category
      })
    },
    getProduct () {
      const { id } = this.$route.params
      this.$http.get(`${VITE_API}api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
          // 找出目前分類的中文渲染畫面
          this.matchCategory()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapState(cartStore, ['status', 'qty', 'cartUpdated'])
  },
  watch: {
    '$route.query': {
      handler () {
        this.getProduct()
      },
      deep: true
    },
    cartUpdated () {
      // 監聽store裡面加入購物車的方法，觸發的時候會同時更新這個變數的狀態，所以可以監聽值的變化，
      // 在這邊打開吐司元件，開啟後再把這個狀態透過事件改成false
      this.$refs.addCartToast.show()
      this.setCartUpdate()
    }
  }
}
</script>
