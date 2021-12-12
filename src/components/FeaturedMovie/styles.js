import styled from "styled-components";

export const Container = styled.section`

    height: 100vh;


`;


export const EfeitoTransparent = styled.div`

    height: inherit;
    width: inherit;

    background: linear-gradient(to top, #111 10%, transparent 90%);
    // vai de baixo para cima em baixo vai ter 10% 111 e vai comar ficar com a cor normal
    // primeiro e a quatidade de onde vai começar e depois para onde vai

    div{
        height: inherit;
        width: inherit;

        background: linear-gradient(to right, #111 30%, transparent 70%);
        padding-bottom: 80px;
        padding-top: 70px;
       
     
    }
`;

export const MovieInfo = styled.div`
    display: inline-block;
    padding-left: 2rem ;


    h2{
            font-size: 60px;
            font-weight: bold;
            margin-top: 10%;
        }


    span{
        margin-top: 0.8rem ;
        display: inline-block;
        font-weight: bold;
        
        &+span{
            margin-left: 1rem ;
        }

        &.vote{
            color: #46d369
        }
    }
    p{
        display: flex;
        width: 40%;
        margin-top: 1rem;
        color: #999;
    }
   
   strong{
       display: block;
       margin-top: 1rem;
       color: #c4c4c4;

       span{
           color: #999;
           font-weight: 400;
       }
   }
`;

export const ButtonsDiv = styled.nav`
    display: flex;
    button{
        height: 40px;
        padding: 0 15px;
        border-radius: 4px;
        border: 0;
        margin-top: 1rem;

        &+button{
            margin-left:0.5rem
        }

        &.watch{
            display: flex;
            align-items: center;
            gap: 0.3rem;
            background-color: #fff;
            color: #000;
            font-size:0.9rem;
            font-weight: bold;
        }
        &.myList{
            display: flex;
            align-items: center;
            gap: 0.3rem;
            background: #313331;
            font-size:0.9rem;
            font-weight: bold;
            color: #fff;

            span{
                display: inline-block;
                margin-top: -0.4px;
            }
        }
    }
`;