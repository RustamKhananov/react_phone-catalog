import React from 'react';
import { Catalog } from '../../components/Catalog/Catalog';
import { Product } from '../../interfaces';
import './AccessoriesPage.scss';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { WaitLoading } from '../../components/WaitLoading/WaitLoading';

export const AccessoriesPage = ({ products }: { products: Product[] }) => {
  const visibleProducts = products
    .filter(product => product.type === 'accessorie' || !product.type);
  return (
    (JSON.stringify(products) === JSON.stringify({}))
      ? <WaitLoading />
      : (
        <div className="AccessoriesPage">
          <Breadcrumbs />
          <h1 className="Accessories__h1">Accessories</h1>
          <Catalog
            products={visibleProducts}
          />
        </div>
      )
  )
}
