import styled from 'styled-components';
export const DiscoverBox = styled.div`
  .top{
    height: 30px;
    /* line-height: 30px; */
    background-color: rgb(194, 12, 12);
    .top_menu {
      display: flex;
      align-items: center;
      padding-left: 180px;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        padding: 3px 13px;
        margin: 0px 17px 0;
        border-radius: 20px;
        margin-top: 3px;
        text-decoration: none;
        &:hover {
          background-color: #9B0909;
        }
      }
      a.active {
        background-color: #9B0909;
      }
    }
  }
`