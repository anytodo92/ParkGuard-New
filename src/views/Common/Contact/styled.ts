import styled from "styled-components";

export const ContactWrapper = styled.section`
  padding: 45px 0 40px;
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;

    display: flex;
    flex-direction: column;
    column-gap: 15px;
    row-gap: 15px;
  }

  .alert {
    padding: 17px 30px 17px 30px;
    margin-bottom: 20px;
    &.alert-danger {
     color: #f1416c;
     background-color: #fff5f8;
    }
    &.alert-success {
      color: #50cd89;
      background-color: #e8fff3;
    }
    ul {
      list-style: none;
      padding: 0;
    }
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
    max-width: 548px;
  }

  .yform {
    margin-top: 10px;
    flex: 1;
    width: 100%;

    > p {
      color: #333;
      font-size: 18px;
      font-weight: 400;
      line-height: 150%;
      margin-left: -8px;

      > sup {
        color: ${props => props.theme.colors.red_primary};
      }
    }
    .form {
      display: flex;
      flex-direction: column;
      column-gap: 27px;
      row-gap: 10px;

      .col {
        flex: 1;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        
        > .group {
          > label {
            font-size: 18px;
            font-weight: 700;
            line-height: 1.5;
            color: ${props => props.theme.colors.black};

            > sup {
              font-weight: 700;
              color: ${props => props.theme.colors.red_primary};
            }
          }

          .entry-box {
            display: flex;
            column-gap: 10px;
            width: 100%;

            .form-group {
              width: 100%;
            }
          }

          input, select, textarea {
            outline: 0;
            border: 0;
            width: 100%;
            height: 48px;
            background-color: ${props => props.theme.colors.white};
            border: 1px solid #ECF2FE;
            border-radius: 15px;
            padding: 0 12px;
            color: #333;
            margin-top: 5px;
          }

          textarea {
            height: 136px;
            padding: 15px;
          }

          select {
            -webkit-appearance: none;
          }
        }
      }
    }

    .submit {
      margin-top: 15px;
      > button {
        background-color: ${props => props.theme.colors.black};
        color: ${props => props.theme.colors.white};
        width: 200px;
        height: 45px;
        border-radius: 15px;
        border: 0;
        outline: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 16px;
        line-height: 1.5;
        cursor: pointer;
      }
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    .content {
      flex-direction: row;
    }

    .yform {
      .form {
        flex-direction: row;
      }
    }
  }

  @media (min-width: 1500px) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`