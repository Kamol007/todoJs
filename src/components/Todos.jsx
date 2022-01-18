import React from 'react';
import Todo from "./Todo";

function Todos({data, setData, value, setValue}) {
    return (
        <Todo data={data} setData={setData} value={value} setValue={setValue}/>
    )
}

export default Todos