import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import PageLaout from '../components/PageLaout';
import { useCompanies } from '../context/CompaniesCOnetext';

const CompanyDetail = () => {
  //   const [showProducts, setShowProducts] = useState(false);
  const [quantities, setQuantities] = useState({});
  const { companyId } = useParams();
  const { onSelectCompany, company } = useCompanies();

  useEffect(() => {
    onSelectCompany(companyId);
  }, []);

  const products = [
    {
      id: 1,
      image: '/path/to/product1-image.jpg',
      name: 'Product One',
      price: '$19.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      image: '/path/to/product2-image.jpg',
      name: 'Product Two',
      price: '$29.99',
      description:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // Add more products as needed
  ];

  const handleAddToCart = (productId) => {
    // Add logic to handle adding product to cart
    alert(`Product ${productId} added to cart`);
  };

  const handleIncrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));
  };

  if (!company) {
    return <div>Company not found</div>;
  }

  return (
    <PageLaout>
      <Container>
        <div className='container py-5 text-sm'>
          <h2 className='text-3xl font-bold text-blue-800 mb-6'>
            {company.name}
          </h2>

          <div className='container mx-auto mt-8'>
            <h2 className='text-3xl font-bold text-blue-800 mb-6'>
              Product List
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {products.map((product) => (
                <div
                  key={product.id}
                  className='bg-white p-6 rounded-md shadow-md'
                >
                  <img
                    src={product.image}
                    alt={`${product.name}`}
                    className='w-full h-40 object-cover mb-4'
                  />
                  <h3 className='text-xl font-bold mb-2'>{product.name}</h3>
                  <p className='text-gray-600 mb-2'>{product.price}</p>
                  <p className='text-gray-600 mb-4'>{product.description}</p>

                  <div className='flex items-center justify-between'>
                    <button
                      onClick={() => handleAddToCart(product.id)}
                      className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-700'
                    >
                      Add to Cart
                    </button>
                    <div className='flex items-center'>
                      <button
                        onClick={() => handleDecrement(product.id)}
                        className='bg-blue-600 text-sm  text-white py-1 px-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-700'
                      >
                        -
                      </button>
                      <input
                        type='number'
                        value={quantities[product.id] || 0}
                        className='mx-2 w-12  text-sm text-center'
                        readOnly
                      />
                      <button
                        onClick={() => handleIncrement(product.id)}
                        className='bg-blue-600 text-sm  text-white py-1 px-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-700'
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </PageLaout>
  );
};

export default CompanyDetail;
