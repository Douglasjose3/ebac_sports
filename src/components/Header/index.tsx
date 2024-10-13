import React from 'react'
import { useSelector } from 'react-redux' // Import corrigido
import Produto, { paraReal } from '../Produtos' // Import corrigido
import { useGetProdutoQuery } from '../../services/api' // Import corrigido
import { RootReducer } from '../../store'

import * as S from './styles' // Import corrigido

type Produto = {
  favoritos: Produto[]
}

const Header = ({ favoritos }: Produto) => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const valorTotal = itens.reduce((acc: number, item: { preco: any }) => {
    acc = typeof acc === 'number' ? acc : 0
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={require('../../assets/cesta.png').default} alt="cesta" />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
