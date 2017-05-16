const initialState = {
    zones: [],
    selectedZone: 0
}

const ZoneReducer = (state=initialState, actions) => {
    console.log(state)
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
            console.log(newState.zones)
            newState.zones.push(actions.payload)
            console.log(newState.zones)
            break
        }
        case 'DEL_ZONE' : {
            newState.zones = newState.zones.filter((zone) => {
                return zone['_id'] !== actions.payload['_id']
            })
            break
        }
    }
    return newState
}

export default ZoneReducer