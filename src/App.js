import React,{useEffect,useState} from 'react';
import './App.css';
import Table from './Table';
import axios from 'axios';
import Add from './Add/AddModal.js';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

const App=()=> {
const [successful,setSuccessful]=useState("")

const updateSucess=(val)=>{
     setSuccessful(val)
     setTimeout(function(){
     setSuccessful('')
     }, 4000);
}

const [state,setState]=useState({
      student:[]
})

useEffect(() => {
    setTimeout(() => {

          getTable();
    },10);
  },[]);

useEffect(() => {
      $('#table').DataTable();
  },[state.student]);

const getTable=()=>{
    $('#table').DataTable().destroy();
    axios.get('http://localhost:8081/students/list')
   .then(response=>setState({student:response.data}))
}

const [show, setShow] = useState(false);

const addShow=()=>{
        setShow(true)
}

const addhide=()=>{
        setShow(false)
}

return (
      <div className="App">
      {successful}
              <Table data={state.student} getTable={getTable}  success={updateSucess} />
              <button className='button' onClick={addShow}><i class="fas fa-user-plus"></i>  Add New Student</button>
              <Add show={show} hide={addhide} getTable={getTable} success={updateSucess} />
      </div>

        );
}

export default App;
