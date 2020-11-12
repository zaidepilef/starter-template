import React from 'react';
import { Redirect } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';


// FDR para MTT
import queryString from 'query-string';
import axios from 'axios';

import { loginToken } from '../actions/Auth';

class VerificaClaveUnica extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            jwt: ""
        }
    }
    
    componentDidUpdate() {
        const values = queryString.parse(this.props.location.search);
        console.log('values : ', values)
        console.log('code : ', values.code)
        console.log('state : ', values.state)
        this.message = 'Validando ingreso ...';
        
        if (values.code && values.state) {
            this.code = values.code;
            //localStorage.setItem('State', values.state)
            //localStorage.setItem('Code', values.code)
            const { URL_APP } = process.env;
            
            axios.post(`http://127.0.0.1:8000/obtenertoken/`, { code: values.code, state: values.state })
            .then(res => {
                console.log('res : ', res);
                console.log('data : ', res.data);
                // console.log('data_access_token : ', res.data.data_access_token);
                //console.log('data_info : ', res.data.data_info);
                console.log('data_tokenjwt : ', res.data.data_tokenjwt);
                const access = res.data.data_tokenjwt.access;
                const refresh = res.data.data_tokenjwt.refresh;
                    console.log('access : ', access);
                    console.log('refresh : ', refresh);
                    loginToken(access);
                    //localStorage.setItem('user_id', token);
                    //this.setState({ redirect: true })
                    //this.setState({ jwt: token })
                    /*
                    */
                    /*
                    const data_access_token = res.data.data_access_token;
                    const data_tokenjwt = res.data.data_tokenjwt;
                    console.log('data_tokenjwt :', data_tokenjwt);
                    console.log('token :', data_tokenjwt.token);
                    //userSignInClaveUnica({ data_tokenjwt })
                    */
                }).catch(err => {
                    // what now?
                    console.log(err);
                })

            //this.setState({ redirect: true })

        }
    }


    render() {

        console.log('render : ', this.state) // "im"
        const { redirect } = this.state;


        if (redirect) {
            //setTimeout(this.state, 1000);
            return <Redirect to={'/'} />;
        }

        return (
            <div>
                <div className="loader-view">
                    <CircularProgress />
                </div>
                {this.message}
            </div>
        )

    }
}



export default VerificaClaveUnica;
