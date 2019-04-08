import React from 'react';
import EditableContext from '../../Contexts/EditableContext';

const editableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

export default editableRow;