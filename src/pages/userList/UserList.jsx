import React from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import  DeleteOutline  from '@mui/icons-material/DeleteOutline'
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'user', headerName: 'User', width: 130, renderCell: (params) => {
            return <div className='userListUser'>
                <img className='userListImage' src={params.row.avatar} alt="" />
                {params.row.username}
            </div>
        }
    },
    { field: 'email', headerName: 'Email', width: 130 },
    {
        field: 'status',
        headerName: 'Status',
        width: 120,
    },
    {
        field: 'transaction',
        headerName: 'Transaction Volume',
        width: 160,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => {
            return (
                <>
                    <button className='userListEdit'>
                        Edit
                    </button>
                    <DeleteOutline className='userListDelete'/>
                </>
            )
        }
    }

];
const rows = [
    {
        id: 1, username: 'Snow', avatar: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'a@b.com',
        status: 'active',
        transaction: '$120'
    },
    {
        id: 2, username: 'Snow', avatar: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'a@b.com',
        status: 'active',
        transaction: '$120'
    },
    {
        id: 3, username: 'Snow', avatar: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'a@b.com',
        status: 'active',
        transaction: '$120'
    },
    {
        id: 4, username: 'Snow', avatar: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'a@b.com',
        status: 'active',
        transaction: '$120'
    },
    {
        id: 5, username: 'Snow', avatar: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'a@b.com',
        status: 'active',
        transaction: '$120'
    },
    {
        id: 6, username: 'Snow', avatar: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'a@b.com',
        status: 'active',
        transaction: '$120'
    },
    {
        id: 7, username: 'Snow', avatar: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'a@b.com',
        status: 'active',
        transaction: '$120'
    },
    {
        id: 8, username: 'Snow', avatar: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'a@b.com',
        status: 'active',
        transaction: '$120'
    },
    {
        id: 9, username: 'Snow', avatar: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'a@b.com',
        status: 'active',
        transaction: '$120'
    },
    {
        id: 10, username: 'Snow', avatar: 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'a@b.com',
        status: 'active',
        transaction: '$120'
    },

];
export default function UserList() {
    return (
        <div className='userList'>
            <div style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </div>
    )
}
