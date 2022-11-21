import { connect } from 'react-redux';
import { login, update, logout } from './../actions/auth.actions.js';
import LoginForm from './../component/LoginForm.js';

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: loginData => dispatch(login(loginData)),
        update: userData => dispatch(update(userData)),
        logout: () => dispatch(logout()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
