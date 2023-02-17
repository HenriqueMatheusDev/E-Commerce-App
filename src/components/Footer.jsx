import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1px;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1px;
    padding: 20px;
`


const Right = styled.div`
    flex: 1px;
    padding: 20px;
`

const Footer = () => {
  return <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptates distinctio in incidunt odio quasi iusto labore perferendis nihil nemo harum, blanditiis possimus tenetur nostrum dolore at sunt expedita asperiores?
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  
}

export default Footer
