import React from 'react';

const EditableRow = () => {
    return (
        <tr>
            <td>
                <input
                    type = "text"
                    required = "required"
                    placeholder='enter a name...'
                    name = "fullName"
                />
            </td>
            <td>
                <input
                    type = "text"
                    required = "required"
                    placeholder='enter a address...'
                    name = "address"
                />
            </td>
            <td>
                <input
                    type = "text"
                    required = "required"
                    placeholder='enter a phoneNumber...'
                    name = "phoneNumber"
                />
            </td>
            <td>
                <input
                    type = "text"
                    required = "required"
                    placeholder='enter a email...'
                    name = "email"
                />
            </td>
        </tr>
    );
};

export default EditableRow;