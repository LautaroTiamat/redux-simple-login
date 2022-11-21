const getUserData = () => {
    const email = localStorage.getItem('email');

    if (email) {
        return {
            email,
        }
    } else {
        return false;
    }
}

const initialState = {
    user: getUserData(),
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
            }
        case 'UPDATE':
            localStorage.setItem('email', action.payload.email);
            
            return {
                user: {
                    ...state.user,
                    ...action.payload,
                },
            }
        case 'LOGOUT':
            localStorage.removeItem('email');

            return {
                user: false,
            }
        default:
            return state;
    }
}

export default reducer;
