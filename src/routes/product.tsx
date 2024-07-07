import('tailwindcss')
import { getProductsDetails } from '../api/get-products'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom';

function ProductDetail() {
    let { id } = useParams()
    const { data: productDetails, isLoading: productDetailsLoading } = useQuery(['products', id], () => (id ? getProductsDetails(id) : Promise.reject(new Error('ID is undefined'))))

    if (productDetailsLoading) {
        return <div>Loading...</div>
    }
    if (!productDetails) {
        return <div>No product found.</div>;
    }

    return (
        <>

            {productDetails?.map((product) => (
                <div key={product.id}>
                    <h1>{product.title}</h1>
                    <p>Rating: {product.raiting}</p>
                    <p>Price: ${product.price}</p>
                    <p>Discount: {product.discountPercentage}%</p>
                    <p>Stock: {product.stock}</p>
                    <p>Brand: {product.brand}</p>
                    <p>Availability: {product.availabilityStatus}</p>
                    {product.images.map((image, index) => (
                        <img key={index} src={image} alt={`Product image ${index + 1}`} />
                    ))}
                </div>
            ))}
        </>
    );
}

export default ProductDetail
