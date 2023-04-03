// import { async } from "q";
import {
    GET_MATCHING_MEMBERS,

    GET_REPORT_SUMMARY,
    GET_ROUTINE_REPORT_LIST_BY_CONDITIONS,
    GET_CASUAL_REPORT_LIST_BY_CONDITIONS,
    GET_REPORT_ROUND_LIST,
    GET_REPORT_ROUND_DETAIL,
    GET_REPORT_DETAIL_LIST,
    
    POST_REGISTER_REPORT
} from "../modules/ReportModule";

export const callSelectSearchListAboutNameAPI = ({name}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/members/search?name=${name}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            }                
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[ReportAPICalls] callSelectSearchListAboutNameAPI RESULT', result);
            dispatch({type : GET_MATCHING_MEMBERS, payload : result.data});
                // dispatch({type : GET_MATCHING_MEMBERS, payload : result});
        }
    };
}

export const callReportSummaryAPI = () => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reports/summary`;

    return async (dispatch, getState) => {
        
        const result = await fetch(requestURL, {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            }
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[ReportAPICalls] callReportSummaryAPI RESULT', result);
            dispatch({type : GET_REPORT_SUMMARY, payload : result.data});
        }
    };
}

export const callRoutineReportListByConditionsAPI = ({completionStatus, offset}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reports/routines?completionStatus=${completionStatus}&offset=${offset}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            }                
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[ReportAPICalls] callRoutineReportListByConditionsAPI RESULT', result);
            dispatch({type : GET_ROUTINE_REPORT_LIST_BY_CONDITIONS, payload : result.data});
        }
    };
}

export const callCasualReportListByConditionsAPI = ({completionStatus, offset}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reports/casuals?completionStatus=${completionStatus}&offset=${offset}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            }                
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[ReportAPICalls] callCasualReportListByConditionsAPI RESULT', result);
            dispatch({type : GET_CASUAL_REPORT_LIST_BY_CONDITIONS, payload : result.data});
        }
    };
}

export const callRegisterReportAPI = ({formData}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reports`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : 'POST',
            headers : {
                // "Content-Type" : "application/json",
                // "Content-Type" : "application/json;charset=UTF-8",
                // "Content-Type" : "multipart/form-data;",
                // "Content-Type" : "multipart/form-data; boundary=<calculated when request is sent>",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            },
            body : formData
            // body : JSON.stringify({
            //     formData
            // })
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[ReportAPICalls] callRegisterReportAPI RESULT', result);
            dispatch({type : POST_REGISTER_REPORT, payload : result.data});
        }
    };
}

export const callSelectReportRoundListAPI = ({reportCode, offset}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reports/routine/${reportCode}/rounds?offset=${offset}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json",
                // "Content-Type" : "application/json;charset=UTF-8",
                // "Content-Type" : "multipart/form-data;",
                // "Content-Type" : "multipart/form-data; boundary=<calculated when request is sent>",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            }
            // body : formData
            // body : JSON.stringify({
            //     formData
            // })
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[ReportAPICalls] callSelectReportRoundListAPI RESULT', result);
            dispatch({type : GET_REPORT_ROUND_LIST, payload : result.data});
        }
    };
}

export const callselectReportRoundDetailAPI = ({reportCode, roundCode}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reports/routine/${reportCode}/rounds/${roundCode}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            }
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[ReportAPICalls] callselectReportRoundDetailAPI RESULT', result);
            dispatch({type : GET_REPORT_ROUND_DETAIL, payload : result.data});
        }
    };
}

export const callSelectReportDetailListByRoundCodeAPI = ({reportCode, roundCode}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8090/api/v1/reports/${reportCode}/rounds/${roundCode}/detail-reports`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : 'GET',
            headers : {
                "Content-Type" : "application/json",
                "Accept" : "*/*",
                "Authorization" : "Bearer " + window.localStorage.getItem("accessToken") 
            }
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[ReportAPICalls] callSelectReportDetailListByRoundCodeAPI RESULT', result);
            dispatch({type : GET_REPORT_DETAIL_LIST, payload : result.data});
        }
    };
}