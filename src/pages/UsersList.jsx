import React, { useMemo } from 'react'
import ReactDataTable from '../components/ReactDataTable'
import { users } from '../utils/users'
const UsersList = () => {
    const columns = useMemo(() => {
        return [
            {
                header: "Name",
                accessorKey: "name"
            },
            {
                header: "Age",
                accessorKey: "age"
            },
            {
                header: "Phone",
                accessorKey: "phone"
            },
            {
                header: "Country",
                accessorKey: "country"
            }
        ]

    }, [])
    return (
        <ReactDataTable columns={columns} data={users} />
    )
}

export default UsersList