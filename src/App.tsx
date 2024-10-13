import React, { useState } from 'react'
import { Provider } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { store } from './store'
import { Produto } from './components/Produto/types'
import { GlobalStyle } from './styles'

function App() {
  const [favoritos, setFavoritos] = useState([] as Produto[])

  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      const produtoComFavoritos = { ...produto, favoritos: true }
      setFavoritos([...favoritos, produtoComFavoritos])
    }
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} />
        <Produtos favoritos={favoritos} favoritar={favoritar} />
      </div>
    </Provider>
  )
}

export default App
