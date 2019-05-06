const wait = (number) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },number)
    })
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


let url="https://api.github.com";
const getLastCommit = userName =>{
    return fetch(url+"/users/"+userName+"/events", {headers: {'Authorization': `token ${gitHubToken}`}}).then(result=>{
        if (result.ok){
            return result.json().then(json => {
                return json[0].created_at;
            });
        }
    }).catch(reject=>{console.log(reject)});
};
