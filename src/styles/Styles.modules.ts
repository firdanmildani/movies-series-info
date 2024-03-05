import styled from 'styled-components'
import '../styles/style.css'

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;

    .logo {
        font-size:2rem;
        font-family: "Darker Grotesque", sans-serif;
    }
    .navLinks {
        margin-left: auto;
    }
`;

export const MoviesSeriesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    
    .loadingOverlay{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        >p {
            font-size: 20px;
        }
    }

    .movieHeading {
       width: 100%;
       >h1 {
        margin-bottom: 1.5rem;
        font-family: "Darker Grotesque", sans-serif;
       }
    }

    .movieCard {
        display: flex;
        justify-content: center;
    }

    .movie {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 10px;
        transition: .2s ease-in-out;
        width: 100%;
        > span {
            position: relative;
            top: 295px;
            left: 75px;
            border: none;
            height: 35px;
            width: 35px;
            border-radius: 50px;
            padding: 2px;

            background-color: aqua;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .moviePoster {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            cursor: pointer;
            margin-bottom: 0;
            width:100%;
            
            > img {
                border-radius: 10px;
                justify-content: center;
                align-items: center;
                width:100%;
            }

        }
        &:hover {
            transform: scale(1.05);
        }
    }

    .movieInfo {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 0;

        > h3 {
            margin: 10px 0 2px 0;
            white-space: nowrap ;
            /* word-wrap: break-word; */
            overflow: hidden;
            text-overflow: ellipsis;
        }

        >p {
            margin: 0;
            color: gray;
            font-size: 14px;
        }
    }

    .buttons {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        text-align: center;

    }

`;

export const HeroWrapper = styled.div`
    width: 100%;
    height: auto;
    margin-top: 4.3rem;
    .hero-image {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 600px;
        
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;

        display: flex;
        justify-content: center;
        align-items: flex-end;
        
        .hero-text {
            text-align: center;
            padding-bottom: 4rem;
            > h1 {
                font-size: 55px;
                margin: 1rem;
                line-height: 80%;
            }

            > p {
                color: #B4B0AB;
            }
        }
        .hero-buttons {
            padding-top: 1.5rem;

            > button {
                width: 200px;
                border-radius: 50px;
                margin: 0.4rem;
            }
        }
        
    }
`;