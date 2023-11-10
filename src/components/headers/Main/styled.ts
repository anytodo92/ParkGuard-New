import styled from "styled-components";

export const MainHeaderWrapper = styled.nav`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;

  height: 100px;
  overflow: hidden;
  
  z-index: ${props => props.theme.zIndexes.headerBar};
  //transition: all .5s ease-in-out;

  &.open {
    height: 280px;
    background-color: ${props => props.theme.colors.white};

    .content {
      .control {
        .menu {
          > li {
            &.btn {
              > a {
                border: 1.5px solid ${props => props.theme.colors.black};
                color: ${props => props.theme.colors.black};
              }
            }
          }
        }
      }
    }
  }
  &.normal-bar {
    animation: anim-normal-bar-show;
    animation-duration: .1s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  }

  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
    .logo {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .control {      
      .menu {
        font-weight: 400;
        font-size: 18px;
        line-height: 1.5;
        margin: 0;
        padding: 0;
        list-style: none;
        
        transition: margin-top .4s ease-in-out, opacity .2s ease-in-out;
  
        > li {
          padding: 10px 0;
          border-bottom: 1px solid #eaeaea;
          > a {
            text-decoration: none;
            color: ${props => props.theme.colors.black};
          }

          &.active > a {
            color: ${props => props.theme.colors.black};
          }

          &.btn {
            border: none;
            > a {
              width: 200px;
              height: 36px;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              border: 1.5px solid ${props => props.theme.colors.black};
              border-radius: 36px;
              color: ${props => props.theme.colors.black};
              font-weight: 400;
              font-size: 18px;
              line-height: 1.5;
              cursor: pointer;
            }
          }
        }
      }
    }

    .toggle-btn  {
      display: flex;
      align-items: center;
      height: 90px;
      cursor: pointer;
      color: ${props => props.theme.colors.black};

    }
  }

  @media (min-width: ${props => props.theme.breakpoints.laptop}) {

  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    &.normal-bar {
      animation: anim-normal-bar-show;
      animation-duration: .1s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      /*background-color: transparent;*/
    }

    &.sticky-bar {
      position: fixed;
      background-color: ${props => props.theme.colors.white};
      margin-top: 0px;
      height: 90px;
      
      .content {
        .logo {
          
        }
        .control {
          
          .menu {
            height: 90px; 
            > li {
              > a {
                color: ${props => props.theme.colors.black};
              }
              &.active > a {
                color: ${props => props.theme.colors.black};
              }

              &.btn {
                > a {
                  color: ${props => props.theme.colors.black};
                  border-color: ${props => props.theme.colors.black};
                }
              }
            }           
          }
        }
      }
      animation: anim-sticky-bar-show;
      animation-duration: 0.3s;
      animation-timing-function: ease-out;
    }

    .content {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;

      .control {
        display: flex;
        align-items: center;
        
        .menu {
          display: flex;
          align-items: center;
          clear: both;
          height: 100px;
          > li {
            float: left;
            margin: 0px 18px;
            border-bottom: none;
            padding: 0;

            &:last-child {
              margin-right: 0;
            }
            
            > a {
              color: ${props => props.theme.colors.black}
            }

            &.active > a {
              color: ${props => props.theme.colors.black};
            }
          }
        }
      }

      .toggle-btn {
        display: none;
      }
      .logo {
        display: block;
      }
    }
  }

  @media (min-width: 1500px) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }

  @keyframes anim-normal-bar-show {
    from {
      margin-top: -10px;
    }
    to {
      margin-top: 0px;
    }
  }
  @keyframes anim-sticky-bar-show {
    from {
      top: -110px;
      display: none;
    }
    to {
      top: 0px;
      display: block;
    }
  }

  @keyframes anim-menu-item-show {
    from { margin-top: -110px; }
    to { margin-top: 0 }
  }
`;