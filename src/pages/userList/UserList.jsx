import React, { useState } from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutline from '@mui/icons-material/DeleteOutline'
import { rows } from '../../rows';
import { Link } from 'react-router-dom';

export default function UserList() {
    const [data, setData] = useState(rows);
    const handleDelete = (id) => {
        setData(data.filter((item) => {
            return item.id !== id
        }));
    }
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
                        <Link to={`/user/${params.row.id}`}>
                            <button className='userListEdit'>
                                Edit
                            </button>
                        </Link>
                        <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        }

    ];

    return (
        <div className='userList'>
            <div style={{ height: '100%', width: '100%' }}>
                <DataGrid
                    rows={data}
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
