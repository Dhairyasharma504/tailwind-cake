import { filter, uniqBy } from 'lodash';
import React, { useEffect, useState } from 'react';
import PriceCard from './elements/PriceCard';
import CategoryTabs from './product/CategoryTabs';

const data = [
  {
    name: 'samual',
    label: 'cake',
    image: '/images/about1.jpg.webp',
    category: 'vanila',
    type: 'veg',
  },
  {
    name: 'samual',
    label: 'cake',
    image: '/images/about1.jpg.webp',
    category: 'fruit',
    type: 'nonVeg',
  },
  {
    name: 'samual',
    label: 'cake',
    image: '/images/about1.jpg.webp',
    category: 'chocolate',
    type: 'veg',
  },
];

function Products() {
  const categories = uniqBy(data, 'category');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [type, setType] = useState('all');
  const [products, setProducts] = useState(data);

  useEffect(() => {
    if (type === 'all' && selectedCategory === 'all') {
      setProducts(data);
    } else if (type === 'all' && selectedCategory !== 'all') {
      const result = filter(data, { category: selectedCategory });
      setProducts(result);
    } else if (type !== 'all' && selectedCategory === 'all') {
      const result = filter(data, { type });
      setProducts(result);
    } else if (type !== 'all' && selectedCategory !== 'all') {
      const result = filter(data, { type, category: selectedCategory });
      setProducts(result);
    }
  }, [type, selectedCategory]);

  return (
    <div>
      <CategoryTabs
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setType={setType}
        type={type}
      />

      <div className="grid md:grid-cols-3 grid-cols-1">
        {products.map((item) => (
          <PriceCard key={item.id} item={item} />
        ))}
      </div>
      {products && products.length === 0 && (
        <div className="text-white text-5xl text-center">No data available</div>
      )}
    </div>
  );
}

export default Products;
