---
title: Hello, World!
---

## Hello, World!

This is your first document in **Docusaurus**, Congratulations!

![Docusaurus logo](/img/docusaurus.png)

Relative Path Link [Create a page](./create-a-page.md)

Absolute Path Link [Blog page](/blog/hello-world)

export const Highlight = ({children, color}) => (
<span
style={{
backgroundColor: color,
borderRadius: '2px',
color: '#fff',
padding: '0.2rem',
}}>
{children}
</span>
);

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

import { CSVLink } from "react-csv";
import { DataGrid } from '@material-ui/data-grid';

export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age', headerName: 'Age', type: 'number', width: 90 },
    { field: 'fullName', headerName: 'Full name', 
            description: 'This column has a value getter and is not sortable.',
            sortable: false, width: '60',
            valueGetter: (params) => {
                console.log('params')
                console.log(params)
                console.log('params.row')
                console.log(params.row)
                console.log('params.getValue')
                console.log(params.row['firstName'])
                console.log(params.row['lastName'])
                console.log('-----')
                return `${params.row['firstName'] || ''} ${params.row['lastName'] || ''}`
            }
    },
];

export const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

<div style={{ 'display': 'flex', 'height': '100%' }}>
  <div style={{ 'flexGrow': 1 }}>
    <DataGrid autoHeight="true" rows={rows} columns={columns} pageSize={10} checkboxSelection />
  </div>
</div>

<CSVLink data={rows} headers={columns.map( it => ({ label: it.headerName, key: it.field }))}>
  Download me
</CSVLink>
