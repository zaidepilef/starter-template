import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';
import axios from 'axios';


class Inicio extends React.Component {



    constructor() {
        super();
        this.state = {
            nombre: "Felipe Diaz",
            rut: "16.200.587-1",
            email: "fel.di.rod@gmail.com",
        }
    }


    componentDidMount() {

        let user_id = localStorage.getItem('user_id');
        console.log('user_id : ', user_id)
        const token = user_id;

        axios.get(`http://127.0.0.1:8000/api/persona_juridica_usuarioSearchd/`, { headers: { Authorization: "Bearer " + token } })
            .then(res => {
                console.log('res : ', res);
                console.log('data : ', res.data);

            }).catch(err => {
                // what now?
                console.log(err);
            })


    }

    render() {
        const { nombre } = this.state;
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title={nombre} />
                <div className="d-flex justify-content-center">
                    <h1>Inicio MTT</h1>
                </div>



            </div>
        );
    }
}

export default Inicio;