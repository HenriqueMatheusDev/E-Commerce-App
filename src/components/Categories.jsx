import { styled } from "@material-ui/core"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"

const Container = styled.div`

`
const Categories = () => {
  return <Container>
      {categories.map(item=>(
        <CategoryItem item={item}/>
      ))}
    </Container>
  
}

export default Categories
