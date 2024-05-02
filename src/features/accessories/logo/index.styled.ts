import { ComponentStyleType } from "@utils/styleUtils";
import styled from "styled-components";

const Container = styled.div<ComponentStyleType>`
  width: ${({ $width }) => $width};
  aspect-ratio: 1/1;
  font-size: ${({ $fontSize }) => $fontSize};

  .circle {
    width: inherit;
    height: 100%;
    border-radius: 100%;
    background-color: #c4992c;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
      font-family: "Nunito Sans", sans-serif;
      font-size: 2em;
      margin: 0;
      line-height: 0.6em;
      font-weight: 700;
      color: #173e67;
    }

    .eye {
      transform: rotateZ(-90deg) scaleY(1.5) translateY(0.04em);
    }

    .mouth {
      transform: scale(1.4, 0.6);
    }
  }
`;

export { Container };
