export function login(loginData) {
    return {
        type: 'LOGIN',
        payload: loginData,
    }
}

export function update(userData) {
    return {
        type: 'UPDATE',
        payload: userData,
    }
}

export function logout() {
    return {
        type: 'LOGOUT',
    }
}
