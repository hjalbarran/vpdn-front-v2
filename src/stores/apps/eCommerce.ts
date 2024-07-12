import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
// types
import type { ProductStateProps } from '@/types/apps/EcommerceType';
import { filter, map, sum } from 'lodash';
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper';

export const useEcomStore = defineStore({
    id: 'eCommerceone',
    state: (): ProductStateProps => ({
        businessesItems: [],
        products: [],
        cart: [],
        gender: '',
        category: [],
        price: '',
        subTotal: 0,
        discount: 5,
        total: 0,
        addresses: [],
        color: 'All'
    }),
    getters: {},
    actions: {
        // Fetch Customers from action
        async fetchProducts() {
            try {
                const data = await axios.get('/api/products/list');
                this.products = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        // Fetch Customers from action
        async fetchBusinessesToPublic(filters: any) {
            let filtersArray: string[] = [];
            Object.keys(filters).forEach((key) => {
                if (filters[key]) {
                    filtersArray.push(`${key}=${filters[key]}`);
                }
            });
            const queryString:string = filtersArray.length > 0 ? '?' + filtersArray.join('&') : ''
            const url:string = `/business/index${queryString}`
            try {
                const data = await fetchWrapper.get(url);
                this.businessesItems = data.data.businesses;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        // Fetch Customers from addresses
        async fetchAddress() {
            try {
                const data = await axios.get('/api/address/list');
                this.addresses = data.data;
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
        //select gender
        SelectGender(items: any) {
            this.gender = items;
        },
        sortByColor(itemcolor: string) {
            this.color = itemcolor;
        },
        //select category
        SelectCategory(items: any) {
            this.category = items;
        },
        //select Price
        SelectPrice(items: any) {
            this.price = items;
        },
        //AddToCart
        AddToCart(item: any) {
            const product = item;
            this.cart = [...this.cart, product];
        },
        //qty
        incrementQty(item: any) {
            const productId = item;
            const updateCart = map(this.cart, (product: any) => {
                if (product.id === productId) {
                    return {
                        ...product,
                        qty: product.qty + 1
                    };
                }
                return product;
            });
            this.cart = updateCart;
            this.subTotal = sum(this.cart.map((product: any) => product.salePrice * product.qty));
            this.discount = Math.round(this.subTotal * (5 / 100));
            this.total = this.subTotal - this.discount;
        },
        //qty
        decrementQty(item: any) {
            const productId = item;
            const updateCart = map(this.cart, (product: any) => {
                if (product.id === productId) {
                    return {
                        ...product,
                        qty: product.qty - 1
                    };
                }
                return product;
            });
            this.cart = updateCart;
            this.subTotal = sum(this.cart.map((product: any) => product.salePrice * product.qty));
            this.subTotal = sum(this.cart.map((product: any) => product.salePrice * product.qty));
            this.discount = Math.round(this.subTotal * (5 / 100));
            this.total = this.subTotal - this.discount;
        },
        // delete Cart
        deleteCart(item: any) {
            const updateCart = filter(this.cart, (p) => p.id !== item);
            this.cart = updateCart;
        },
        //subtotal
        getsubTotal() {
            this.subTotal = sum(this.cart.map((product: any) => product.salePrice * product.qty));
        },
        //total
        getTotal() {
            this.total = this.subTotal - this.discount;
        },
        //discount
        getDiscount() {
            this.discount = Math.round(this.subTotal * (5 / 100));
        },

        //Reset Filter
        filterReset() {}
    }
});
