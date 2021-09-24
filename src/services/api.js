export async function  getApi(){
    const response = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic')
    return response.json()
}