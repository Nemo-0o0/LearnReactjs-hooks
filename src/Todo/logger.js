function Logger(reducer) {
    return (prevState, action) => {

        console.log(action.type)
        console.log('Prev State:', prevState)
        console.log('Action', action);

        const newState = reducer(prevState, action)
        
        console.log('Next State: ', newState);

        console.groupEnd()

        return newState
    }
}

export default Logger;