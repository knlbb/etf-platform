interface LoginBody {
    email: string;
    password: string;
    twoFactorAuthenticationCode?: string;
}

interface RegisterBody {
    email: string;
    password: string;
    referralCode?: string;
  }

    
    const API_BASE_URL = process.env.URL; 

    // Helper function to handle fetch response
    const handleResponse = async (response: Response) => {
    if (!response.ok) {
        const errorData = await response.json();
        throw errorData;
    }
    return response.json();
    };

    // API call to login
    const login = async (loginBody: LoginBody) => {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginBody),
        });
        return handleResponse(response);
    } catch (error) {
        throw error;
    }
    };

    // API call to register
    const register = async (registerBody: RegisterBody) => {
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerBody),
        });
        return handleResponse(response);
    } catch (error) {
        throw error;
    }
    };

    // API call to send reset password email
    const sendResetPasswordEmail = async (email: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/sendResetPasswordEmail`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
        });
        return handleResponse(response);
    } catch (error) {
        throw error;
    }
    };

    // API call to reset password
    const resetPassword = async (token: string, password: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/resetPassword`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
        });
        return handleResponse(response);
    } catch (error) {
        throw error;
    }
    };

    // API call to change password
    const changePassword = async (oldPassword: string, newPassword: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/changePassword`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ oldPassword, newPassword }),
        });
        return handleResponse(response);
    } catch (error) {
        throw error;
    }
    };

    // API call to send activate email
    const sendActivateEmail = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/sendActivateEmail`, {
        method: 'GET',
        });
        return handleResponse(response);
    } catch (error) {
        throw error;
    }
    };

    // API call to activate email
    const activateEmail = async (token: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/activateEmail`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
        });
        return handleResponse(response);
    } catch (error) {
        throw error;
    }
    };

    // API call to get user info
    const getUserInfo = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/forestadmin/getUsersInfo`);
        return handleResponse(response);
    } catch (error) {
        throw error;
    }
    };

    // API call to get users per month
    const getUsersPerMonth = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/forestadmin/getUsersPerMonth`);
        return handleResponse(response);
    } catch (error) {
        throw error;
    }
    };

    // API call to get user info
    const me = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/me`);
        return handleResponse(response);
    } catch (error) {
        throw error;
    }
    };

      

    export default {
        login,
        register,
        sendResetPasswordEmail,
        resetPassword,
        changePassword,
        sendActivateEmail,
        activateEmail,
        getUserInfo,
        getUsersPerMonth,
        me,
      };