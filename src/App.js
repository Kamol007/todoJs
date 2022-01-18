import React, {useEffect, useState} from 'react';
import Todos from "./components/Todos";
import Form from "./components/Form";
import Footer from "./components/Footer"

const todos = [
    {id: 1, title: 'Wake up at 6AM', completed: false, status: false},
    {id: 2, title: 'java chi gap', completed: true, status: false}
]

export const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function App() {
    const [value, setValue] = useState('')
    const [data, setData] = useState(JSON.parse(localStorage.getItem("todos")) || todos)
    const [time, setTime] = useState('afternoon')

    const date = new Date()
    let hours = date.getHours()

    useEffect(() => {
        if (hours > 18 || hours < 7) {
            setTime('night')
        } else {
            setTime('afternoon')
        }
    }, [hours])

    return (
        <div className='box1 is-center'>
            <div
                className={`date ${time} top is-flex is-flex-direction-column is-align-items-center is-justify-content-center`}>
                <p>{Days[date.getDay()]}</p>
                <p>{date.getDate()}-{Months[date.getMonth()]}</p>
                <p>{time}</p>
                <p>{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</p>
            </div>
            <Form setData={setData} data={data} value={value} setValue={setValue}/>
            <Todos data={data} setData={setData} value={value} setValue={setValue}/>
            <Footer data={data} setData={setData}/>
        </div>
    );
}
