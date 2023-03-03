import React, { useEffect, useState } from 'react';

function CategoryTabs({
  categories,
  selectedCategory,
  setSelectedCategory,
  type,
  setType,
}) {
  const [categoriesList, setCategoriesList] = useState();

  useEffect(() => {
    setCategoriesList(categories);
    console.log('working', categories);
  }, [categories]);
  console.log('categoriesList', categoriesList);

  return (
    <div className="container mx-auto px-4 md:flex justify-between text-lightShade">
      <nav className="flex border-b border-gray-100 text-sm font-medium">
        <button
          type="button"
          onClick={() => setSelectedCategory('all')}
          className={`-mb-px border-b border-current p-4 ${
            selectedCategory === 'all' ? 'text-brand' : 'text-white'
          }`}
        >
          All
        </button>
        {categoriesList?.map((item) => (
          <button
            type="button"
            onClick={() => setSelectedCategory(item.category)}
            className={`capitalize -mb-px border-b border-current p-4 ${
              selectedCategory === item.category
                ? 'text-brand'
                : 'text-lightShade'
            }`}
          >
            {item.category}
          </button>
        ))}
      </nav>

      <div className="flex gap-8">
        <div className="relative mr-7">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center gap-2 pb-1  transition border-b border-gray-400 cursor-pointer hover:border-gray-600">
              <span className="text-sm font-medium"> Type </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="z-50 group-open:absolute right-0 group-open:top-auto group-open:right-0 group-open:mt-2">
              <div className="bg-white w-max border border-gray-200 rounded w-96">
                <ul className="p-4 space-y-1 border-t border-gray-200">
                  <li>
                    <label
                      htmlFor="FilterInStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        checked={type === 'all'}
                        onChange={() => setType('all')}
                        type="checkbox"
                        id="FilterInStock"
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        All (8)
                      </span>
                    </label>
                  </li>{' '}
                  <li>
                    <label
                      htmlFor="FilterInStock"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterInStock"
                        checked={type === 'nonVeg'}
                        onChange={() => setType('nonVeg')}
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        Non-Veg (5)
                      </span>
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor="FilterPreOrder"
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        checked={type === 'veg'}
                        onChange={() => setType('veg')}
                        id="FilterPreOrder"
                        className="w-5 h-5 border-gray-300 rounded"
                      />

                      <span className="text-sm font-medium text-gray-700">
                        Veg (3)
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
export default CategoryTabs;
