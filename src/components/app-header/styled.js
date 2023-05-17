import styled from 'styled-components'
export const HeaderBox = styled.div`
  height: 75px;
  background-color: #242424;
  .section1 {
    display: flex;
    justify-content: space-between;
    height: 70px;
    /* background-color: blue; */
    .left {
      display: flex;
      font-size: 14px;
      color: #fff;
      .logo {
        display: block;
        width: 176px;
        height: 69px;
        background-position: 0 0;
        text-indent: -9999px;
      }
      .select_list{
        display: flex;
        line-height: 70px;
        .select_item {
          position: relative;
          display: flex;
          a{
            position: relative;
            padding: 0 20px;
            text-decoration: none;
            color: #ccc;
          }
          a:hover{
            color: #fff;
            background-color: #000;
          }
          a.active {
            color: #fff;
            background-color: #000;
            .icon {
              content: '';
              position: absolute;
              top: 64px;
              background-position: -105px -70px;
              background-size: 120px auto;
              display: block;
              position: absolute;
              left: 50%;
              width: 12px;
              height: 7px;
              margin-left: -6px;
              overflow: hidden;
            }
          }
          &:last-of-type  {
            &::after{
              content: '';
              display: block;
              position: absolute;
              top: 21px;
              left: 100px;
              width: 28px;
              height: 19px;
              background-position: -190px 0;
              background-repeat: no-repeat;
              background-image:url(${require("../../assets/img/sprite_01.png")});
            }
          }
        }
      }
    }
    .right {
      color: #fff;
      display: flex;
      align-items: center;
      .search{
        width: 158px;
        height: 32px;
        border-radius: 20px;
        input {
          font-size: 12px;
        }
      }
      .create_btn{
        /* display: block; */
        text-decoration: none;
        padding: 10px 20px;
        border: 1px solid #4F4F4F;
        border-radius: 20px;
        margin: 0 20px 0 15px;
        color: #ccc;
        &:hover{
          border-color: #fff;
          color: #fff;
        }
      }
      .login {
        color: #787878;
        cursor: pointer;
        &:hover {
          color: #666;
          text-decoration: underline;
        }
      }
    }
  }
  .section2 {
    height: 5px;
    background-color: #C20C0C;
  }
`
