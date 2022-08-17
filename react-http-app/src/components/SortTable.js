import React from 'react';
import jsonData from '../MOCK_DATA.json'
import { useState } from 'react';


const SortTable = () => {

    const [sortData, setSortData] = useState(jsonData)
    const [order, setOrder] = useState('ASC')

    const sorting =(col) => {
        if(order === "ASC") {
            const sorted = [...sortData].sort((a,b) => 
                a[col].toLowerCase() > b[col].toLowerCase() ? 1: -1
            );
            setSortData(sorted)
            setOrder("DSC")
        }
        if(order === "DSC") {
            const sorted = [...sortData].sort((a,b) => 
                a[col].toLowerCase() < b[col].toLowerCase() ? 1: -1
            );
            setSortData(sorted)
            setOrder("ASC")
        }

    }

    return (
        <div className='container'>
            <table className='table table-bordered'>
            <thead>
                <th onClick={()=> sorting("first_name")}>first name </th>
                <th onClick={()=> sorting("last_name")}>last name</th>
                <th onClick={()=> sorting("email")}>email </th>
                <th onClick={()=> sorting("gender")}>Gender</th>

            </thead>
            <tbody>
                {
                    sortData.map((d)=> (
                        <tr key = {d.id}>
                            <td>{d.first_name}</td>
                            <td>{d.last_name}</td>
                            <td>{d.email}</td>
                            <td>{d.gender}</td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        </div>
    );
};

export default SortTable;