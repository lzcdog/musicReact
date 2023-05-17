import React, { memo } from 'react'
import { MenuHeaderWrapper } from './styled'
import PropTypes from 'prop-types'
const MenuHeader = memo((props) => {
  return (
    <MenuHeaderWrapper>
      <div className='icon'></div>
      <div className='title'>{props.title}</div>
      <div className='types_list'>
        {
          props.types.map((item, index) => {
            return (
              <a href='#d' key={item}>{item}</a>
            )
          })
        }
      </div>
      <div className='right'>
        <div>更多</div>
        <div className='arrow sprite_02'></div>
      </div>
    </MenuHeaderWrapper>
  )
})
MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
  types: PropTypes.array
}
MenuHeader.defaultProps = {
  types: []
}
export default MenuHeader