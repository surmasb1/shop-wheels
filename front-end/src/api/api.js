import axios from "axios";
export const getwheels = ()=>{
    return axios.get("/api/product")
}
