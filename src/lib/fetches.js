
const {REACT_APP_API_URI} = process.env
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

