import React, {useState} from 'react';

function Todo({data, setData, value, setValue}) {
    const [check] = useState(null)

    function handleCompleted(id) {
        const newData = data.map((item) => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        })
        setData(newData)
    }

    function handleDelete(id) {
        let newData = data.filter(item => item.id !== id)
        setData(newData)
        console.log(data)
    }

    function handleUpdate(todo) {
        let newData = data.map((item) => {
            if (item.id === todo.id) {
                item.status = true
            } else {
                item.status = false
            }
            return item
        })
        setData(newData)
        setValue(todo.title)
    }

    return (
        <div>
            {data.map((item) => (
                <div key={item.id} className='box is-flex is-justify-content-space-around is-align-items-center mx-3'>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                    <p>{item.completed}</p>


                    <input type="checkbox" checked={check} onChange={() => handleCompleted(item.id)} name='completed'/>
                    <button onClick={() => handleDelete(item.id)} className='button is-danger is-small'>Delete</button>
                    <button onClick={() => handleUpdate(item)} className='button is-small is-warning'>Update</button>
                </div>

            ))}

        </div>
    );
}

export default Todo