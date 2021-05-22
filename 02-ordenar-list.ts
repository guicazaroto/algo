class Product {
  private name: string
  private price: number

  constructor (name: string, price: number) {
    this.name = name
    this.price = price
  }

  get getName (): string {
    return this.name
  }

  get getPrice (): number {
    return this.price
  }
}

const Produtos: Array<Product> = [
  new Product('Fusca', 17000),
  new Product('Jipe', 46000),
  new Product('Smart', 46000),
  new Product('Larborgini', 1000000),
  new Product('Brasilia', 16000),
]

const buscaMenor = (produtos: any, inicio: any, termino: any) => {
  let maisBarato = inicio;
  for(let atual = inicio; atual < termino; atual++){
      if(produtos[atual].getPrice < produtos[maisBarato].getPrice) {
          maisBarato = atual;
      }
  }
  return maisBarato;
}

const orderAsc = (produtos: Array<Product>) => {
  for(let atual = 0; atual < produtos.length; atual++) {
    let menor = buscaMenor(produtos, atual, produtos.length);
    let produtoAtual = produtos[atual];
    let produtoMenor = produtos[menor];
    produtos[atual] = produtoMenor;
    produtos[menor] = produtoAtual; 
}

  produtos.forEach( (product) => console.log(product.getName) )
}



console.log(
  orderAsc(Produtos)
)