import { defineStore, acceptHMRUpdate } from 'pinia'
import products from '@/data/products.json'

export const useProductStore = defineStore('ProductStore', {
    // state
    state: () => {
        return {
            name: "The Pineapple Stand",
            products:  products,
            isAwesome: true
        }
    }
    // actions
    // getters
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}
