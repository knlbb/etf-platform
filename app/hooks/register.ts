const Register = async (email: string, password: string) => {
    const user = await fetch(process.env.REGISTER_URL!, {
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

export default Register;