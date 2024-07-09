import { api } from "../lib/axios.ts";

export type Product = {
    id: number;
    title: string;
    description: string,
    rating: number;
    price: number;
    discountPercentage: number;
    stock: number;
    brand: string;
    availabilityStatus: string;
    reviews: string[],
    images: string[];
}


export async function getProducts() {
    const response = await api.get<{ products: Product[] }>('/products?limit=52&skip=3')
    return response.data?.products
}

export async function getCategories() {
    const response = await api.get<string[]>('/products/category-list')
    return response.data
}

export async function getProductsDetails(id : string) {
    const response = await api.get<Product>(`/product/${id}`)
    return response.data
}

export async function getProductsByCategory(category : string) {
    const response = await api.get<{ products: Product[] }>(`/products/category/${category}`)
    return response.data?.products
}

export async function getProductsBySearch(search : string) {
    const response = await api.get<{ products: Product[] }>(`/products/search?q=${search}`)
    return response.data?.products
}