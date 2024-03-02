import React from 'react'

const Options = ({ optionSort }) => {

    const handleChange = (e) => {
        const [field, order] = e.target.value.split(' ');
        optionSort(field, order);
    }

    return (
        <>
            <select onChange={handleChange} class="mb-3 h-10">
                <option>--Select--</option>
                <option>date asc</option>
                <option>date desc</option>
                <option>time asc</option>
                <option>time desc</option>
            </select>
        </>
    )
}

export default Options
