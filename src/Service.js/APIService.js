import axios from "axios"
//const BaseURl = "https://localhost:7288"
const BaseURl = "https://collegeerpapirepo-1.onrender.com"

export const LoginPostApi = async (BodyData) => {
    return await axios.post(`${BaseURl}/api/StudentRegister/login1`, BodyData);
}
export const GetDashboardCountsApi = async () => {
    return await axios.get(`${BaseURl}/api/StudentRegister/GetCounts`);
};