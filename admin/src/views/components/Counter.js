// import React, {useState, useEffect} from 'react';
// import {useFormInput} from "../../utils/hooks";
//
// function Counter() {
//     const [counter, setCounter] = useState(0)
//     const [firstName, setFirstName] = useFormInput("")
//     const [lastName, setLastName] = useFormInput("")
//
//     // const  increase = function () {
//     //     setCounter(counter + 1)
//     // }
//
//     const  updateTitle = () => {
//         document.title = firstName + " " + lastName
//     }
//
//     useEffect(() => {
//         // console.log("ComponentDidMount & ComponentDidUpdate (firstname & lastname only")
//         updateTitle()
//         console.log(firstName, lastName)
//         return () => {
//             console.log(firstName, lastName)
//         }
//     },[firstName, lastName]);
//
//     // useEffect(() => {
//     //    console.log("ComponentDidMount & ComponentDidUpdate")
//     // });
//     //
//     // useEffect(() => {
//     //     console.log("ComponentDidMount")
//     // },[]);
//
//
//     return (
//         <div>
//             <p>Counter: {counter}</p>
//             <button onClick={() => {setCounter(counter + 1)}}>Increase</button>
//             {/*<button onClick={increase}>Increase</button>*/}
//             <div>
//                 <label htmlFor="firstname">First Name: </label>
//                 <input type="text" id="firstname" onChange={setFirstName}/>
//             </div>
//             <div>
//                 <label htmlFor="lastname">Last Name: </label>
//                 <input type="text" id="lastname" onChange={setLastName}/>
//             </div>
//
//         </div>
//     );
// }
//
// export default Counter;