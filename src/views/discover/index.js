import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import { dicoverMenu } from '../../common/local-data';
import { DiscoverBox } from './styled';
const Discover = memo((props) => {
  const { route } = props
  console.log(props);
  return (
    <DiscoverBox>
      <div className='top '>
        <div className='top_menu wrap-v1'>
          {
            dicoverMenu.map((item) => {
              return (
                <NavLink key={item.title} to={item.link}>{item.title}</NavLink>
              )
            })
          }
        </div>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverBox>
  )
})
export default Discover