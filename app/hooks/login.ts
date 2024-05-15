
const Login = async (email: string, password: string) => {
    const user = await fetch(process.env.LOGIN_URL!, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
            email,
            password
        })
    })

    console.log(user)
};

export default Login;