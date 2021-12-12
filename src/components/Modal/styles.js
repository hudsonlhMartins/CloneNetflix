import styled from "styled-components";

export const Content = styled.div`

    color: #111;

    h1{
        margin-bottom: 10px;
    }
    p{
        margin-top: 10px;
        color: #555;
    }

    div{
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        a{
            display: flex;
            align-items: center;
            background-color: #D81F26;
            height: 35px;
            padding: 0 20px;
            border: 0;
            outline: none;
            border-radius: 0.25rem;
            cursor: pointer;
            color: #fff;
            text-decoration: none;
        }

        button{
            height: 35px;
            padding: 0 20px;
            border: 0;
            outline: none;
            border-radius: 0.25rem;
            cursor: pointer;

            &.salve{
                background-color: #111111;
                color: #fff;
                font-size: 1rem;
                font-weight: 500;
            }
        }
    }

`;