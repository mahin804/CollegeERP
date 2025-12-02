import axios from "axios"
const BaseURl = "https://localhost:44383"

export const LoginPostApi = async (BodyData) => {
    return await axios.post(`${BaseURl}/api/StudentRegister/login`, BodyData);
}
export const GetDashboardCountsApi = async () => {
    return await axios.get(`${BaseURl}/api/StudentRegister/GetCounts`);
};