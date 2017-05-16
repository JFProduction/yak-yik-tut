module.exports = {
    initZones: (zones) => {
        return {
            type: 'INIT_ZONES',
            payload: zones
        }
    },

    addZone: (zone) => {
        return {
            type: 'ADD_ZONE', 
            payload: zone 
        }
    },

    deleteZone: (zone) => {
        return { 
            type: 'DEL_ZONE', 
            payload: zone
        }
    },

    selectZone: (index) => {
        return {
            type: 'SELECTED_ZONE',
            payload: index
        }
    }
}