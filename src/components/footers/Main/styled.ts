import styled from "styled-components";

export const FooterWrapper = styled.footer`  
  overflow: hidden;
  width: 100%;
  color: ${props => props.theme.colors.white};
  z-index: ${props => props.theme.zIndexes.footer_layout};
  .content {
    position: relative;
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  > section {
    &:nth-child(1) {
      padding: 30px 0 40px;
      background-color: ${props => props.theme.colors.black};

      .content {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 35px;
        
        .col {
          > h2 {
            font-weight: 500;
            font-size: 22px;
            line-height: 1.5;
            color: ${props => props.theme.colors.white};
          }
          > p {
            font-weight: 400;
            font-size: 16px;
            line-height: 1.5;
            color: ${props => props.theme.colors.white};
            &:nth-child(2) {
              margin-top: 17px;
            }
           > a {
              color: ${props => props.theme.colors.white};
              text-decoration: none;
            }
          }
        }
      }
    }

    &:nth-child(2) {
      background-color: ${props => props.theme.colors.black_third};
      
      .content {
        display: flex;
        padding: 20px 0;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: ${props => props.theme.colors.white};
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {
    
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-top: 120px;
    margin-top: -120px;
  
    > section {
      &:nth-child(1) {
        padding: 20px 0;
        .content {
          grid-template-columns: 200px 200px 200px;

          
        }
      }
      &:nth-child(2) {
        
      }
    }
  }

  @media (min-width: 1500px) {
    .content {
      margin: 0 auto;
      width: ${props => props.theme.maxWidth}px;
    }
  }
`