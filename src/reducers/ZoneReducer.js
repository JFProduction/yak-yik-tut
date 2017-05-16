const initialState = {
    zones: [],
    selectedZone: 0,
    fetching: false,
    fetched: false,
    error: null
}

const ZoneReducer = (state=initialState, actions) => {
    let newState = Object.assign({}, state)
    switch (actions.type) {
        case 'INIT_ZONES': {
            newState.zones = actions.payload
            break
        }
        case 'SELECTED_ZONE': {
            newState.selectedZone = actions.payload
            break
        }
        case 'ADD_ZONE': {
            newState.zones.push(actions.payload)
            break
        }
        case 'DEL_ZONE' : {
            newState.zones = newState.zones.filter((zone) => {
                return zone['_id'] !== actions.payload['_id']
            })
        }
    }
    return newState
}

export default ZoneReducer