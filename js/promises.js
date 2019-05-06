// const wait = (number) =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve();
//         },number)
//     })
// }
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


let url="https://api.github.com";
const getLastCommit = userName =>{
    return fetch(url+"/users/"+userName+"/events", {headers: {'Authorization': 'token c1e7faff5f708526854fa5ebdd52b0fcb5caed63'}}).then(result=>{
        if (result.ok){
            return result.json().then(json => {
                return json[0].created_at;
            });
        }
    }).catch(reject=>{console.log(reject)});
};
