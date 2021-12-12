import styled from 'styled-components'

export const Container = styled.div`

    max-width: 1280px;
    margin: 0 auto;

    margin-top: 11rem ;

    div{
        &.text-title{
            display: flex;
            justify-content: center; 
            margin-bottom: 2.5rem;
        }
 
    }
    section{
        display: flex;
        justify-content: center; 
    }


`

export const Content = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: #fff;
        padding:7px;
        color: #000;
        border-radius: 0.25rem;

        div{
            img{
                height: 110px;
                width: 110px;
                object-fit: cover;
                cursor: pointer;
                transform: scale(0.9);
                transition: all ease 0.3s;

                &:hover{
                    transform: scale(1);
                }
            }
        }

        button{
            background: transparent;
            border: 0;
            outline: none;
            cursor: pointer;
        }
    }
`;

export const Vote = styled.span`
    font-weight: 500;

    &.vote_green{
        color: #46D369
    }
    &.vote_red{
        color: #D81F26;
    }


`