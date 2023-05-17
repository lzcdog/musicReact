import React, { memo } from 'react'
import { HeaderBox } from './styled'
import { headerLinks } from '../../common/local-data'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const AppHeader = memo(() => {
  const mapSelectItem = () => {     
    return headerLinks.map((item, index) => {
      return (
        <div className='select_item' key={item.title}>
          { index < 3 ? 
              <NavLink to={item.link} >
                {item.title}
                <div className='icon sprite_01'></div>
              </NavLink> : 
              <a href={item.link}>{item.title}</a>
          }
        </div>
      )
    })
  }
  return (
    <HeaderBox>
      <div className='section1 wrap-v1'>
        <div className='left'>
          <a href='/' className='logo sprite_01'>网易云音乐</a>
          <div className='select_list'> { mapSelectItem() } </div>
        </div>
        <div className='right'>
          <Input className='search' placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}></Input>
          <a href='https://music.163.com/login?targetUrl=%2Fcreatorcenter' className='create_btn'>创作者中心</a>
          <div className='login'>登录</div>
        </div>
      </div>
      <div className='section2'></div>
    </HeaderBox>
  )
})

export default AppHeader