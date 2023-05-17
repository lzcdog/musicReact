import styled from 'styled-components'
export const HotRecommendWrapper = styled.div`
  .hot_recommend_list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    .hot_recommend_item {
      width: 140px;
      margin: 0 0 30px 42px;
      font-size: 14px;
      &:nth-child(4n + 1) {
        margin-left: 0;
      }
      .img_box {
        position: relative;
        width: 140px;
        height: 140px;
        img {
          width: 140px;
          height: 140px;
        }
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 140px;
          height: 140px;
          background-image: url(${require('@/assets/img/sprite_cover.png')});
          background-position: 0 0;
        }
      }
      .detail_info {
        display: flex;
        align-items: center;
        height: 27px;
        background-image: url(${require('@/assets/img/sprite_cover.png')});
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 27px;
        background-position: 0 -537px;
        color: #ccc;
        .listen_icon {
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
          margin: 0 5px 2px 10px;
          background-image: url(${require('@/assets/img/iconall.png')});
        }
        .play_num {
          font-size: 12px;
          flex: 1;
        }
        .play_icon {
          width: 16px;
          height: 17px;
          background-position: 0 0;
          background-image: url(${require('@/assets/img/iconall.png')});
          margin-right: 10px;
        }
      }
      .hot_recommend_item_name {
        margin-top: 8px;
        line-height: 1.3;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
`
