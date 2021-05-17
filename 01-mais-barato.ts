(() => {

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


  const getLowestPrice = (products: Array<Product>): number => {
    let lowestPriceIndex = 0

    for(let i = 0; i < products.length; i++) {
      if(products[i].getPrice < products[lowestPriceIndex].getPrice) {
        lowestPriceIndex = i
      }
    }

    return lowestPriceIndex
  }

  const getBiggestPrice = (produtos: Array<Product>): number => {
    let biggestPriceIndex = 0

    for(let i = 0; i < produtos.length; i++) {
      if(produtos[i].getPrice > produtos[biggestPriceIndex].getPrice) {
        biggestPriceIndex = i
      }
    }

    return biggestPriceIndex
  }

  new (class Main {
    constructor() {

      const Produtos: Array<Product> = [
        new Product('Corolla', 95000),
        new Product('Hillux', 153900),
        new Product('Ethios', 42900),
        new Product('Renegate', 85000),
        new Product('Compass', 240000)
      ]

      const lowestIndex = getLowestPrice(Produtos)
      const biggestIndex = getBiggestPrice(Produtos)


      console.log(
        `O produto com menor preço é ${Produtos[lowestIndex].getName} por apenas R$ ${Produtos[lowestIndex].getPrice}`
      )

      console.log(
        `O produto com maior preço é ${Produtos[biggestIndex].getName} por R$ ${Produtos[biggestIndex].getPrice}`
      )
    }

  })()

})()