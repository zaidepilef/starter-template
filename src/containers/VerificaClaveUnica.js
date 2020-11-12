import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import IntlMessages from 'util/IntlMessages';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGithubSignIn,
    userGoogleSignIn,
    userSignIn,
    userTwitterSignIn
} from 'actions/Auth';


import queryString from 'query-string';

class VerificaClaveUnica extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    componentDidUpdate() {
        const values = queryString.parse(this.props.location.search);
        console.log('values : ', values)
        console.log('code : ', values.code)
        console.log('state : ', values.state)
        if (values.code && values.state) {
            this.message = 'Validando ingreso ...';
            this.code = values.code;
            localStorage.setItem('State', values.state)
            localStorage.setItem('Code', values.code)
            //this.setState({ redirect: true })
            //login();
        }
    }

    render() {

        console.log('render : ', this.state) // "im"
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={'/'} />;
        }

        return (
            <div>
                {this.message}
            </div>
        )

    }
}

const mapStateToProps = ({ auth }) => {
    const { loader, alertMessage, showMessage, authUser } = auth;
    return { loader, alertMessage, showMessage, authUser }
};

export default connect(mapStateToProps, {
    userSignIn,
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userGithubSignIn,
    userTwitterSignIn
})(SignIn);
