"use client"

import '@/assets/pagestyle/dashboard.css'

import React, { ReactNode } from 'react';
import { DatabaseOutlined, BranchesOutlined, LineChartOutlined } from '@ant-design/icons';
import type { BreadcrumbItemProps, BreadcrumbProps, MenuProps, } from 'antd';
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
      items.push({ title: <a href={curr_href}>{path_list[i]}</a> })
    }
  }

  return items
}

const sideBarItems: MenuProps['items'] = [
  sidebarItemsBuilder('Overlook', 'overlook', <LineChartOutlined />),
  sidebarItemsBuilder('Data Manager', 'sub1', <DatabaseOutlined />, [
    // sidebarItemsBuilder('用户管理', 'g1', null, [sidebarItemsBuilder('用户管理', '1'),], 'group'),
    // sidebarItemsBuilder('样本管理', 'g2', null, [sidebarItemsBuilder('样本管理', '3'),], 'group'),
    sidebarItemsBuilder('User', 'user-manager'),
    sidebarItemsBuilder('Sample', 'sample-manager'),
    sidebarItemsBuilder('Model', 'model-manager'),
  ]),
  sidebarItemsBuilder('Training', 'sub2', <BranchesOutlined />, [
    sidebarItemsBuilder('Training', 'training'),
  ])
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

  const signOut = () => {
    router.replace(`/sign/in`)
  }

  return (
    <>
      <div className='navbar'>
        <nav
          className="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-black border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <a href="/dashboard/"
              className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
              Dashboard
            </a>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-x-1">
                <button
                  className="hidden px-4 py-2 font-sans text-xs font-bold text-center text-white uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                  type="button">
                  <span>Lain</span>
                </button>
                <button
                  className="hidden select-none rounded-lg bg-gradient-to-tr bg-white py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                  type="button" onClick={signOut}>
                  <span>Sign out</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="side-bar">
        <Menu
          style={{ width: '100%', height: '100%' }}
          mode='inline'
          items={sideBarItems}
          onClick={(info) => menuClick(info.key)}
        />
      </div>
      <div className='main-view'>
        <Breadcrumb items={breadcrumbItems} style={{marginBlockStart: 'var(--standard-margin)'}}/>
        {children}
      </div>
    </>
  )
}

export default Layout