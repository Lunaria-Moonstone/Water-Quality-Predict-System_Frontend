"use client"

import '@/assets/pagestyle/dashboard.css'

import React, { ReactNode } from 'react';
import { DatabaseOutlined } from '@ant-design/icons';
import type { BreadcrumbItemProps, BreadcrumbProps, MenuProps,  } from 'antd';
import { Menu } from 'antd';
import { Breadcrumb } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { MenuInfo } from 'rc-menu/lib/interface';


type MenuItem = Required<MenuProps>['items'][number];

function sidebarItemsBuilder(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

function breadcrumbItemsBuilder(path: string): Array<{ title: string | ReactNode }> {
  let items: Array<{ title: string | ReactNode }> = []
  let path_list = path.split('/')
  let curr_href = ''
  for (let i = 0; i < path_list.length; i += 1) {
    curr_href += path_list[i] + '/'
    if (i === 0) { 
      items.push({ title: path_list[i] }) 
    }
    else {
      items.push({ title: <a href={ curr_href }>{ path_list[i] }</a> })
    }
  }

  return items
}

const sideBarItems: MenuProps['items'] = [
  sidebarItemsBuilder('Overlook', 'overlook'),
  sidebarItemsBuilder('Data Manager', 'sub1', <DatabaseOutlined />, [
    // sidebarItemsBuilder('用户管理', 'g1', null, [sidebarItemsBuilder('用户管理', '1'),], 'group'),
    // sidebarItemsBuilder('样本管理', 'g2', null, [sidebarItemsBuilder('样本管理', '3'),], 'group'),
    sidebarItemsBuilder('User', 'user-manager'),
    sidebarItemsBuilder('Sample', 'sample-manager'),
  ]),
];
let breadcrumbItems: Array<{ title: string | ReactNode }> = [
  // { title: 'Home' },
  // { title: <a href="">Overlook</a>}
]

function Layout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname()
  const router = useRouter()
  breadcrumbItems = breadcrumbItemsBuilder(pathname)

  const menuClick = (key: string) => {
    // switch (key) {
    //   case 'overlook': 
    //     router.replace('/dashboard/overlook')
    //     break
    //   case 'user-manager':
    //     router.replace('/dashboard/user-manager')
    //   default:
    //     break
    // }
    router.replace(`/dashboard/${key}`)
  }

  return (
    <>
      <div className="side-bar">
        <Menu
          style={{ width: '100%', height: '100%' }}
          mode='inline'
          items={sideBarItems}
          onClick={(info) => menuClick(info.key)}
        />
      </div>
      <div className='main-view'>
        <Breadcrumb items={breadcrumbItems} />
        {children}
      </div>
    </>
  )
}

export default Layout