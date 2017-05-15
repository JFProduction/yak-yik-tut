const ZoneReducer = (state={
    zones: [],
    selectedZone: 0,
    fetching: false,
    fetched: false,
    error: null
}, actions) => {
    let updatedState = Object.assign({}, state)
    switch (actions.type) {
        case 'INIT_ZONES': {
            updatedState.zones = actions.payload
            break
        }
        case 'SELECTED_ZONE': {
            updatedState.selectedZone = actions.payload
            break
        }
        case 'ADD_ZONE': {
            updatedState.zones.push(actions.payload)
            break
        }
    }
    return updatedState
}

export default ZoneReducer