import('tailwindcss')
import { getProducts, getCategories } from './api/get-products'
import { useQuery } from 'react-query'

function App() {

  const { data: productsData, isLoading: productsLoading } = useQuery(['products'], getProducts);
  const { data: categoriesData, isLoading: categoriesLoading } = useQuery(['category'], getCategories);
  

  if (productsLoading || categoriesLoading) {
    return <div>Loading...</div>
  }
  if (!categoriesData) {
    return <div>No categories found.</div>;
  }


  return (
    <>
      <nav className='container mx-auto flex items-center gap-2 navCategories'>
        <div>
          <button className="buttonCategory rounded-full">
            {categoriesData.slice(0, 1)?.map((category: string) => (
              <p>{category}</p>
            ))}
          </button>
          <button className="buttonCategory rounded-full">
            {categoriesData.slice(1, 2)?.map((category: string) => (
              <p>{category}</p>
            ))}
          </button>
          <button className="buttonCategory rounded-full">
            {categoriesData.slice(2, 3)?.map((category: string) => (
              <p>{category}</p>
            ))}
          </button>
          <button className="buttonCategory rounded-full">
            {categoriesData.slice(3, 4)?.map((category: string) => (
              <p>{category}</p>
            ))}
          </button>
          <button className="buttonCategory rounded-full">
            {categoriesData.slice(4, 5)?.map((category: string) => (
              <p>{category}</p>
            ))}
          </button>
          <button className="buttonCategory rounded-full">
            {categoriesData.slice(5, 6)?.map((category: string) => (
              <p>{category}</p>
            ))}
          </button>
          <button className="buttonCategory rounded-full">
            {categoriesData.slice(6, 7)?.map((category: string) => (
              <p>{category}</p>
            ))}
          </button>
        </div>
        <div>
          <select name="selectCategory" id="selectCategory" className='buttonCategory rounded-full'>
            <option value="" selected disabled>Filter by:</option>
            {categoriesData?.map((category: string, index: number) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </nav>
      <p className="title container mx-auto">All Items</p>
      <div className="container mx-auto grid grid-cols-4 flex items-center gap-8">
        {productsData?.map((product: { id: number; title: string; raiting: number; price: number; discountPercentage: number; stock: number; brand: string; availabilityStatus: string; images: string[]; }) => (
          <div className='itemCard' key={product.id}>
            <img src={product.images[0]} alt={product.title} className='imageItem'></img>
            <div className="box">
              <div className="boxText">
                <p id='name'>{product.title}</p>
                <p id='priceText'>$ {product.price}</p>
              </div>

              <a href='./public/product.html'>
                <button className="buttonViewMore rounded-full">
                  View more <img src="./src/images/arrowIcon.svg" alt="arrowIcon" />
                </button>
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App
