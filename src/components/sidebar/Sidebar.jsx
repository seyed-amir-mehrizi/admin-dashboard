import React from 'react'
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimeLine from '@mui/icons-material/Timeline';
import TrendingUp from '@mui/icons-material/TrendingUp';
import PermIdentity from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MailOutline from '@mui/icons-material/MailOutline';
import DynamicFeed from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';


export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem active">
                            <LineStyleIcon className='sidebarIcon' />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <TimeLine className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem active">
                            <PermIdentity className='sidebarIcon' />
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <StorefrontIcon className='sidebarIcon' />
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem active">
                            <MailOutline className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem active">
                            <LineStyleIcon className='sidebarIcon' />
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimeLine className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div> 
            </div>
        </div>
    )
}
