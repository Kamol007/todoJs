import React, {useEffect, useState} from 'react'

function Form({data, setData, value, setValue}) {
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(data))
        }, [data])

    function handleSubmit(e) {
        e.preventDefault()
        let status = data.filter((item) => item.status).length

        if (status === 0 && value && data.length < 8) {
            let newData = {
                id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
                title: value,
                completed: false,
            }
            setData([...data, newData])
            e.target.todo.value = ''
            setValue('')
            return
        }
        if (status !== 0) {
            const updatedData = data.map((item) => {
                if (item.status) {
                    item.title = value
                    item.status = false
                }
                return item
            })
            setData(updatedData)
            e.target.todo.value = ''
            setValue('')
            return
        }
        window.alert('You did not write anything')
    }

    return (
        <div className="container">
            <p className='text'>What's the plan for today?</p>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <input
                    className="input is-primary"
                    type="text"
                    name="todo"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder="Enter tasks"/>
                <button
                    className="button is-info">{data.filter((item) => item.status).length === 0 ? 'Add' : 'Update'}</button>
            </form>
        </div>
    );
}

export default Form