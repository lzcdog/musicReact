import styled from 'styled-components'
export const RankWrapper = styled.div`
  margin-top: 37px;
`
export const RankContent = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #d3d3d3;
  background-color: #f2f2f2;
  margin-top: 20px;
  .list {
    width: 33.3%;
    border-right: 1px solid #d3d3d3;
    &:last-child {
      border-right: none;
    }
  }
`
