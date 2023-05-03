import styled from "styled-components";

export const StyledHomepage = styled.section`
    height: 100%;
    width: 100%;

    .home-nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 30px;
    }

    .home-header{
        height: 50px;
        width: 100%;
        text-align: center;
    }

    .content-header{
        height: 30px;
        /* width: 95%; */
        margin: 0 55px 0 55px;
        display: flex;
        text-align: center;
        justify-content: space-between;
        align-items: center;
        > div{
            gap: 25px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
        }
    }
    .home-ul-container{
        display: flex;
        justify-content: center;
        margin: 20px;
    }

    .container{
        width: 90%;
        max-width: 525px;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        > div{
            display: flex;
            align-items: center;
            gap: 20px;
        }
    }

    @media (min-width: 600px) {
    width: 96%;
  }
`