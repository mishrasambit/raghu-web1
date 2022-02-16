import axios from 'axios'
export const GET_SIMULATION_LIST_REQUEST = 'GET_SIMULATION_LIST_REQUEST ' 
export const GET_SIMULATION_LIST_SUCCESS = 'GET_SIMULATION_LIST_SUCCESS'
export const GET_SIMULATION_LIST_FAILED = 'GET_SIMULATION_LIST_FAILED'
export const SET_SELECTED_SIMULATION = 'SET_SELECTED_SIMULATION'


export const getSimulationListReqeust=()=>{
    return {
        type : GET_SIMULATION_LIST_REQUEST
    }
}

export const getSimulationListSuccess=(payload)=>{
    return {
        type : GET_SIMULATION_LIST_SUCCESS,
        payload : payload
    }
}

export const getSimulationListFailed=()=>{
    return {
        type : GET_SIMULATION_LIST_FAILED
    }
}

export const setSelectedSimulation=(whatToComapre)=>{
    return {
        type : SET_SELECTED_SIMULATION,
        payload: whatToComapre
    }
}


export const fetchSimulationList= (brandName)=>{
    return async (dispatch) => {
        dispatch(getSimulationListReqeust())
        try{
            const response = await axios.get(`http://localhost:3004/simulation`)
            const data = response.data
            dispatch(getSimulationListSuccess({brandName, data :{data:data} }))
        }catch(err){
            dispatch(getSimulationListFailed())
        }
    }
}

const initialState = {
    simulationApproval:{},
    loading: false,
    error: undefined
}

export default function simulationApprovalReducer(state=initialState, action){
    switch(action.type){
        case GET_SIMULATION_LIST_REQUEST : return {
            ...state, loading: true, error: undefined
        }
        case GET_SIMULATION_LIST_SUCCESS : 
                let simulationApproval = state.simulationApproval
                simulationApproval[action.payload.brandName]= action.payload.data
                return {
                    ...state, loading: false, simulationApproval: simulationApproval, error: undefined
                }        
        case GET_SIMULATION_LIST_FAILED : return {
            ...state, loading: false, simulationApproval: {}, error: action.payload
        }
        case SET_SELECTED_SIMULATION : 
            let simulationApproval1 = state.simulationApproval
            let brandSimulationApprovals= simulationApproval1[action.payload.brandName]
            const selectedOption='selectedOption'
            brandSimulationApprovals[selectedOption]=action.payload.selectedOption
            simulationApproval1[action.payload.brandName]=brandSimulationApprovals
            return {
                ...state, loading: false, error: undefined, simulationApproval: simulationApproval1
            }
        default : return state
    }
}