const usersBlock = document.querySelector('.users')

function getUsers () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => data.forEach(user => {
            usersBlock.innerHTML += `
                <div class="user__card">
                    <h2>${user.name}</h2>
                    <span>username: ${user.username}</span>
                    <span>email: ${user.email}</span>
                    <span>phone: ${user.phone}</span>
                    <span>website: ${user.website}</span>
                </div>
            `
        }))
}

getUsers()