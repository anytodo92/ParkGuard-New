import styled from "styled-components";

export const ContactWrapper = styled.section`
  .content {
    margin: 0 ${props => props.theme.margins.primary}px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    
  }

  @media (min-width: 1500px}) {
    .content {
      width: ${props => props.theme.maxWidth}px;
      margin: 0 auto;
    }
  }
`