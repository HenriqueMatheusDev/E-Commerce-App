import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
            <Image src="https://images.pexels.com/photos/5380086/pexels-photo-5380086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        </ImgContainer>
        <InfoContainer>
            <Title>Denim jumpsuit</Title>
            <Desc>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus molestias exercitationem perferendis aliquam eum, iste dolore libero doloremque at qui, voluptate non ut. Voluptas inventore quo maiores sint laborum eius.
            </Desc>
            <Price>$ 20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>
                </Filter>
            </FilterContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
