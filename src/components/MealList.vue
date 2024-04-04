<template>
  <div class="meals">
    <ul class="meals-content">
      <!-- <li class="meals-item-header">
        <div class="commodity-wrap d-flex">
          <div class="commodity-wrap-img"></div>
          <div class="commodity-wrap-content">
            <div class="product-title commodity-wrap-content-item">商品</div>
            <div class="product-price commodity-wrap-content-item">單價</div>
          </div>
          <div class="commodity-wrap-control">
            <div class="product-qty">數量</div>
            <div class="product-subtotal">小計</div>
            <div class="product-delete-btn"></div>
          </div>
        </div>
      </li> -->
      <li class="meals-item-main" v-for="(item) in list" :key="item.product_id">
        <div class="commodity-wrap d-flex">
          <div class="commodity-wrap-img">
            <img
            :src="item.product.imageUrl"
            class="me-2 toast-img" :alt="item.product.imageUrl">
          </div>
          <div class="commodity-wrap-content">
            <div class="product-title commodity-wrap-content-item">
              {{ item.product.title }}
            </div>
            <div class="product-price commodity-wrap-content-item">
              NT$ {{ item.product.price }}
            </div>
          </div>
          <div class="commodity-wrap-control">
            <div class="product-qty">
              <button v-if="step === 1 || step === null" @click="item.qty--; putCart(item.id, item.qty)" class="btn btn-primary fw-bold" type="button" :disabled="item.qty === 1">–</button>
              <span class="mx-3">
                {{ `${step === 2 || step === 3 ? '×': ''}${item.qty}` }}
              </span>
              <button v-if="step === 1 || step === null" @click="item.qty++; putCart(item.id, item.qty)" class="btn btn-primary fw-bold" type="button">+</button>
            </div>
            <div class="product-subtotal">
              NT$ {{ item.total }}
            </div>
            <div class="product-delete-btn">
              <button v-if="step === 1 || step === null" @click="delCart(item.id)" type="button" class="btn btn-primary">
              <span class="material-symbols-outlined px-2 px-md-0 pt-1">
                delete
              </span>
            </button>
            </div>
          </div>
        </div>

      </li>
    </ul>
    <div class="text-center pb-3" v-if="step">
      <span class="fw-bold">總金額NT$ {{ total }}</span>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '../stores/cartStore'
import orderStore from '../stores/orderStore'
export default {
  name: 'MealList',
  props: {
    step: {
      type: Number || null,
      default: 1
    },
    list: {
      type: Array,
      default () { return [] }
    },
    total: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapActions(cartStore, ['delCart', 'putCart'])
  },
  computed: {
    ...mapState(orderStore, ['orderItem', 'orderTotal']),
    ...mapState(cartStore, ['carts', 'final_total'])
  },
  data () {
    return {
      // list: this.step === 3 ? this.orderItem : this.carts,
      isLoading: false
      // total: 0
    }
  },
  watch: {
    // 購物明細
    carts () {
      if (this.step === 1 || this.step === 2) {
        // this.list = this.carts
        // this.total = this.final_total
      }
    },
    // 訂餐明細
    orderItem () {
      if (this.step === 3) {
        // this.list = this.orderItem
        // this.total = this.orderTotal
      }
    }
  }
}
</script>
<style>
.meals {
  width: 100%;
  border: 2px solid var(--bs-gray);
}

.meals-content {
  padding-inline-start: 0;
  list-style-type: none;
}
.meals-content .meals-item-header {
  background-color: #693b28;
  color: #fff;
  padding: 10px;
  margin: 10px 0;
}
.meals-content .meals-item-main {
  background-color: #f4e9e2;
  padding: 10px;
  margin: 10px 0;
}

.commodity-wrap .commodity-wrap-content {
  display: flex;
  align-items: center;
  width: 47%;
}

.commodity-wrap .commodity-wrap-content .product-title {
  width: 70%;
}
.commodity-wrap .commodity-wrap-content .product-price {
  width: 30%;
}
.commodity-wrap .commodity-wrap-control {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 41%;
}
.dropdown-menu {
  .commodity-wrap-content {
    flex-direction: column;
    align-items: flex-start !important;
  }
  .commodity-wrap-content .product-title, .commodity-wrap-content .product-price {
    width: 100% !important;
  }
  .commodity-wrap-control {
    flex-direction: column;
  }
  .product-delete-btn button {
    border: none;
    --bs-btn-padding-x: 0;
    --bs-btn-padding-y: 0;
    background-color: transparent;
    --bs-btn-color: var(--bs-primary);
  }
}

@media (max-width: 767px) {
  .commodity-wrap-content {
    flex-direction: column;
    align-items: flex-start !important;
  }
  .commodity-wrap-content .product-title, .commodity-wrap-content .product-price {
    width: 100% !important;
  }
  .commodity-wrap-control {
    flex-direction: column;
  }
  .product-delete-btn button {
    border: none;
    --bs-btn-padding-x: 0;
    --bs-btn-padding-y: 0;
    background-color: transparent;
    --bs-btn-color: var(--bs-primary);
  }
}
</style>
