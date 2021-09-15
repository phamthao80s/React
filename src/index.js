import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
// #region 1
// const user ={ 
//     name: "Thao Pham",
//     email: "phamthao@80sgmail.com",
// };
// #endregion 1
//#region 2 JSX
// const myfirstelement =(
// <div className="Hello">
// <p> <h1> Hello Every one, </h1>

// <h3> My name is: {user.name}, and my email is: {user.email}</h3></p>

//     <h5> If you wanna contact with {user.name}, pls send me email to: {user.email} </h5>
// </div>
// );
//ReactDOM.render(myfirstelement, document.getElementById('root'));

//#endregion 2
//#region 3 Arrow function
// var numbers=[1,2,3,4];
// var doubleNumbers=numbers.map((eachNumber)=>eachNumber*2+";");
// ReactDOM.render(<h1>Double Numbers is: {doubleNumbers} </h1>, document.getElementById('root'));
//#endregion 3
//#region 4 Rendering element
// function updateTimer(){
//     const element =(
//         <div>
//             <h1> Timer update example</h1>
//             <h2> Current time now is: {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root')
//     );
// }
// setInterval(updateTimer,1000);
//#endregion 4
//#region 5 Component and Props
// // define component as js function
// function Userinfo(props){
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p> Email: {props.emai}</p>
//         </div>
//     );
//}
// define Component as class

// we can export this class below to be seperate file
class UserDetail extends React.Component{ 
    render(){
        return(
            <div className ="UserDetail">
            <p>Name: {this.props.name}</p>
            <p>Email: {this.props.email}</p>
       </div>
        );
    }
}
// the component below can be in a seperate file 
class Userinfo extends React.Component{ 
    render(){
        return(
        <div>
            <UserDetail name ={this.props.name} email={this.props.email}/>
            <div className ="OtherInfo">
                <p> Other Information: {this.props.otherInformation}</p> 
            </div> 
        </div>  
        );
    }
}
const element = <Userinfo name ="Thao Pham" email ="cindypham88@gmail.com" otherInformation="I like working from Home"/>;
ReactDOM.render(
    element,
    document.getElementById('root')
);
//#endregion 5
