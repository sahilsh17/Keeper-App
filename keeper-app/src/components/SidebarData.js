import React from 'react'
import * as FaIcons from 'react/icons/Fa'
import * as AiIcons from 'react/icons/ai'
import * as IoIcons from 'react/icons/io'
import * as RiIcons from 'react/icons/ri'

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <AiIcons.AiFillHome/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Users',
        path: 'overview/users',
        icon: <IoIcons.IoIosPaper />,

      }, 
      {
        title: 'Revenue',
        path: 'overview/revenue',
        icon: <IoIcons.IoIosPaper />
        
      }
    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <AiIcons.AiFillHome/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Reports',
        path: 'overview/reports1',
        icon: <IoIcons.IoIosPaper />,

      }, 
      {
        title: 'Revenue 2',
        path: 'overview/reports2',
        icon: <IoIcons.IoIosPaper />
        
      },
      {
        title: 'Revenue 3',
        path: 'overview/reports3',
        icon: <IoIcons.IoIosPaper />
        
      }
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  }

]

