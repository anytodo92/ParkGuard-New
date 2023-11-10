import styled from "styled-components";
import { Images } from "../../../utils/assets";

export const BannerWrapper = styled.section`
  position: relative;
  height: auto;
  padding-bottom: 50px;
  .bg {
    position: absolute;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    
    left: 0;
    top: 0;
    width: 100%;

    .lt {
      position: relative;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100% 100%;
      
      height: 58%;
      width: 100%;
    }
  }

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    
    position: relative;
    display: flex;
    flex-direction: column;
    
    .summary {
      margin-top: 150px;
      padding-bottom: 240px;
      h2 {
        font-weight: 700;
        font-size: 36px;
        line-height: 40px;
        color: ${props => props.theme.colors.black};
      }
      .desc {
        margin-top: 30px;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: ${props => props.theme.colors.black};
      }
      
    }

    .cards {
      
      position: relative;
     
      p {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: ${props => props.theme.colors.black};
        margin-top: 30px;
      }

      .func {
        display: flex;
        justify-content: center;
        a {
          height: 42px;
          border: 1.5px solid ${props => props.theme.colors.black};
          border-radius: 42px;
          padding: 0 36px;
          display: inline-flex;
          align-items: center;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          color: ${props => props.theme.colors.black};
          margin-top: 30px;
          cursor: pointer;
          background-color: transparent;
          text-decoration: none;
        }
      }

      .card1 {
        padding: 40px 20px;
        margin-top: -150px;
        border-radius: 30px;
        background: linear-gradient(180deg, #FFF 27.72%, #D7D7D7 99.66%);
        box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.25);
      }

      .card2 {        
        padding: 40px 20px;
        margin-top: 25px;
        border-radius: 30px;
        background: linear-gradient(178deg, #FFF 9.79%, #D7D7D7 188.73%);
        box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.25);
      }
    }
  }

  @media(min-width: ${props => props.theme.breakpoints.desktop}) {
    overflow: hidden;
    height: 540px;
    padding-bottom: 0;
    .content {
      flex-direction: row;
      height: 100%;

      .summary {
        width: 40%;
        margin-top: 200px;
        margin-left: 0;
        padding-bottom: 0;

        h2 {
          font-size: 30px;
          line-height: 1.13;
          max-width: 540px;
        }

        .desc {
          font-size: 18px;
          line-height: 1.2;
          max-width: 490px;
        }
      }

      .cards {
        width: 60%;
        padding-bottom: 0;
       
        .card1 {
          position: absolute;
          left: 40px;
          bottom: -365px;
          transform: rotate(-6.76deg);
          padding: 40px 20px 70px;
          width: 55%;
          max-width: 440px;
          height: 700px;
          margin-top: 0;
        }
        .card2 {
          position: absolute;
          bottom: -40px;
          right: 0;
          transform: rotate(6.76deg);
          padding: 40px 20px 70px;
          width: 45%;
          max-width: 380px;
          height: 370px;
          margin-top: 0;
        }
      }
    }
  }

  @media(min-width: 1500px) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;

      .cards {
        p {
          font-size: 18px;
          line-height: 22px;
        }

        .card1 {
          left: -30px;
        }
        .card2 {
          right: 80px;
        }
      }
    }
  }

`