import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { AiOutlineGlobal } from 'react-icons/ai';
import { RxPerson } from 'react-icons/rx';
import { CiCalendar } from 'react-icons/ci';
import { LuBookOpenText } from 'react-icons/lu';
import { MdCategory, MdMovieFilter, MdOutlineMovieFilter } from 'react-icons/md';
import { RiMovie2AiLine } from 'react-icons/ri';
import { TbChairDirector } from 'react-icons/tb';
import { BiSolidCameraMovie } from 'react-icons/bi';
const { Header, Sider, Content } = Layout;
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider style={{height:"100vh"}} trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <RxPerson />,
              label: <Link to={"admin/actor"}>Actors</Link>,
            },
            {
              key: '2',
              icon: <AiOutlineGlobal />,
              label: <Link to={"admin/category"}>Category</Link> ,
            },
            {
              key: '3',
              icon: <CiCalendar />,
              label: <Link to={"admin/director"}>Director</Link>,
            },
            {
              key: '4',
              icon: <LuBookOpenText />,
              label: <Link to={"admin/genre"}>Genre</Link>,
            },
            {
              key: '5',
              icon: <RiMovie2AiLine />,
              label: <Link to={"admin/movie"}>Movie</Link>,
            },
            {
              key: '6',
              icon: <MdOutlineMovieFilter />,
              label: <Link to={"admin/movie-actor"}>Movies and Actors</Link>,
            },
            {
              key: '7',
              icon: <MdCategory />,
              label: <Link to={"admin/movie-category"}>Movies and Category</Link>,
            },
            {
              key: '8',
              icon: <TbChairDirector />,
              label: <Link to={"admin/movie-director"}>Movies and Directors</Link>,
            },
            {
              key: '9',
              icon: <BiSolidCameraMovie />,
              label: <Link to={"admin/movie-genre"}>Movies and Genre</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            height:"80vh",
            overflow:"scroll",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;