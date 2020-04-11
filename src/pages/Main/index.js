import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import TableList from '../../components/TableList';

import api from '../../service/api';

import { ProductFields, OrderFields } from '../../Custom/Tables/FieldSchema';

import { Container, MainContainer, PageList } from './styles';

export default function Main({ history }) {
  const menuOptions = {
    products: {
      id: 1,
      fields: ProductFields,
    },
    orders: {
      id: 2,
      fields: OrderFields,
    },
  };

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState([]);
  const [menu, setMenu] = useState(menuOptions.products.id);

  async function loadProducts() {
    setLoading(true);

    try {
      let response;

      switch (menu) {
        case menuOptions.orders.id: {
          response = await api.get('orders', {
            params: { page },
          });

          setOrders(response.data);
          break;
        }

        default: {
          response = await api.get('products', {
            params: { page },
          });

          setProducts(response.data);
        }
      }

      const headerValue = response.headers['x-total-count'];

      const pages = [];

      const t = Math.ceil(headerValue / 5);

      for (let i = 0; i < t; i += 1) {
        pages.push(i + 1);
      }

      setPageCount(pages);
    } catch {
      alert('Não foi possivel listar os produtos, volte mais tarde.');
    }

    setLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, [menu, page]);

  function renderPages(pageNumber) {
    return (
      <li key={pageNumber} className={pageNumber === page ? 'selected' : ''}>
        <button type="button" onClick={() => setPage(pageNumber)}>
          {pageNumber}
        </button>
      </li>
    );
  }

  function changeMenu(menuId) {
    setLoading(true);
    setMenu(menuId);
    setPage(1);
  }

  return (
    <Container>
      <Header history={history} />
      <MainContainer>
        <ul className="menu">
          <li className={menu === menuOptions.products.id ? 'selected' : ''}>
            <button
              type="button"
              onClick={() => changeMenu(menuOptions.products.id)}
            >
              Meus Produtos
            </button>
          </li>
          <li className={menu === menuOptions.orders.id ? 'selected' : ''}>
            <button
              type="button"
              onClick={() => changeMenu(menuOptions.orders.id)}
            >
              Pedidos
            </button>
          </li>
        </ul>

        <TableList
          data={menu === menuOptions.products.id ? products : orders}
          fields={
            Object.values(menuOptions).filter((option) => option.id === menu)[0]
              .fields
          }
          options={menu === menuOptions.products.id}
          loading={loading}
        />

        <PageList>
          {!loading && pageCount.map((number) => renderPages(number))}
        </PageList>
      </MainContainer>
    </Container>
  );
}

Main.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
};
