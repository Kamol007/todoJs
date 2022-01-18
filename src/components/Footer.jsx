import React from 'react';

export default function Footer({data}) {

    return (
        <div className="footer is-flex is-justify-content-space-around">
            <p>Tasks: &nbsp;
                {(data) ? data.length : 0}
            </p>
            <p>Completed: &nbsp;
                {(data) ? data.filter(todo => todo.completed).length : 0}
            </p>
            <p>Open: &nbsp;
                {(data) ? data.filter(todo => !todo.completed).length : 0}
            </p>

        </div>

    );
}