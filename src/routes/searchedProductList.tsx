import('tailwindcss')
import { getCategories, getProductsBySearch } from '../api/get-products'
import { useQuery } from 'react-query'
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SearchedProductList() {
    let { search } = useParams<{ search: string }>()
    const { data: productsData, isLoading: productsDataLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => getProductsBySearch(search || "A")
    })

    const { data: categoriesData, isLoading: categoriesLoading } = useQuery(['categories'], getCategories);

    const navigate = useNavigate();
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = event.target.value;
        if (selectedCategory) {
            navigate(`/productList/categories/${selectedCategory}`);
        }
    };

    if (productsDataLoading || categoriesLoading) {
        return <div>Loading...</div>
    }
    if (!productsData || !categoriesData) {
        return <div>No product found.</div>;
    }
    return (
        <>
            <nav className='container mx-auto flex items-center gap-2 navCategories'>
                <div>
                    {categoriesData?.slice(0, 6)?.map((category: string) => {
                        return (
                            <Link id="itemButton" to={`/productList/categories/${category}`}>
                                < button className="buttonCategory rounded-full" >
                                    <p>{category}</p>
                                </button>
                            </Link>
                        )
                    })}

                </div>
                <div>
                    <select name="selectCategory" id="selectCategory" className='buttonCategory rounded-full' onChange={handleCategoryChange}>
                        <option value="" selected disabled>Filter by:</option>
                        {categoriesData?.map((category: string) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </nav >
            <p className="title container mx-auto">Items with search {search}</p>
            <div className="container mx-auto grid grid-cols-4 flex items-center gap-8">
                {productsData?.map((product: { id: number; title: string; rating: number; price: number; discountPercentage: number; stock: number; brand: string; availabilityStatus: string; images: string[]; }) => (
                    <div className='itemCard' key={product.id}>
                        <img src={product.images[0]} alt={product.title} className='imageItem'></img>
                        <div className="box">
                            <div className="boxText">
                                <p id='name'>{product.title}</p>
                                <p id='priceText'>$ {product.price}</p>
                            </div>

                            <Link id="itemButton" to={`/productList/${product.id}`}>
                                <button className="buttonViewMore rounded-full">
                                    View more <img src="/src/images/arrowIcon.svg" alt="arrowIcon" />
                                </button>
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SearchedProductList;