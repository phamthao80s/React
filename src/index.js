import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// #region 1
// const user ={ 
//     name: "Thao Pham",
//     email: "phamthao@80sgmail.com",
// };
// #endregion 1
//#region 2
// const myfirstelement =(
// <div className="Hello">
// <p> <h1> Hello Every one, </h1>

// <h3> My name is: {user.name}, and my email is: {user.email}</h3></p>

//     <h5> If you wanna contact with {user.name}, pls send me email to: {user.email} </h5>
// </div>
// );
//ReactDOM.render(myfirstelement, document.getElementById('root'));

//#endregion 2
//#region 3
// var numbers=[1,2,3,4];
// var doubleNumbers=numbers.map((eachNumber)=>eachNumber*2+";");
// ReactDOM.render(<h1>Double Numbers is: {doubleNumbers} </h1>, document.getElementById('root'));
//#endregion 3
//#region 4
function updateTimer(){
    const element =(
        <div>
            <h1> Timer update example</h1>
            <h2> Current time now is: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root')
    );
}
setInterval(updateTimer,1000);
//#endregion 4


