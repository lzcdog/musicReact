import styled, { css } from 'styled-components'
const sn = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 118px;
  &:hover {
    text-decoration: underline;
  }
`
export const NewAlbumWrapper = styled.div``
export const NewAlbumContent = styled.div`
  position: relative;
  height: 184px;
  background: #f5f5f5;
  border: 1px solid #d3d3d3;
  margin-top: 20px;
  .left_arrow {
    position: absolute;
    top: 71px;
    width: 17px;
    height: 17px;
    left: 3px;
    background: url(${require('@/assets/img/index.png')}) no-repeat 0 9999px;
    background-position: -260px -75px;
    cursor: pointer;
  }
  .right_arrow {
    position: absolute;
    top: 71px;
    width: 17px;
    height: 17px;
    right: 3px;
    background: url(${require('@/assets/img/index.png')}) no-repeat 0 9999px;
    background-position: -300px -75px;
    cursor: pointer;
  }
  .carousel {
    /* margin: 20px; */
    padding: 20px;
    height: 100%;
    /* background-color: red; */
    .album_list {
      display: flex !important;
      justify-content: space-between;
      align-items: center;
      .album_item {
        cursor: pointer;
        width: 118px;
        height: 150px;
        /* background-color: red; */
        margin-left: 11px;

        .img_box {
          position: relative;
          margin-bottom: 7px;
          img {
            width: 100px;
            height: 100px;
            /* box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.5); */
          }
          &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 118px;
            height: 100px;
            background-position: 0 -570px;
            background-image: url(${require('@/assets/img/coverall.png')});
            z-index: 99;
          }
        }
        .song_name {
          ${sn}
          font-size: 12px;
        }
        .artist {
          ${sn}
          font-size: 12px;
          color: #666;
        }
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
`
