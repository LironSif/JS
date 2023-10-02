const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

let firstNames = [];
users.forEach(user => {
    firstNames.push(user.firstName);
});
firstNames.splice(0,1); 

const newOl = document.createElement('ol');

firstNames.forEach(name => {
    const newLi = document.createElement('li');
    newLi.textContent = name;
    newLi.style.listStyle = 'none';
    newLi.setAttribute('data-id', 'someValue');

    newOl.appendChild(newLi);
});
// newLi.style.listStyle = 'none'
document.body.appendChild(newOl); 

