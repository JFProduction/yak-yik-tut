export default {
    zoneInfo: {
        container: { 
            padding: 15, 
            background: '#f9f9f9',
            marginBottom: 10,
            border: '1px solid #ddd'
        },
        containerHover: {
            padding: 15, 
            background: '#f9f9f9',
            marginBottom: 10,
            border: '1px solid #ddd',
            boxShadow: '0px 10px 10px -10px #333',
            transform: 'scale(1.03)'
        },
        header: { 
            marginBottom: 3, 
            marginTop: 0
        },
        zoneName: { 
            color: '#ff5252'
        },
        detail: {
            font: 12,
            color: '#555'
        },
        deleteBtn: {
            display: 'inline-block',
            float: 'right',
            color: '#333'
        },
        deleteBtnHover: {
            display: 'inline-block',
            float: 'right',
            color: '#ff5252',
            cursor: 'pointer'
        }
    },
    comments: {
        container: {
            padding: 12, 
            background: '#f9f9f9', 
            border: '1px solid #ddd'
        },
        commentListItem: { listStyle: 'none' },
        infoContainer: { marginBottom: 15 },
        bodyWrapper: { 
            fontSize: 20, 
            fontWeight: 400,
            marginBottom: 2
        },
        textWrapper: { fontWeight: 200 },
        pipeWrapper: { marginLeft: 12, marginRight: 12 }
    }
}