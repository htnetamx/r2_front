import styled from "styled-components";
import { responsive } from "styled/responsive";

export const Btn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 0;
  border-radius: 5px;
  justify-self: flex-end;
  margin-left: 10px;
  img,
  svg {
    width: 45px;
  }

  &:hover,
  &:active {
    background: rgba(0, 0, 0, 0.05);
  }
  ${responsive.xs} {
    width: 40px;
    height: 40px;
    margin-left: 5px;
  }
`;

export const BasketQuantity = styled.div`
  position: absolute;
  font-weight: 600;
  font-size: 11px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  right: -6px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  background: #080708;
  border: 3px solid #fff;
`;
