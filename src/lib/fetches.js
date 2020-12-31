

export const getListingsByCity = async (city) =>{
    try{
        const res = await fetch('http://localhost:3001/listings/search/city?city='+city)
        const data = await res.json()
        if(res.ok){
            return data
        } else{
            console.log('there was a problem fetching data')
        }

    }catch(err){
        console.log(err)
    }

}

