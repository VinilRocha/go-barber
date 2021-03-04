import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    width: 100%;
    max-width: 700px;

    & > img {
        width: 15em;
    }

    form {
        margin: 80px 0;
        min-width: 340px;
        max-width: 100%;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        > a {
            color: #f4ede8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.3s;

            &:hover {
                color: ${shade(0.2, '#f4ede8')};
            }
        }
    }

    > a {
        color: #ff9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.3s;
        display: flex;
        align-items: center;

        &:hover {
            color: ${shade(0.2, '#ff9000')};
        }

        svg {
            margin-right: 16px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`;
