import initialReports from '../data/initial-reports.json'

const GET_REPORT = 'report/loadReport'
const GET_ALL_REPORTS = 'report/loadAllReports'
const CREATE_REPORT = 'report/createReport'
const UPDATE_REPORT = 'report/updateReport'
const DELETE_REPORT = 'report/deleteReport'
const RESET_REPORTS = 'report/resetReports'

export const getReport = (reportId) => {
    return {
        type: GET_REPORT,
        reportId
    }
}
export const getAllReports = () => {
    return {
        type: GET_ALL_REPORTS,
        initialReports
    }
}
export const createReport = (report) => {
    return {
        type: CREATE_REPORT,
        report
    }
}
export const updateReport = (report) => {
    return {
        type: UPDATE_REPORT,
        report
    }
}

export const removeReport = (reportId) => {
    return {
        type: DELETE_REPORT,
        reportId
    }
}
export const resetReports = () => {
    return {
        type: RESET_REPORTS
    }
}

const initialState = {}
for (let report of initialReports){
    initialState[report.id] = report
}

const reportReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_REPORT:
            const newState = {...state};
            delete newState[action.reportId]
            return newState
        case CREATE_REPORT: {
            const newState = {...state, [action.report.id]: action.report};
            return newState
            }
        case UPDATE_REPORT: {
            const newState = {...state};
            newState[action.report.id] = action.report;
            return newState
            }
        case RESET_REPORTS: {
            return initialState
            }
        default:
            return state;
    }
}

export default reportReducer
