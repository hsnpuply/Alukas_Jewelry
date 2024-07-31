import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFeatureProducts = defineStore('feature_products', {
  state: () => ({
    feature_products_items: [],
    loading: false
  }),
    getters: {
    // Filter or Some find or some Maniplate Datas on top
    getFeatureProducts: (state) => state.feature_products_items,

  },
  actions: {
    async getItems() {
      const res = await fetch('http://localhost:3000/feature_products')
      const data = await res.json()
      setTimeout(() => {
      }, 500)
        this.feature_products_items = data
    },
  }

})
