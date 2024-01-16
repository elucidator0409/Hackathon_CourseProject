import Slider from "components/Slider/Slider";
import GoodDesign from "components/GoodDesign/GoodDesign";
import Brand from "components/Brand/Brand";
import Categories from "components/Categories/AllProduct";
import styled from "styled-components";
const PageStyled = styled.div`
  font-family: Poppins;
`;
const Home = () => {
  return (
    <PageStyled>
      <Slider />
      <Brand />
      <Categories />
      <GoodDesign />
    </PageStyled>
  );
};
export default Home;
