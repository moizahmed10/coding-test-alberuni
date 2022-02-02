import React from 'react';

const AddUser = () => {
  return <div>
      <div>
          <label>First Name</label>
          <input />
      </div>
      
      <div>
          <label>Last Name</label>
          <input type="text"/>
      </div>
      <div>
          <select defaultValue={"Select A Role"}>
                <option>User</option>
              <option>Senior User</option>
              <option>WFM Professional</option>
          </select>
      </div>
  </div>;
};

export default AddUser;
