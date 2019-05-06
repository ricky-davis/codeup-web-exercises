const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

users.filter(user =>{
    if(user.languages.length>=3){
        return user;
    }
});

users.map(user=>{
    return user.email;
});
let totalYears = users.reduce((total,user)=>{
    return total+user.yearsOfExperience;
},0);
let average = totalYears/users.length;

users.reduce((longest,user)=>{
    if(user.email.length > longest.length){
        longest=user.email;
    }
    return longest;
},"a");

users.reduce((names,user)=>{
   return names+user.name+", "
},"Your instructors are: ");