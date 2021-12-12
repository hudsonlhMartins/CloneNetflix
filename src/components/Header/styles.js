import styled from "styled-components";

export const Container = styled.header`
    position: fixed;
    z-index: 999;
    display: flex; 
    padding: 1rem 2rem;
    align-items: center;
    justify-content: space-between;
    top: 0;
    right: 0;
    left: 0;
    height: 70px;
    background: transparent;
    transition: all ease 0.5s ;

    &.black{
        background: #141414;
    }

    nav{
        display: flex;
        align-items: center;
        gap: 2rem;

        img{
            max-width: 100px;
        }
        ul{
            display: flex;
            align-items: center;
            gap: 1rem;

            li{
                list-style-type: none;
            }
            a{
                color: #fff;
                text-decoration: none;
            }
        }
    }

    div{

        display: flex;
        align-items: center;
        gap: 1.5rem;

        img{
            width: 44px;
            height: 44px;
        }

        section{
            position: relative;

            span{
                position: absolute;
                bottom: 0;
                background-color: ${props => props.hasItem ? '#D81F26' : 'transparent' };
                padding: 2px 3px;
                font-size: 10px;
                border-radius:30%;
            }
        }
    }


`