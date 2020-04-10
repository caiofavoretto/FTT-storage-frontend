import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import TableList from '../../components/TableList';
import LoadingComponent from '../../components/Loading';

import api from '../../service/api';

import { CustomTypes } from '../../utils/Enums';

import { Container, MainContainer, PageList } from './styles';

export default function Main({ history }) {
  const menuOptions = {
    products: {
      id: 1,
      fields: {
        type: {
          name: 'Tipo',
          type: CustomTypes.StringImage,
        },
        brand: {
          name: 'Marca',
          type: CustomTypes.String,
        },
        value: {
          name: 'Valor',
          type: CustomTypes.Currency,
        },
        amount: {
          name: 'Quantidade',
          type: CustomTypes.Number,
        },
        created_at: {
          name: 'Registrado em',
          type: CustomTypes.Date,
        },
      },
    },
    orders: {
      id: 2,
      fields: {
        'product.type': {
          name: 'Tipo',
          type: CustomTypes.StringImage,
        },
        'product.brand': {
          name: 'Marca',
          type: CustomTypes.String,
        },
        value: {
          name: 'Valor pago',
          type: CustomTypes.Currency,
        },
        amount: {
          name: 'Quantidade',
          type: CustomTypes.Number,
        },
        created_at: {
          name: 'Data',
          type: CustomTypes.Date,
        },
      },
    },
  };

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState([]);
  const [menu, setMenu] = useState(menuOptions.products.id);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      try {
        let response;

        switch (menu) {
          case menuOptions.orders.id: {
            response = await api.get('orders', {
              params: { page },
            });
            break;
          }

          default: {
            response = await api.get('products', {
              params: { page },
            });
          }
        }

        console.log(response);

        setProducts(response.data);

        const headerValue = response.headers['x-total-count'];

        const pages = [];

        const t = Math.ceil(headerValue / 10);

        for (let i = 0; i < t; i++) {
          pages.push(i + 1);
        }

        setPageCount(pages);
      } catch {
        alert('Não foi possivel listar os produtos, volte mais tarde.');
      }

      setLoading(false);
    }

    loadProducts();
  }, [menu, menuOptions.orders.id, page]);

  function renderPages(pageNumber) {
    return (
      <li
        key={pageNumber}
        onClick={() => setPage(pageNumber)}
        className={pageNumber === page ? 'selected' : ''}
      >
        <span>{pageNumber}</span>
      </li>
    );
  }

  return (
    <Container>
      <Header history={history} />
      <MainContainer>
        <ul className="menu">
          <li
            onClick={() => setMenu(menuOptions.products.id)}
            className={menu === menuOptions.products.id ? 'selected' : ''}
          >
            Meus Produtos
          </li>
          <li
            onClick={() => setMenu(menuOptions.orders.id)}
            className={menu === menuOptions.orders.id ? 'selected' : ''}
          >
            Compras
          </li>
        </ul>

        {!loading ? (
          <TableList
            data={products}
            fields={
              Object.values(menuOptions).filter(
                (option) => option.id === menu
              )[0].fields
            }
            options={menu === menuOptions.products.id}
          />
        ) : (
          <LoadingComponent />
        )}
        <PageList>
          {!loading && pageCount.map((number) => renderPages(number))}
        </PageList>
      </MainContainer>
    </Container>
  );
}
