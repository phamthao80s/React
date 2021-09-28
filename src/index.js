import React from 'react';
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
// class UserDetail extends React.Component{ 
//     render(){
//         return(
//             <div className ="UserDetail">
//             <p>Name: {this.props.name}</p>
//             <p>Email: {this.props.email}</p>
//        </div>
//         );
//     }
// }
// // the component below can be in a seperate file 
// class OtherInfo extends React.Component{ 
//     render(){
//         return(
//             <div className ="OtherInfo">
//                 <p> Other Information: {this.props.otherInformation}</p> 
//             </div> 
//         );
//     }
// }
// // the component below can be in a seperate file 
// class Userinfo extends React.Component{ 
//     render(){
//         return(
//         <div>
//             <UserDetail name ={this.props.name} email={this.props.email}/>  
//             <OtherInfo otherInformation={this.props.otherInformation}/>
//         </div>  
//        );
//     }
// }

// const element = <Userinfo name ="Cindy" email ="cindypham88@gmail.com" otherInformation="I like working from Home"/>;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );
//#endregion 5 Component and Props
// //#region 6 State and Lifecycle
// class Counter extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state ={seconds:0};
//     }
//     incrementCounter(){
//         this.setState(
//             (
//                 prevSate,props)=>({
//                     seconds: prevSate.seconds +1

//                 })
//             );
//     }
//     componentDidMount (){
//         this.timerID = setInterval(
//             ()=> this.incrementCounter(),
//             1000
//         );

//     }
//     componentWillUnmount(){
//         clearInterval(this.timerID);

//     }
//     render(){
//         return(
//             <div>
//                 <h1> This is a counting machine</h1>
//                 <h2> Seconds: {this.state.seconds} s </h2>
//             </div>
//         );
//     }
//     }
// ReactDOM.render(<Counter/>,document.getElementById ('root')
// );
// //#endregion
//#region 7 More State
// class Car extends React.Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             brand: "ford",
//             model: "mj",
//             color: "red",
//             years: 1967
//         };
//     }
//     changeColor = ()=>{
//         this.setState({color:"blue"});
// }
//     render(){
       
//         return (
//         <div>
//         <h2> i am a {this.state.brand} car</h2>
//         <p>
//         it is a {this.state.color} {this.state.model} from {this.state.years}
//         </p>
//         <button
//         type ="button"
//         onClick ={this.changeColor} > changeColor</button>
//         </div>
//         );
//     }
// }

// ReactDOM.render(<Car/>, document.getElementById('root'));
//#endregion 7
//region 8 life cycle 
//ex1  getDerivedStateFromProps
// class Header extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state= {favoritecolor:"red"};
    
//     }
//    static getDerivedStateFromProps(props, state){
//        return {favoritecolor: props.favcol};
//    }
//     render (){
//         return(
//             <h1>
//                 My favorite color is {this.state.favoritecolor}
//             </h1>
//         );
//     }
// }
// ReactDOM.render(<Header favcol ="yellow"/>, document.getElementById ('root'));
 //ex 2  render
// class Header extends React.Component {
//     constructor (props){
//         super(props);
//         this.state={favoritecolor:"pink"};
//     }
//     changecolor=()=>{
//         this.setState({favoritecolor:"blue"});
//     }
//     render(){
//         return(
//             <div>
//                 <h1> My favorite color is {this.state.favoritecolor} </h1>
//                 <button type="button" onClick ={this.changecolor}> change color</button>

//             </div>
//         );
//     }
// }
// ReactDOM.render(<Header />, document.getElementById('root'));

// ex3  shouldComponentUpdate
// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     shouldComponentUpdate() {
//       return true;
//     }
//     changeColor = () => {
//       this.setState({favoritecolor: "blue"});
//     }
//     render() {
//       return (
//         <div>
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//         <button type="button" onClick={this.changeColor}>Change color</button>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(<Header />, document.getElementById('root'));
//#endregion 8
class ToggleButton extends React.Component{
    constructor(props) {
        super(props);
        this.state ={isOn:true};
    }
    buttonclick = () => {
        this.setState(prevsState => ({
            isOn:!prevsState.isOn
        }));
    }
    render() {  
        return(
            <button className="ToggleButton" onClick={this.buttonclick}> This is a toggle button
            {this.state.isOn? " ON": " OFF"}

            </button>
        );
    }
}
ReactDOM.render(<ToggleButton/>, document.getElementById ('root'));