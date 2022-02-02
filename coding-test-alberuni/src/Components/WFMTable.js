import React from 'react';
import '../App.css';

const WFMTable = ({Data}) => {
  return <div className="tableContainer">
  <h2>WFM</h2>
  <table  id="wfm" border="1" frame="void" rules="rows">
      <thead>
          <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Role</th>
          </tr>
      </thead>
      
      <tbody>
              {Data.length !== 0 ? 
                 Data.map((entry , index) => (
                    <tr key={entry.firstName + entry.lastName}>
                  <th>{index +1}</th>
                  <td>{entry.firstName}</td>
                  <td>{entry.lastName}</td>
                  <td>WFM Professional		</td>
                  <td><button type="button" >Delete</button></td>
                  </tr>
                  ))
                 
           : "No User Data Found"
            }
              </tbody>
  </table>
</div>;
};

export default WFMTable;
