import styled from "styled-components";

const ContainerNav = styled.div`
    width: 100%;
    height: 80px;
    background-color: #262626;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 30px;
`


const Title = styled.h3`
    font-size: 32px;
    color: #ffffff;
    font-weight: 700;
`

const Basket = styled.p`
    font-size: 24px;
    color: #fff;
    font-weight: 700;
`


export {
    ContainerNav,
    Title,
    Basket
};