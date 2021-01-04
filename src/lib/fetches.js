
const {REACT_APP_API_URI} = process.env
const TOKEN = JSON.parse(localStorage.getItem('token'))
export const getListingsResearch = async (city,checkin,checkout) =>{
    console.log(city)
    try{
        const res = await fetch(`${REACT_APP_API_URI}/listings/search/results?city=${city}&checkin=${checkin}&checkout=${checkout}`)
        const data = await res.json()
        if(res.ok){
            console.log(data)
            return data
        } else{
            console.log('there was a problem fetching data')
        }

    }catch(err){
        console.log(err)
    }

}
export const login = async (body) =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    try{
        const res = await fetch(`${REACT_APP_API_URI}/users/login`,
        {
            headers:myHeaders,
            method: "POST",
            body:JSON.stringify(body)

        })
        if(res.ok){
            console.log(res)
            const data = await res.text()
            return data
        } else{
            console.log('there was a problem fetching data')
        }

    }catch(err){
        console.log(err)
    }

}

export const getUser = async (token) =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("auth-token", token && token);

    try{
        const res = await fetch(`${REACT_APP_API_URI}/users/me`,
        {
            headers:myHeaders,
            method: "GET"

        })
        if(res.ok){
            const data = await res.text()

            return data
        } else{
            console.log('there was a problem fetching data')
        }

    }catch(err){
        console.log(err)
    }

}
