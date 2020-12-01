import React from 'react';

const FuncCounter = React.memo(({counter ,data}) => {
    console.log("Render func component")
    return (
        <div>Counter: {counter} | {data.counter} </div>
    );
})

export default FuncCounter;


// function FuncCounter({counter ,data}) {
//     console.log("Render func component")
//     return (
//         <div>Counter: {counter} | {data.counter} </div>
//     );
// }
//
// export default FuncCounter;