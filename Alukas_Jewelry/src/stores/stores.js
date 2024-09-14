import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



export const useFeatureProducts = defineStore('featureProducts', {
  // Variables
  state: () => ({
    feature_products: [
      //  {
      //       "id": 1,
      //       "pic": "../../../assets/featured_products/best_seller/product-1.webp",
      //       "type": "product",
      //       "fav": true,
      //       "offPercent":22,
      //       "price":2224
      //   },
    ],
  }),


  // Getters Getting datas without manipulate it (filtered)
  getters: {
    getAllFeatureProducts:(state)=> state.feature_products,
    getNewArrivals:(state)=> state.feature_products.filter((t)=> t.section === 'new_arrivals'),
    getFeatured_products:(state)=> state.feature_products.filter((t)=> t.section === 'featured_product'),
    getBestSeller: (state) => state.feature_products.filter((t) => t.section === 'best_seller'),
getDiscountCalculation: (item) => {
  return (item.price * (item.offPercentage / 100)).toFixed(2)
}
  },

  // Actions
  actions: {
    async getAsyncProducts() {
      const res = await fetch('http://localhost:3000/feature_products');
      const data = await res.json();
      this.feature_products = data;
    },

      async toggleFav(id) {
      const myItem = this.feature_products.find((t) => t.id === id)
      myItem.fav = !myItem.fav

      const res = await fetch('http://localhost:3000/feature_products/' + id, {
        method: 'PATCH',
        body: JSON.stringify({ fav: myItem.fav })
      })
      if (res.error) {
        console.log(res.error)
      }
      }
  
    
}
  
})


//   },
//   actions: {
//     async getItems() {
//       const res = await fetch('http://localhost:3000/feature_products')
//       const data = await res.json()
//       setTimeout(() => {
//       }, 500)
//         this.feature_products_items = data
//     },
//   }

// })
