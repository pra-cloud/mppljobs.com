import {
  GET_ADMIN_DETAILS,
  GET_ALL_COMPANIES,
  GET_ALL_JOBS,
  GET_ALL_USERS,
  GET_ALL_WEBINARS,
  GET_CLIENTS,
  GET_MOCK_TESTS,
  GET_NOTES,
  GET_USER_DETAILS,
  LOAD_UNAPPROVED_JOBS,
  GET_CONSULTANTS,
  LOGIN_USER,
  GET_ADMINS,
} from "../actions/types";

const initialState = {
  registeredClients: [],
  adminToken: "",
  unApprovedJobs: [],
  notes: [],
  jobs: [],
  webinars: [],
  companies: [],
  users: [],
  adnin: {},
  user: {},
  consultants: [],
  mockTests: [],
  admins: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        ...state,
        registeredClients: action.payload,
      };
    case LOGIN_USER:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        admintoken: action.payload,
      };
    case LOAD_UNAPPROVED_JOBS:
      return {
        ...state,
        unApprovedJobs: action.payload,
      };
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case GET_ALL_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case GET_ALL_COMPANIES:
      return {
        ...state,
        companies: action.payload,
      };
    case GET_ALL_WEBINARS:
      return {
        ...state,
        webinars: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case GET_ADMIN_DETAILS:
      return {
        ...state,
        admin: action.payload,
      };
    case GET_MOCK_TESTS:
      return {
        ...state,
        mockTests: action.payload,
      };
    case GET_CONSULTANTS:
      return {
        ...state,
        consultants: action.payload,
      };
    case GET_USER_DETAILS:
      localStorage.setItem("userSelected", JSON.stringify(action.payload));
      return {
        ...state,
        admin: action.payload,
      };
    case GET_ADMINS:
      return {
        ...state,
        admins: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
