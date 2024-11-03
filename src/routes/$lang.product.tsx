import { createFileRoute } from '@tanstack/react-router'
import { fetchProducts, ProductFilters } from '@/api/product/products';
import ProductList from '@components/ProductList/ProductList';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import ProductListFilters from '@components/ProductList/ProductListFilters';

// TODO: add filter
export const Route = createFileRoute('/$lang/product')({
  component: ProductPage,
})

function ProductPage(): JSX.Element {
  const [search, setSearch] = useState<ProductFilters['search']>();
  const [category, setCategory] = useState<ProductFilters['category']>();
  const [maxPrice, setMaxPrice] = useState<ProductFilters['maxPrice']>();

  const { data, isFetching } = useQuery({
    queryKey: ['products', {category, maxPrice, search}],
    queryFn: () => fetchProducts({category, maxPrice, search}),
  });

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-4xl font-bold">Products</h1>
        </div>
        {/* For product filer */}
        <ProductListFilters
          onChange={(filters) => {
            setCategory(filters.category);
            setMaxPrice(filters.maxPrice);
            setSearch(filters.search);
          }}
        />
      </div>
      <div>
        {/* For product list */}
          {data && <ProductList products={data}/> }
          {isFetching && <p>Loading...</p>}
      </div>
    </div>
  );
}
