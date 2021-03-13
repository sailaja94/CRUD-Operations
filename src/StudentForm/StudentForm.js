import React from 'react';

const Form=(props)=>{


return (
         <div>
         <p id="invalidE" className="invalid"></p>
             <div className="form-group" id="editNParent">
               <label>Name *</label>
               <input type="text"  className="form-control"
               defaultValue={props.name} onChange={props.changeN} ></input>
              {props.invalidName}
             </div>
             <div className="form-group" id="editEParent">
                <label>Email *</label>
                <input type="text"  className="form-control"
                defaultValue={props.email} onChange={props.changeE}></input>
                {props.invalidEmail}{props.dupl}
             </div>
             <div className="form-group" id="editUParent">
                 <label>University Name *</label>
                 <input type="text"  className="form-control"
                 defaultValue={props.uname} onChange={props.changeU} ></input>
                 {props.invalidUName}
             </div>
         </div>
)

}

export default Form;