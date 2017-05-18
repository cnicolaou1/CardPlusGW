import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Label from './basic/Label.jsx';
import TextField from './basic/TextField.jsx';
import InputField from './basic/InputField.jsx';
import FormInputField from './basic/FormInputField.jsx';
import Button from './basic/Button.jsx';
import { Field, reduxForm } from 'redux-form';

class UserPage extends React.Component{
    render(){
      const { handleSubmit } = this.props;
      return (
        <div>
          <Header pageTitle="User Maintenance"/>
          <form onSubmit={handleSubmit}>
            <div style={{borderBottomStyle:'groove',borderTopStyle:'groove',padding: '10px 0 10px 0'}}>
              <div className="inputPanelRow">
                <Label value="First Name:"/>
                <Field name="user.firstName" component={FormInputField} type="text"/>
              </div>
              <div className="inputPanelRow">
                <Label value="Last Name:"/>
                <InputField/>
              </div>
              <div className="inputPanelRow">
                <Label value="Middle Name:"/>
                <InputField/>
              </div>
              <div className="inputPanelRow">
                <Label value="Sex:"/>
                <InputField/>
              </div>
              <div className="inputPanelRow">
                <Label value="ID Number:"/>
                <InputField/>
              </div>
              <div style={{textAlign:'right'}}>
                <Button value="Add"/>
              </div>
            </div>
            <div>
                <Button value="Get All Users" onClick={(event)=>{this.props.invokeGetAllUsers();event.preventDefault();}}/>
            </div>
            <br/>
            <div>
            {this.props.users.map((user)=>{
                return (
                        <div key={user.id}>
                          {user.firstName + ' ' + user.lastName}
                        </div>)
              })
            }
            </div>
            {
            // <ul className="table">
            //   {
            //     this.props.users.map((user) => {
            //       return (
            //         <div key={user.id}>
            //           {user.firstName}{user.LastName}
            //         </div>);
            //     })
            //   }
            // </ul>
          }

          </form>
          <Footer text="User CRUD Page."/>
        </div>
      );
    }
};


// Decorate the form component
UserPage = reduxForm({
  form: 'userPage' // a unique name for this form
})(UserPage);

export default UserPage;
