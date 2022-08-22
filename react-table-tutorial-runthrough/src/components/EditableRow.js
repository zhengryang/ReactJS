import React from 'react';

const EditableRow = ({editFormData, handleEditFormChange}) => {
    return (
        <tr>
            <td>
                <input
                    type = "text"
                    required = "required"
                    placeholder='enter a name...'
                    name = "fullName"
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type = "text"
                    required = "required"
                    placeholder='enter a address...'
                    name = "address"
                    value={editFormData.address}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type = "text"
                    required = "required"
                    placeholder='enter a phoneNumber...'
                    name = "phoneNumber"
                    value={editFormData.phoneNumber}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type = "text"
                    required = "required"
                    placeholder='enter a email...'
                    name = "email"
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <button type="submit">Save</button>
            </td>
        </tr>
    );
};

export default EditableRow;