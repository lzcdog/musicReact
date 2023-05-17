import styled from 'styled-components';
export const MenuHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  height: 33px;
  border-bottom: 2px solid #C10D0C;
  .title {
    font-size: 20px;
    font-weight: normal;
  }
  .icon {
    background: url(${require("@/assets/img/index.png")});
    height: 33px;
    width: 33px;
    background-position: -225px -156px;
  }
  .types_list {
    flex: 1;
  }
  a {
    padding: 0 20px;
    color: #666;
    border-right: 1px solid #ccc;
    &:hover {
      text-decoration: underline;
    }
    &:last-child {
      border-right: none;
    }
  }
  .right {
    display: flex;
    color: #666;
    cursor: pointer;
    .arrow{
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`