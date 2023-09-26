import { useReactTable } from '@tanstack/react-table';
import React from 'react'

const ReactDataTable = ({ columns, data }) => {
    console.log("columns", columns);
    console.log("users", data)
    const myTable = useReactTable({
        columns,
        data
    })
    return (
        <div className='container mt-5'>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ReactDataTable