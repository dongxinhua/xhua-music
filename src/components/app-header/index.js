import React, { memo } from 'react';

import { headerLinks } from "@/common/local-data.js";

import { NavLink } from 'react-router-dom';
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import {
  HeaderWrapper,
  ContentLeft,
  ContentRight
} from "./style"

export default memo(function XHHeader() {

  // 业务代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link} rel="noopener noreferrer" target="_blank">{item.title}</a>
    }
  }

  // 返回 jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <ContentLeft>
          <a href="#/" className="logo sprite_01"> </a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="select-item">
                    { showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </ContentLeft>
        <ContentRight>
          <Input
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
            className="search" />
          <div className="author-center">创作者中心</div>
          <div className="login">登录</div>
        </ContentRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
