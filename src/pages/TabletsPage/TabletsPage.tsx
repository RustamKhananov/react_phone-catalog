import React from 'react';
import { Catalog } from '../../components/Catalog/Catalog';
import { Product } from '../../interfaces';
import './TabletsPage.scss';
import { Breadcrumbs} from '../../components/Breadcrumbs/Breadcrumbs';

export const TabletsPage = ({ products }:{products: Product[]}) => {
  const visibleProducts = products.filter(product => product.type === 'tablet');
  return (
    <div className="TabletsPage">
      <Breadcrumbs />
      <h1 className="TabletsPage__h1">Tablets</h1>
      <Catalog
        products={visibleProducts}
      />
    </div>
  )
}
