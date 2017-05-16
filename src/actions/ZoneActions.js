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

    delZone: (zone) => {
        return { 
            type: 'DEL_ZONE', 
            payload: zone
        }
    }
}