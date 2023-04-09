import React from 'react';

const initalState={
    message:''
}
const useMessage = () => {
    const [state, setState] = React.useState(initalState);


const addMessage=(payload)=>{
    setState({
        ...state,
        message:payload
    })
}

return{
    state,
    addMessage
};


};


export default useMessage;