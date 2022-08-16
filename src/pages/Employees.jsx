import React from 'react';
import { GridComponent,Toolbar, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu,Search, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { employeesData , employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { sort } from '@syncfusion/ej2-react-charts';

const Eployees = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Eployees'/>

      <GridComponent
        id='gridcamp'
        dataSource={employeesData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        toolbar={['Search']}
        width='auto'

      >

        <ColumnsDirective>
          {employeesGrid.map((item,index) => (
            <ColumnDirective key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page , Sort , ContextMenu, Filter ,Resize ,ExcelExport , Edit , PdfExport , Toolbar]}/>
      </GridComponent >
    </div>
  )
}

export default Eployees
