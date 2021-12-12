import styled from "styled-components";

export const Container = styled.div`

    margin-bottom: 2rem;
    width: 100%;

    &:hover{
        div{
            &.buttonLeft, &.buttonRigth{
                opacity: 1;
            }
            
        }
       
       
    }

    h2{
        margin: 0 0 0 2rem ;
    }

    div{
        
        &.buttonLeft, &.buttonRigth{
            position: absolute;
            height:225px;
            width:40px;
            background: rgba(0,0,0,0.5);
            z-index:99;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            opacity: 0;
            transition: opacity ease 0.5s
            
        }

        &.buttonRight{
            left:0;
        }
        &.buttonLeft{
            right:0; 
        }
    }

`;

export const ContainerArea = styled.div`
    overflow-x: hidden;
    // tudo que passar no eixo x vai ser cortado
    padding-left: 2rem ;

    div{
        transition: margin-left ease 0.8s;
        

        div{
            display: inline-block;
            // deixar um item do lado do outro
            width: 150px;

            img{
                width: 100%;
                transform: scale(0.9);
                transition: transform 0.2s;
                cursor: pointer;

                &:hover{
                    transform: scale(1);
                }
            }
        }
    }
`;