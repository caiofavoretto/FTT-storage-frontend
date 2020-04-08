import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import TableList from '../../components/TableList';

import api from '../../service/api';

import { Container, MainContainer, PageList } from './styles';

export default function Main() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [pageCount, setPageCount] = useState([]);

  async function loadProducts(){
    if(loading)
      return;
       
    setLoading(true);

    try{
      const res = await api.get('products',{
        params:{ page }
      });

      setProducts(res.data);

      const headerValue = res.headers['x-total-count'];

      setTotal(headerValue);

      const pages = [];

      const t = (Math.ceil(headerValue/10));

      for(let i=0; i<t; i++){      
        pages.push(i+1);          
      }
      setPageCount(pages);
      
    }catch{
      alert('Não foi possivel listar os produtos, volte mais tarde.');
    }

    setLoading(false);
  }

  useEffect(() => { loadProducts() },[page])

  function renderPages(pageNumber){
    return(
      <li key={pageNumber} onClick={()=>setPage(pageNumber)} className={pageNumber==page?"selected":""}>
        <span>{pageNumber}</span>            
      </li>
    );
  }

  return (
    <Container>
      <Header />
      <MainContainer>
        <ul className="menu">
          <li className="selected">Meus Produtos</li>
          <li>Compras</li>
        </ul>

        <TableList data={products} />
        <PageList>
          {pageCount.map(number => renderPages(number))}
        </PageList>
      </MainContainer>
    </Container>
  );
}
