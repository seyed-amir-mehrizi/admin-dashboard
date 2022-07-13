import React from 'react';
import PermIdentity from '@mui/icons-material/PermIdentity'
import CalendarToday from '@mui/icons-material/CalendarToday'
import PhoneAndroid from '@mui/icons-material/PhoneAndroid'
import MailOutline from '@mui/icons-material/MailOutline'
import LocationSearching from '@mui/icons-material/LocationSearching'




import './user.css';
function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className='userTitle'>
                    Edit User
                </h1>
                <button className='userAddButton'>Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="" alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Amir Mehrizi</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">
                            Account Details
                        </span>
                        <div className="userShowInfo">
                            <PermIdentity className='userShowIcon' />
                            <span className="userShowInfoTitle">Amir.Casper</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className='userShowIcon' />
                            <span className="userShowInfoTitle">1989.06.15</span>
                        </div>
                        <span className="userShowTitle">
                            Contact Details
                        </span>
                        <div className="userShowInfo">
                            <PhoneAndroid className='userShowIcon' />
                            <span className="userShowInfoTitle">+1 778 3692563</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className='userShowIcon' />
                            <span className="userShowInfoTitle">amir@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className='userShowIcon' />
                            <span className="userShowInfoTitle">Tehran, Vali'asr St</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate"></div>
            </div>

        </div>
    )
}

export default User