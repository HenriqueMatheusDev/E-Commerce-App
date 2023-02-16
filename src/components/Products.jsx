import styled from "styled-components"
import { popularProducts } from "../data"
import Product from "./product"

const Container = styled.div``

const Products = () => {
  return (
    <Container>
      {popularProducts.map(item=>(
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products