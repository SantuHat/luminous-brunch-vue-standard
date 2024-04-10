<template>
  <div class="meals">
    <ul class="meals-content">
      <li class="meals-item-main" v-for="(item) in list" :key="item.product_id">
        <div class="commodity-wrap d-flex">
          <div class="commodity-wrap-img me-md-2">
            <img
            :src="item.product.imageUrl"
            class="toast-img" :alt="item.product.imageUrl">
          </div>
          <div class="commodity-wrap-content">
            <div class="product-title commodity-wrap-content-item font-sans-serif">
              {{ item.product.title }}
            </div>
            <div class="product-group d-flex">

              <div class="product-price commodity-wrap-content-item">
                NT$ {{ item.product.price }}
              </div>
              <div class="product-qty">
                <button v-if="step === 1 || step === null" @click="item.qty--; putCart(item.id, item.qty)" class="btn btn-primary fw-bold" type="button" :disabled="item.qty === 1">–</button>
                <span class="mealNum" :class="{ 'mx-0': step === 2 || step === 3, 'mx-2': step === 1 }">
                  {{ `${step === 2 || step === 3 ? '×': ''}${item.qty}` }}
                </span>
                <button v-if="step === 1 || step === null" @click="item.qty++; putCart(item.id, item.qty)" class="btn btn-primary fw-bold" type="button">+</button>
              </div>
            </div>
          </div>
          <div class="commodity-wrap-control">
            <div class="product-delete-btn ms-auto">
              <button v-if="step === 1 || step === null" @click="delCart(item.id)" type="button" class="btn btn-primary text-right">
              <span class="material-symbols-outlined pt-1 fs-6">
                delete
              </span>
            </button>
            </div>
            <div class="product-subtotal text-end ms-auto">
              <span class="font-sans-serif d-inline-block me-md-1">小計</span>
              <span class="d-inline-block">NT$ {{ item.total }}</span>
            </div>
          </div>
        </div>

      </li>
    </ul>
    <div class="text-center pb-3" v-if="step">
      <span class="fw-bold"><span class="font-sans-serif">總計 NT</span>$ {{ total }}</span>
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
.commodity-wrap {
  justify-content: space-between;
}

.commodity-wrap .commodity-wrap-content {
  display: flex;
  align-items: center;
  width: 60vw;
  justify-content: space-between;
}

/* .commodity-wrap .commodity-wrap-content .product-title {
  width: 70%;
} */
.commodity-wrap .commodity-wrap-content .product-price {
  width: 30%;
}
.commodity-wrap-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 31%;
  flex-direction: row-reverse;
}
.dropdown-menu .meals-content {
  background-color: #fff;
}
.dropdown-menu .commodity-wrap-content {
  flex-direction: column;
  align-items: flex-start !important;
  justify-content: space-between;
  width: 60vw;
}
.dropdown-menu .commodity-wrap-img {
  margin-right: 8px;
}
.dropdown-menu .commodity-wrap-content .product-title, .dropdown-menu .commodity-wrap-content .product-price {
  width: 100% !important;
}
.dropdown-menu .commodity-wrap-control {
  flex-direction: column;
  width: 60%;
}
.dropdown-menu .product-delete-btn button {
  /* border: none; */
  --bs-btn-padding-x: 0.5rem;
  --bs-btn-padding-y: 0.25rem;
  /* background-color: transparent; */
  /* --bs-btn-color: var(--bs-primary); */
}
.dropdown-menu .product-group {
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  flex-grow: 1;
  align-items: flex-start
}
.commodity-wrap-content .mealNum {
  display: inline-block;
  width: 18.3px;
  text-align: center;
}
.product-group {
  width: 50%;
}
.dropdown-menu .mealNum {
  margin-left: 8px;
  margin-right: 8px;
}

@media (max-width: 992px) {
  .commodity-wrap .commodity-wrap-content {
      flex-direction: column;
      align-items: flex-start !important;
  }
  .commodity-wrap-content .product-title, .commodity-wrap-content .product-price {
    width: 100% !important;
  }
  .commodity-wrap-control,  .dropdown-menu .commodity-wrap-control {
    flex-direction: column;
    width: 38%;
  }
  .commodity-wrap-img {
    margin-right: 8px;
  }
  .product-delete-btn button {
    border: none;
    --bs-btn-padding-x: 0.5rem;
    --bs-btn-padding-y: 0.25rem;
    background-color: transparent;
    --bs-btn-color: var(--bs-primary);
  }
  .product-group {
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    flex-grow: 1;
  }
}
@media (max-width: 768px) {
  .commodity-wrap {
    font-size: 14px;
  }
  .product-title {
    margin-bottom: 8px;
  }
  .product-group {
    align-items: flex-start;
  }
}
@media (min-width: 992px) {
  .product-group {
    align-items: center;
  }
}
</style>
