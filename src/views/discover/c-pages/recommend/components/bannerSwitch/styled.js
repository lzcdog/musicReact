import styled, { css } from 'styled-components';
export const BannerSwitchBox = styled.div`
  background: url(${props => props.bgImg});
  background-size: 6000px;
  background-position: center center;
  background-repeat: no-repeat;
  .content {
    position: relative;
    display: flex;
    height: 270px;
  }
`
export const BannerSwitchLeft = styled.div`
  width: 730px !important;
  .img {
    width: 100%;
  }
`
export const BannerSwitchRight = styled.div`
    position: relative;
  .download {
    position: relative;
    background: url(${require("@/assets/img/download.png")}) no-repeat 0 0;
    height: 270px;
  }
  
  .text {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    white-space: nowrap;
    font-size: 12px;
  }
  width: 250px;
  height: 100%;
`
export const arrow = css`
  position: absolute;
  height: 63px;
  width: 37px;
  top: 50%;
  transform: translateY(-50%);
  background: url(${require("@/assets/img/banner.png")}) no-repeat ;
  cursor: pointer;
`;
export const BannerSwitchCenter = styled.div`
  
  .left_arrow {
    ${arrow}
    left: -100px;
    background-position: 0 -360px;
    &:hover {
      background-position: 0 -430px;
    }
  }
  .right_arrow {
    ${arrow}
    right: -100px;
    background-position: 0 -508px;
    &:hover {
      background-position: 0 -578px;
    }
  }
`
