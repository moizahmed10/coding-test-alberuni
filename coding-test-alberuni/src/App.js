import { useState, useEffect } from 'react';
import UserTable from './Components/UserTable';
import SeniorUserssTable from './Components/SeniorUserssTable';
import WFMTable from './Components/WFMTable';
import './App.css';

function App() {
const [userData, setUserData] = useState([]);
const [seniorUserData, setSeniorUserData] = useState([]);
const [wfmData, setwfmData] = useState([]);
const [showModal , setShowModal] = useState(false)
const [newUser , setNewUser] = useState({    "role": 1, "firstName": "", "lastName": ""})
const [dataError , setError] = useState({"firstName" : false , "lastName": false , "role" : false })
const getData=()=>{
  const tempUser = [];
  const tempSenior = [];
  const tempWFM = []
  
  fetch('data.json'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      myJson.users.map(entry => {
          if(entry.role === 1){
            tempUser.push(entry)
          }
          else{
            if(entry.role === 2){
                tempSenior.push(entry)
            }
            else{
              if(entry.role === 3){
                  tempWFM.push(entry)
              }
            }
          }
      })
      setUserData([...tempUser]);
      setSeniorUserData([...tempSenior]);
      setwfmData(tempWFM)

    });
}
useEffect(() => {
  getData();
}, []);

const handleSearch = (e) => {
  console.log("IN HANDLE CHANGE");
  const value = e.target.value;
  const userSearchData = userData || []
  const seniorSearchData = seniorUserData || []
  const wfmSearchData = wfmData || []
  setUserData(
    userSearchData.filter(user => {
      let username = user.firstName.toLowerCase()
      let lastname = user.lastName.toLowerCase()
      if(username.includes(value?.toLowerCase())){
      return username?.includes(value?.toLowerCase())
    }
    else{
      if(lastname.includes(value?.toLowerCase())){
        return lastname?.includes(value?.toLowerCase())
      }
    }
    })
  )
  setSeniorUserData(
    userSearchData.filter(user => {
      let username = user.firstName.toLowerCase()
      let lastname = user.lastName.toLowerCase()
      if(username.includes(value?.toLowerCase())){
      return username?.includes(value?.toLowerCase())
    }
    else{
      if(lastname.includes(value?.toLowerCase())){
        return lastname?.includes(value?.toLowerCase())
      }
    }
    })
  )
  setwfmData(
    userSearchData.filter(user => {
      let username = user.firstName.toLowerCase()
      let lastname = user.lastName.toLowerCase()
      if(username.includes(value?.toLowerCase())){
      return username?.includes(value?.toLowerCase())
    }
    else{
      if(lastname.includes(value?.toLowerCase())){
        return lastname?.includes(value?.toLowerCase())
      }
    }
    })
  )
}

const handleClick = () => {
  setShowModal(!showModal)
}

const ValidateNewDataUser = () => {
console.log(newUser.firstName.length , newUser.lastName.length , "VALIDATE");

  if(newUser.firstName.length >= 2 ){
  if(newUser.lastName.length >= 2 ){
  return true
}
}

else{
  if(newUser.firstName.length === 0)
  {
    setError({...dataError , ...{"firstName" : true}})
  }
  if(newUser.lastName.length === 0)
  {
    setError({...dataError , ...{ "lastName": false}})
  }
  if(newUser.role === 0)
  {
    setError({...dataError , ...{ "role" : false}})
  }
  return false
}

}

const handleSave = () => {
 if(ValidateNewDataUser){
  if(newUser.role === 1){
    setUserData([...userData , newUser])
  }
  else{
    if(newUser.role === 2){
      setSeniorUserData([...userData , newUser])
    }
    else{
      if(newUser.role === 3){
        setwfmData([...userData , newUser])
      } 
    } 
  }
  setShowModal(false)
  }
}

const handleChange = (e) => {
  setNewUser({...newUser , ...{[e.target.id] : e.target.value}})
}

  return (
    <div className="App">
      <div className='searchSection'>
            <label for="search-user" >Search for employee:</label>
                <input type="text"  id="search-user" placeholder="Enter a name" onChange={(e) => handleSearch(e)}/>
        </div>
      <div><UserTable Data = {userData}/></div>
      <div><SeniorUserssTable Data= {seniorUserData}/></div>
      <div><WFMTable Data={wfmData}/></div>
      <div className='AddContainer'>
      <button onClick={handleClick}>Add User</button>
      </div>
      {showModal ? 
      <div className='modalContainer'>
    <div className='modalDataContainer'>
    <div className='inputFeilds'>
          <label>First Name</label>
          <input  type="text" id="firstName" onChange={(e) => {handleChange(e)}}/>
      </div>
     {dataError.firstName === true ?       <p className='ErrMsg'>This Feild is Required</p>
:""}
      <div className='inputFeilds'>
          <label>Last Name</label>
          <input type="text" id="lastName" onChange={(e) => {handleChange(e)}}/>
      </div>
      {dataError.lastName === true ?       <p className='ErrMsg'>This Feild is Required</p>
:""}
      <div className='inputFeilds'>
      <label>Role</label>
        
          <select defaultValue="Select A Role" id="role" onChange={(e) => {handleChange(e)}}>
                <option value={1}>User</option>
              <option value={2}>Senior User</option>
              <option value={3}>WFM Professional</option>
          </select>
      </div>
      {dataError.role === true ?       <p className='ErrMsg'>This Feild is Required</p>
:""}
      <div className='inputFeilds'>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleClick}>Cancel</button>
      
      </div>
    </div>
  </div>
  : ""
  }
    </div>
  );
}

export default App;
