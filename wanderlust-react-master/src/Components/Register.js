import React, { Component } from "react";
import "../custom.css";
import { Redirect } from "react-router-dom";
import { Users } from "./models/User";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { Message } from "primereact/message";
import { InputText } from "primereact/inputtext";
import { backendUrlLogin } from "../BackendURL";
class Register extends Component {

    render(){
        return(
            <>
            <h1>Registration is successful</h1>
            <h1 className="text-center text-info">Registration is successful</h1>
            </>
		// <form>
		//    <div className="lable">
		//         <div className="col_1_of_2 span_1_of_2">	<input type="text" className="text" value="First Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'First Name';}" id="active"></div>
        //         <div className="col_1_of_2 span_1_of_2"><input type="text" className="text" value="Last Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Last Name';}"></div>
        //         <div className="clear"> </div>
		//    </div>
		//    <div className="lable-2">
		//         <input type="text" className="text" value="your@email.com " onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'your@email.com ';}">
		//         <input type="password" className="text" value="Password " onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password ';}">
		//    </div>
		//    <h3>By creating an account, you agree to our <span className="term"><a href="#">Terms & Conditions</a></span></h3>
		//    <div className="submit">
		// 	  <input type="submit" onclick="myFunction()" value="Create account" >
		//    </div>
		//    <div className="clear"> </div>
		// </form>
        
        );
    }
}//pushing 1st tym
//without puling m trying pushing

//pushing directly from github


export default Register;
