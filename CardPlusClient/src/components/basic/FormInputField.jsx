import React from 'react';

// export default class InputField extends React.Component{
//     render(){
//       return (
//           <input type="text" className="inputField" name={this.props.name} id={this.props.id}/>
//       );
//     }
// };

export default FormInputField = (field) => (
    <div className="input-row">
      <input {...field.input} type="text" className="inputField" name={this.props.name} id={this.props.id}/>
      {field.meta.touched && field.meta.error &&
       <span className="error">{field.meta.error}</span>}
    </div>
  )
