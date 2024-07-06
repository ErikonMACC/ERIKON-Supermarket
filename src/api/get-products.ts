import { api } from "../lib/axios";

export type Product = {
    id: number;
    title: string;
    raiting: number;
    price: number;
    discountPercentage: number;
    stock: number;
    brand: string;
    availabilityStatus: string;
    images: string[];
}


export async function getProducts() {
    const response = await api.get<{ products: Product[] }>('/products')
    return response.data.products
}

export async function getCategories() {
    const response = await api.get<{ category: string }>('/products/category-list')
    return response.data
}


export async function getProductsById() {
    
}