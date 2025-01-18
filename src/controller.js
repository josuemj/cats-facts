//fetch to api :)

//https://some-random-api.com/animal/cat

export async function getCat(){
    try{
        const response = await fetch('https://some-random-api.com/animal/cat')
        if (!response.ok){
            throw Error('API failed :(')
        }
        const data = await response.json()
        return data

    }catch(error){
        return []
    }
}