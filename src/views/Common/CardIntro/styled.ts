import styled from "styled-components";

export const CardIntroWrapper = styled.section`
  padding: 60px 0;

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    display: flex;
    flex-direction: column;
    column-gap: 50px;
  }

  h2 {
    position: relative;
    color: ${props => props.theme.colors.black};
    font-size: 45px;
    font-weight: 700;
    line-height: 1.5;

    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      display: inline-block;
      width: 69px;
      height: 4px;
      background-color: ${props => props.theme.colors.black};
    }
  }

  .desc {
    color: ${props => props.theme.colors.black};
    font-size: 18px;
    font-weight: 400;
    line-height: 1.2;
    margin-top: 20px;
  }

  .cards {
    display: flex;
    flex-direction: column;
    column-gap: 20px;
    row-gap: 20px;
    margin-top: 20px;

    .one {
      flex: 1;
      border-radius: 30px;
      border: 2px solid ${props => props.theme.colors.gray_primary};
      padding: 30px 45px 45px 35px;
      h4 {
        color: ${props => props.theme.colors.black};
        font-size: 30px;
        font-weight: 700;
        line-height: 1.2;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet_md}) {
    .cards {
      flex-direction: row;
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      flex-direction: row;
    }

    .cards {
      margin-top: 0;
    }
  }

  @media (min-width: 1500px) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`