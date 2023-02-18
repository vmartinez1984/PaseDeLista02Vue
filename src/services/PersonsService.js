import baseUrl from '@/services/BaseUrl'
const url = baseUrl.urlApiRollCall + "Persons"

export default{    
    async getPersonsAsync(){
        var persons

        await  fetch(url)        
        .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Error en la solicitud.');
              //console.log(response.text())
              //throw response.text()
            }
        })
        .then(data => {
            //console.log(data)
            persons = data
        })
        .catch(error =>{ throw error})

        return persons
    },
    async setPersonAsync(person){
        var myHeaders = new Headers();
        myHeaders.append("accept", "*/*");
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({            
            "name": person.name,
            "lastName": person.lastName,
            "genere": person.genere,
            "birthday": person.birthday
        });

        const response = await fetch(url,{
            method: 'POST',
            headers:  myHeaders,
            body: raw
        })

        if(!response.ok){
            response.json().then((errorJson) => {
                console.log(errorJson.errors); // should return the error json
            }); 
            console.log(response.text())
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        return data
    }
}