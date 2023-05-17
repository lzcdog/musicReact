import styled from 'styled-components'
export const RankListWrapper = styled.div`
  width: 33.3%;
  height: 100%;
  border-right: ${(props) => (props.type === 2 ? 'none' : '1px solid #d3d3d3')};
  .detail {
    display: flex;
    padding: 20px 0 0 20px;
    .img_box {
      position: relative;
      width: 80px;
      height: 80px;
      img {
        width: 80px;
        height: 80px;
      }
      .glass {
        position: absolute;
        width: 80px;
        height: 80px;
        left: 0%;
        top: 0%;
        background-position: -145px -57px;
        background-image: url(${require('@/assets/img/sprite_cover.png')});
      }
    }
    .name_box {
      display: flex;
      flex-direction: column;
      margin: 6px 0 0 10px;
      .name {
        font-size: 14px;
        font-weight: 700;
      }
      .icon_box {
        display: flex;
        align-items: center;
        margin-top: 10px;
        .icon1 {
          width: 22px;
          height: 22px;
          background: url(${require('@/assets/img/index.png')}) no-repeat 0 9999px;
          background-position: -267px -205px;
          margin-right: 20px;
        }
        .icon2 {
          width: 22px;
          height: 22px;
          background: url(${require('@/assets/img/index.png')}) no-repeat 0 9999px;
          background-position: -300px -205px;
        }
      }
    }
  }
  .item_box {
    margin-top: 20px;
    .item {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding-left: 20px;
      height: 32px;
      line-height: 32px;
      &:nth-child(even) {
        background-color: #f4f4f4;
      }
      &:nth-child(odd) {
        background-color: #e8e8e8;
      }
      .song {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .name_box1 {
        width: 170px;
        display: flex;
        align-items: center;
      }

      .icon_box1 {
        display: none;
        .icon3 {
          width: 17px;
          height: 17px;
          background: url(${require('@/assets/img/index.png')}) no-repeat 0 9999px;
          background-position: -267px -268px;
          margin-left: 5px;
        }
      }
      &:hover .icon_box1 {
        display: flex;
        align-items: center;
      }
      .all {
        width: 100%;
        text-align: right;
        margin-right: 32px;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

export const No = styled.div`
  height: 32px;
  width: 32px;
  line-height: 32px;
  text-align: center;
  color: ${(props) => (props.index > 2 ? '#000' : '#c10d0c')};
  font-size: 16px;
`
