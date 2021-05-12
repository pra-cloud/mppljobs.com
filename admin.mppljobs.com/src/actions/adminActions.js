import axios from "axios";
import makeToast from "../Toaster";
import { GET_USER_DETAILS } from "./types";

export const URL = "http://localhost:5000";

// var role = JSON.parse(localStorage.getItem("adminRole"));

export const Verifytokens = async (tokens) => {
  try {
    let config = {
      headers: {
        "x-auth-token": tokens,
      },
    };
    const res = await axios.get(URL + "/verifytokens", config, {
      useCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const loginAction = async (cred) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(URL + "/api/admin/login/", cred, config);

    if (
      res.data.msg === "Invalid Credentials!" ||
      res.data.msg === "Admin Doesnt Exists!"
    ) {
      makeToast("error", res.data.msg);
    }
    if (res.data.token) {
      makeToast("success", "Success");
      if (cred.remember) localStorage.setItem("x-auth-token", res.data.token);
      else sessionStorage.setItem("x-auth-token", res.data.token);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getData = async (tokens) => {
  tokens =
    localStorage.getItem("x-auth-token") ||
    sessionStorage.getItem("x-auth-token");
  try {
    let config = {
      headers: {
        "x-auth-token": tokens,
      },
    };
    const res = await axios.get(URL + "/api/admin/getdata", config, {
      useCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const createJob = async (formData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.post(URL + "/api/jobs", formData, config);
    if (res.data.msg === "Job Created") {
      return true;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const approveJobs = async (id) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.get(URL + "/api/jobs/approve/" + id, config);
    if (res.data) {
      makeToast("success", "Job Approved");
      return true;
    }
  } catch (error) {
    makeToast("error", error.message);
    console.log(error.message);
    return false;
  }
};

export const deleteJobByID = async (id) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };

    console.log(URL + "/api/jobs/" + id);
    const res = await axios.delete(URL + "/api/jobs/" + id, config);

    if (res.data === "Job deleted.") {
      makeToast("success", "Success");
      return true;
    }
  } catch (error) {
    console.log(error.message);
    makeToast("error", error.message);
    return false;
  }
};

export const filterJobs = async (formData) => {
  try {
    const res = await axios.post(`${URL}/api/jobs/filterPage`, formData);

    return res.data.jobs;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCompanyByID = async (id) => {
  try {
    const res = await axios.delete(URL + "/api/company/delete/" + id);

    if (res.data.msg === "Company Deleted!") {
      makeToast("success", "Success");
      return true;
    }
  } catch (error) {
    console.log(error.message);
    makeToast("error", "Error");
    return false;
  }
};

export const getCompanyDetails = async (id) => {
  try {
    const res = await axios.get(`${URL}/api/company/details/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const createAdmin = async (formData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token":
          localStorage.getItem("x-auth-token") ||
          sessionStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.post(`${URL}/api/admin`, formData, config);

    if (res.data.msg === "Admin Created Successfully") {
      makeToast("success", "Admin created Successfully");
      return true;
    } else if (res.data.msg === "Admin Already Exists") {
      makeToast("error", "Admin Already Exists");
      return false;
    }
  } catch (error) {
    makeToast("error", "Error");
  }
};

export const getAllJobs = async () => {
  try {
    const res = await axios.get(URL + "/api/jobs/all");
    if (res.data.status === "success") {
      return res.data.mJobs;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getUnApprovedJobs = async () => {
  // console.log("function get unapproved jobs working");
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.get(URL + "/api/jobs/unApprovedJobs", config);

    if (res.data.status === "success") {
      return res.data.jobs;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const updateJobById = async (formData, id) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const res = await axios.patch(
      `${URL}/api/jobs/update/${id}`,
      formData,
      config
    );
    if (res.data.status === "success") {
      makeToast("success", "Job Updated");
      return true;
    }

    if (res.data.status === "failure") makeToast("error", res.data.msg);
    return false;
  } catch (error) {
    makeToast("error", "Error");
    console.log(error.message);
    return false;
  }
};

export const createCompany = async (formData) => {
  try {
    // const config = {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // };

    const res = await axios.post(URL + "/api/company/create", formData);
    if (
      res.data.msg === "Company Created!" ||
      res.data.msg === "Company Updated!"
    ) {
      makeToast("success", "Success");

      return true;
    }
  } catch (error) {
    console.log(error.message);
    makeToast("error", error.message);

    return false;
  }
};

export const updateCompanyById = async (formData, id) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const res = await axios.patch(
      `${URL}/api/company/update/${id}`,
      formData,
      config
    );
    if (res.data.status === "success") {
      makeToast("success", "Company Updated");
      return true;
    }

    if (res.data.status === "failure") makeToast("error", "Error");
    return false;
  } catch (error) {
    makeToast("error", "Error");
    console.log(error.message);
    return false;
  }
};

export const getAllCompanies = async () => {
  try {
    const res = await axios.get(URL + "/api/company/all");
    if (res.data.status === "success") {
      return res.data.cmp;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllCategories = async () => {
  try {
    const res = await axios.get(`${URL}/api/category`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getInactiveJobs = async () => {
  try {
    const res = await axios.get(URL + "/api/jobs/expired");
    if (res.data.status === "success") {
      return res.data.jobs;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAdminById = async (formData, id) => {
  try {
    const config = {
      headers: {
        "x-auth-token":
          localStorage.getItem("x-auth-token") ||
          sessionStorage.getItem("x-auth-token"),
      },
    };

    const res = await axios.patch(
      URL + "/api/admin/update/" + id,
      formData,
      config
    );

    if (res.data.msg) {
      return makeToast("error", res.data.msg);
    } else if (res.data.success) {
      makeToast("success", res.data.success);
      return true;
    }
  } catch (error) {
    return makeToast("error", error.message);
  }
};

export const banUserById = async (id, formData) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.post(
      URL + "/api/user/banUser/" + id,
      formData,
      config
    );
    if (res.data.msg === "User Banned!") {
      makeToast("success", "Banned");
      return true;
    }
  } catch (error) {
    console.log(error.message);
    makeToast("error", error.message);
    return false;
  }
};

export const createUser = async (formData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(URL + "/api/user", formData, config);
    if (res.status === 200) {
      makeToast("success", "Created");
      return true;
    }
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
    makeToast("error", "Failed");

    return false;
  }
};

export const getAllUsers = async () => {
  try {
    let config = {
      headers: {
        "x-auth-token":
          localStorage.getItem("x-auth-token") ||
          sessionStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.get(URL + "/api/admin/users", config);
    return res.data;
    // dispatch({ type: GET_ALL_USERS, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBannedUser = async () => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.get(URL + "/api/user/getBannedUser", config);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserDetailsByID = (id) => async (dispatch) => {
  console.log(id);
  try {
    let config = {
      headers: {
        "x-auth-token":
          localStorage.getItem("x-auth-token") ||
          sessionStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.get(URL + "/api/admin/user/details/" + id, config);

    dispatch({ type: GET_USER_DETAILS, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const unBanUserById = async (id) => {
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.get(URL + "/api/user/unBanUser/" + id, config);
    if (res.data.msg === "User UnBanned!") {
      makeToast("success", "UnBanned");
      return true;
    }
  } catch (error) {
    console.log(error.message);
    makeToast("error", error.message);
  }
};

export const updateUserById = async (formData, id) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.patch(
      URL + "/api/user/update/" + id,
      formData,
      config
    );
    if (res.data.msg === "User Updated") {
      return true;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const banAdminById = async (id) => {
  try {
    let config = {
      headers: {
        "x-auth-token":
          localStorage.getItem("x-auth-token") ||
          sessionStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.get(URL + "/api/admin/banAccount/" + id, config);
    if (res.data.msg === "Admin Blocked!") {
      makeToast("success", "Success");
      return true;
    }
  } catch (error) {
    console.log(error.message);
    makeToast("error", error.message);
    return false;
  }
};

export const getAdmins = async () => {
  try {
    let config = {
      headers: {
        "x-auth-token":
          localStorage.getItem("x-auth-token") ||
          sessionStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.get(URL + "/api/admin/allAdmins", config);
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getBannedAdmins = async () => {
  try {
    let config = {
      headers: {
        "x-auth-token":
          localStorage.getItem("x-auth-token") ||
          sessionStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.get(URL + "/api/admin/bannedAdmins", config);

    if (res.data.admins) {
      return res.data.admins;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const unBanAdmin = async (id) => {
  try {
    let config = {
      headers: {
        "x-auth-token":
          localStorage.getItem("x-auth-token") ||
          sessionStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.get(URL + "/api/admin/unBanAccount/" + id, config);
    if (res.data.msg === "Admin unBlocked!") {
      makeToast("success", "Success");
      return true;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const createNotes = async (formData) => {
  // console.log("function create notes working");
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.post(URL + "/api/notes/create", formData, config);
    if (res.data) {
      makeToast("success", "Success");
      return true;
    }
  } catch (error) {
    makeToast("error", error.message);
    console.log(error.message);
    return false;
  }
};

export const deleteNotesById = async (id) => {
  // console.log("function delete notes by id working");
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.delete(URL + "/api/notes/delete/" + id, config);
    if (res.data.status === "success") {
      makeToast("success", "Success");
      return true;
    }
  } catch (error) {
    makeToast("error", error.message);
    return false;
  }
};

export const getAllNotes = async () => {
  // console.log("function get notes working");
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
      },
    };
    const res = await axios.get(URL + "/api/notes/all", config);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const updateNotesById = async (formData, id) => {
  // console.log("function update notes by id working");
  try {
    const config = {
      headers: {
        "x-auth-token": localStorage.getItem("x-auth-token"),
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put(
      URL + "/api/notes/update/" + id,
      formData,
      config
    );
    if (res.data) {
      makeToast("success", "Success");

      return true;
    }
  } catch (error) {
    makeToast("error", error.message);

    return false;
  }
};

export const banConsultantById = async (id, formData) => {
  try {
    const res = await axios.post(
      URL + "/api/consultant/banConsultant/" + id,
      formData
    );
    if (res.data.msg === "Consultant Banned!") {
      makeToast("success", "Success");
      return true;
    }
  } catch (error) {
    console.log(error.message);
    makeToast("error", error.message);
    return false;
  }
};

export const createConsultant = async (formData) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      URL + "/api/consultant/createConsultant",
      formData,
      config
    );
    if (res.status === 200) {
      return true;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

export const getBannedConsultants = async () => {
  try {
    const res = await axios.get(URL + "/api/consultant/bannedConsultants");
    if (res.data.consultants) {
      return res.data.consultants;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getConsultants = async () => {
  try {
    const res = await axios.get(URL + "/api/consultant");
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const unBanConsultantById = async (id) => {
  try {
    const res = await axios.get(URL + "/api/consultant/unBanConsultant/" + id);
    if (res.data.msg === "Consultant unBanned!") {
      makeToast("success", "Success");
      return true;
    }
  } catch (error) {
    console.log(error.message);
    makeToast("error", error.message);
    return false;
  }
};

export const updateConsultantByID = async (formData, id) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put(
      URL + "/api/consultant/updateConsultant/" + id,
      formData,
      config
    );
    if (res.data.success === "Consultant Updated") {
      return true;
    }
    if (res.data.msg) {
      return false;
    }
  } catch (error) {
    console.log(error.message);
    makeToast("error", error.message);

    return false;
  }
};

export const createWebinars = async (formData) => {
  // console.log("function create webinars working");
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.post(
      URL + "/api/webinar/createWebinar",
      formData,
      config
    );
    if (res.data.msg === "Webinar Created!") {
      makeToast("success", "Success");
      return true;
    }
  } catch (error) {
    console.log(error.message);
    makeToast("error", error.message);
    return false;
  }
};

export const deleteWebinarsById = async (id) => {
  try {
    const res = await axios.delete(URL + "/api/webinar/delete/" + id);
    if (res.data.msg === "Webinar Deleted!") {
      makeToast("success", "Deleted");
      return true;
    }
  } catch (error) {
    console.log(error.message);
    makeToast("error", error.message);
  }
};

export const getAllWebinars = async () => {
  try {
    const res = await axios.get(URL + "/api/webinar/all");
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getInactiveWebinars = async () => {
  try {
    const res = await axios.get(URL + "/api/webinar/inActive");
    if (res.data.status === "success") {
      return res.data.webinar;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getInactiveEmployers = async () => {
  try {
    const res = await axios.get(URL + "/api/company/inActive");

    if (res.data.status === "success") {
      return res.data.cmps;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const updateWebinarByID = async (formData, id) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios.put(
      URL + "/api/webinar/update/" + id,
      formData,
      config
    );
    if (res.data.msg === "Webinar Updated!") {
      makeToast("success", "Webinar Updated");
      return true;
    }

    makeToast("error", "Error");
  } catch (error) {
    makeToast("error", error.message);

    console.log(error.message);
    return false;
  }
};
