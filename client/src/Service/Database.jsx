

class db {
    addUser({ email, password }) {
        const users = JSON.parse(localStorage.getItem('users')) || []
        const exist = users.find(user => user.email === email)
        if (exist) {
            throw new Error("User Already Exists")
        }
        users.push({ email, password })
        localStorage.setItem('users', JSON.stringify(users))
        return "User Is added"
    }

    authenticateUser({ email, password }) {
        const users = JSON.parse(localStorage.getItem('users')) || []
        const user = users.find(user => user.email === email)
        if (!user) throw new Error("User does not exist")
        if (user.password !== password) throw new Error("Password is not correct")
        return "User is authenticated"
    }

    logout(){
        
    }
}

export default db ;