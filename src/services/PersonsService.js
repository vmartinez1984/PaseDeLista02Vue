import baseUrl from '@/services/BaseUrl'

export default{    
    async getPersonsAsync(){
        //var baseUrl = "https://localhost:7110/api/"

        var url = baseUrl.urlApiRollCall + "Persons"
        var persons

        await  fetch(url)
        .then(response=> response.json())
        .then(data => {
            //console.log(data)
            persons = data
        })

        return persons
    }
}