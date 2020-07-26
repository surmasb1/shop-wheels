import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/api/product'
});

export const WheelAPI = {
    getwheels (){
        return instance.get()

    },

    async  request(url, method='GET', data=null) {
        try{
            const headers={}
            let body
            if (data){
                headers['Content-Type']='application/json'
                body = JSON.stringify(data)
            }
            const resoponse = await  fetch(url,{
                method,
                headers,
                body
            })
            return await resoponse.json()
        }catch (e) {
            console.warn('Err', e.message)
        }
    }

}

