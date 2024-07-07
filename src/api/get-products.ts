import { api } from "../lib/axios";

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

export type Review = {
    reviewerName: string,
    reviewerEmail: string,
    rating: number,
    comment: string;
}


export async function getProducts() {
    const response = await api.get<{ products: Product[] }>('/products')
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