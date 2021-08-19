import { useTable } from 'react-table'
import { Link} from 'react-router-dom';
import React from 'react';
 
 function ProjectTable({ match}) {
   const data = React.useMemo(
     () => [
       {
         project: 'Music Recommendation Bot',
         description: 'A chat bot that recommends music based on user input and NLP.',
       },
       {
        project: 'Tile Puzzle',
        description: 'A desktop application game that simulates tile puzzles.',
       },
       {
           project: 'DocTrend',
           description: 'Web based application that provides users with a way of creating, storing, and retrieving documents.',
       }
     ],
     []
   )
 
   const columns = React.useMemo(
     () => [
       {
         Header: 'Project Name',
         accessor: 'project', // accessor is the "key" in the data
       },
       {
         Header: 'Description',
         accessor: 'description',
       },
     ],
     []
   )
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data })
 
   return (
     <table className="table table-striped" {...getTableProps()}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
 }

 export default ProjectTable;