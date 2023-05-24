import * as React from 'react';

// nds-ui
import { Table, TRFolding } from '@/nds-ui/component';

const AutocompletePage = () => {
  
  return (
    <>
      <p className='size24'>Autocomplete 페이지입니다.</p>
      <div className='flex gap10'>
        <Table 
          classWrap={'h500 w500'}
          classTable={'w2000'}
          classTHead={''}
          classTBody={'col-last-align-end'}
          ColGroup={
            <>
            <col className='w50'/>
            <col className='w50'/>
            
            </>
          }
          THead={
            <>
            <tr>
              <th>asd</th>
              <th>asd asdasd</th>
              <th>asd</th>
            </tr>
            </>
          }
          TBody={
            <>
            <TRFolding 
              parent={
                <>
                <td>asd</td>
                <td>asd</td>
                </>
              }
            >
              <tr className='bgc-grayf5'>
                <td align='center'>asd1</td>
                <td >asd1 asd</td>
                <td align='center'>asd1</td>
              </tr>
              <tr className='bgc-grayf5'>
                <td >asd2</td>
                <td >asd2</td>
                <td >asd2</td>
              </tr>
              <tr className='bgc-grayf5'>
                <td >asd3</td>
                <td >asd3</td>
                <td >asd3</td>
              </tr>
            </TRFolding>
            <tr>
              <td>asd</td>
              <td>asd</td>
              <td>asd</td>
            </tr>
            <tr>
              <td>asd</td>
              <td>asd</td>
              <td>asd</td>
            </tr>
            <tr>
              <td>asd</td>
              <td>asd</td>
              <td>asd</td>
            </tr>
            <tr>
              <td>asd</td>
              <td>asd</td>
              <td>asd</td>
            </tr>
            <tr>
              <td>asd</td>
              <td>asd</td>
              <td>asd</td>
            </tr>
            <tr>
              <td>asd</td>
              <td>asd</td>
              <td>asd</td>
            </tr>
            <tr>
              <td>asd</td>
              <td>asd</td>
              <td>asd</td>
            </tr>
            <tr>
              <td>asd</td>
              <td>asd</td>
              <td>asd</td>
            </tr>
            <tr>
              <td>asd</td>
              <td>asd</td>
              <td>asd</td>
            </tr>
            </>
          }
        />

        
      </div>
    </>
  )
}

export default AutocompletePage;