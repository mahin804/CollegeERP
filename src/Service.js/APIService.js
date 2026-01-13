import axios from "axios"
//const BaseURl = "https://localhost:52386"
const BaseURl = "https://collegeerpapirepo-1.onrender.com"

export const LoginPostApi = async (BodyData) => {
    return await axios.post(`${BaseURl}/api/StudentRegister/login1`, BodyData);
}
export const GetDashboardCountsApi = async () => {
    return await axios.get(`${BaseURl}/api/StudentRegister/GetCounts`);
};
export const saveCollegeInfo = async (collegeData) => {
  return await axios.post(`${BaseURl}/api/CollegeInfo`, collegeData);
};
export const GetCollegeInfo = async () => {
  return await axios.get(`${BaseURl}/api/CollegeInfo`)
}
export const SaveCourse = async (CourseData) => {
  return await axios.post(`${BaseURl}/api/Coures`, CourseData)
}
export const GetCourses = async () => {
  return await axios.get(`${BaseURl}/api/Coures`);
};