import styled, { css } from 'styled-components'
const bg = css`
  background: url(${require('@/assets/img/playbar.png')}) repeat 0 9999px;
`
export const AppPlayerWrapper = styled.div`
  position: fixed;
  bottom: ${props=>props.isShow ? '0':'-44px'};
  width: 100%;
  height: 53px;
  ${bg}
  background-position: 0 0;
  transition: all .5s;
  .content {
    display: flex;
    align-items: center;
    height: 47px;
  }
  .suo_box {
    position: absolute;
    top: -14px;
    right: 15px;
    width: 52px;
    height: 67px;
    ${bg}
    background-position: 0 -380px;
    .suo {
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
      ${bg}
      background-position: ${props=>props.isSuo ? ' -100px -400px':'-80px -380px'};
    }
  }
`
export const AppPlayerLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  /* margin-top: 6px; */
  margin-top: 12px;
  .prev {
    width: 28px;
    height: 28px;
    ${bg}
    background-position: 0 -130px;
  }
  .play {
    width: 36px;
    height: 36px;
    margin-top: 0;
    ${bg}
    margin: 0 8px;
    background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};
  }
  .next {
    width: 28px;
    height: 28px;
    ${bg}
    background-position: -80px -130px;
  }
`

export const AppPlayerCenter = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  height: 100%;
  margin-top: 15px;

  .img_box {
    position: relative;
    img {
    }
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 34px;
      height: 35px;
      background: url(${require('@/assets/img/playbar.png')}) no-repeat 0 9999px;
      background-position: 0 -80px;
      z-index: 99;
    }
  }
  .detail_info {
    display: flex;
    flex-direction: column;
    align-self: start;
    margin-top: 7px;
    margin-left: 15px;

    .song_info {
      display: flex;
      align-items: center;
      .song {
        color: #e8e8e8;
      }
      .singer {
        margin-left: 15px;
        color: #9b9b9b;
      }
      .search {
      }
    }
    .slider {
      display: flex;
      align-items: center;
      margin-top: 3px;
      .time {
        margin-left: 10px;
        .s_time {
          color: #a1a1a1;
        }
        .e_time {
          color: #797979;
        }
      }
    }
    .ant-slider {
      width: 493px;
      margin: 0;
    }
    .ant-slider-rail {
      height: 9px;
      background: url(${require('@/assets/img/statbar.png')}) no-repeat 0 9999px;
      background-position: right -30px;
    }
    .ant-slider-track {
      height: 9px;
      background: url(${require('@/assets/img/statbar.png')}) no-repeat 0 9999px;
      background-position: left -66px;
    }
    .ant-slider-handle {
      width: 22px;
      height: 24px;
      border: none;
      margin-top: -5px;
      background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;
      &::after {
        display: none;
      }
      &::before {
        display: none;
      }
    }
  }
`
export const Operator = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  height: 100%;
  margin-left: 15px;
  .btn {
    width: 25px;
    height: 25px;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${(props) => {
        switch (props.playStatus) {
          case 1:
            return '-66px -248px'
          case 2:
            return '-66px -344px'
          default:
            return '-3px -344px'
        }
      }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`
