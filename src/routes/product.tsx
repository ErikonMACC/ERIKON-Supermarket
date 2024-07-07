import('tailwindcss')
import { useEffect } from 'react';
import { getProductsDetails } from '../api/get-products'
import { useQuery } from 'react-query'
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail() {
    let { id } = useParams()
    const { data: product, isLoading: productDetailsLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProductsDetails(id || "1")
    })
    const navigate = useNavigate();

    useEffect(() => {
        const handlePopState = () => {
            navigate('productList')
        };
        window.addEventListener('popstate', handlePopState);

        return () => window.removeEventListener('popstate', handlePopState);
    }, [navigate]);

    if (productDetailsLoading) {
        return <div>Loading...</div>
    }
    if (!product) {
        return <div>No product found.</div>;
    }

    return (
        <>
            {product && (
                <section key={product.id}>
                    <div className="productTop container mx-auto grid grid-cols-2 flex items-center gap-8">
                        <div className="imageProduct">
                            <img src={product.images && product.images[0]} alt={product.title || "productImage"} />
                        </div>
                        <div className='textBox'>
                            <h1 className='title text'>{product.title}</h1>
                            <p className='textOne text'>Rating: {product.rating}</p>
                            <p className='textThree text'>Price: ${product.price}</p>
                            <p className='textTwo text'>{product.discountPercentage}% Discount</p>
                            <p className='textOne text'>In stock: {product.stock}</p>
                            <p className='textOne text'>Brand: {product.brand}</p>
                            <div className="buttons">
                                <div className="buttonOne">
                                    <button className="buttonBuy">Comprar</button>
                                </div>
                                <div className='buttonTwo'>
                                    <button className="buttonCart">Adicionar ao carrinho</button>
                                </div>
                            </div>
                            <p className='textOne'>Availability: {product.availabilityStatus}</p>
                        </div>

                    </div>
                    <div className="description container mx-auto grid grid-cols-1 items-center gap-8">
                        <div className="title text">Description</div>
                        <p className="descriptionText">{product.description}</p>
                    </div>
                    <div className="reviews  container mx-auto grid grid-cols-3 items-center gap-8">
                        <div className="title text col-span-3">Reviews</div>
                        {product.reviews?.map((review) => (
                            <div className="review" key={review.reviewerEmail}>
                                <div className="boxText">
                                    <p className="name">{review.reviewerName}</p>
                                    <p className="email">{review.reviewerEmail}</p>
                                    <p className="rating">Rating: {review.rating}</p>
                                    <p className="comment">{review.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}

export default ProductDetail
