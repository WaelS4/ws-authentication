import { LOGIN, LOGIN_FAIL, LOGIN_SUCCES, REGISTER, REGISTER_FAIL, REGISTER_SUCCES } from "../actionsTypes";



const initialState = {
    loading: false,
    token: null,
    users: null,
    errors: null,
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REGISTER:
            return { ...state, loading: true }
        case REGISTER_SUCCES:
            return { ...state, loading: false, users: payload }
        case REGISTER_FAIL:
            return { ...state, loading: false, errors: payload }
        case LOGIN:
            return { ...state, loading: true }
        case LOGIN_SUCCES:
            return { ...state, loading: false, token: payload }
        case LOGIN_FAIL:
            return { ...state, loading: false, errors: payload }

        default:
            return state;
    }
}
export default userReducer