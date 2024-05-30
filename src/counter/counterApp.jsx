import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value)

    const onClickAdd = () => setCounter(counter + 1)
    const onClickSubs = () => setCounter(counter - 1)
    const onClickReset = () => setCounter(value)

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={onClickAdd}>+1</button>
            <button onClick={onClickSubs}>-1</button>
            <button onClick={onClickReset}>Reset</button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
    edad: PropTypes.number
}
