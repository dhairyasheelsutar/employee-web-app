import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button/Button';
import './Register.css';
import axios from 'axios';
import * as constants from '../../constants';
import SnackbarApp from '../../components/SnackbarApp/SnackbarApp';

class Register extends Component{

    formSubmit = () => {

        this.props.requestStatus(true);
        /*
        axios.post(constants.API + 'register').then(data => {
            this.props.requestStatus(false);
        }).catch(error => {
            this.props.requestStatus(true);
        });*/

    };

    render(){

        console.log(this.props.requestFailed);

        let snackbar = null;
        if(this.props.requestFailed){
            snackbar = <SnackbarApp show={this.props.requestFailed} message="Member saved successfully"/>
        }else if(this.props.requestFailed === false){
            snackbar = <SnackbarApp show={this.props.requestFailed} message="Something went wrong"/>
        }

        return(

            <div>
                {snackbar}

                <form className="Form" noValidate autoComplete="off">
                    <div>
                        <TextField
                            fullWidth
                            type="email"
                            label="Email"
                            value={this.props.email}
                            onChange={($event) => this.props.onChangeHandler('email', $event.target.value)}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            type="text"
                            label="First name"
                            value={this.props.firstName}
                            onChange={($event) => this.props.onChangeHandler('firstName', $event.target.value)}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            type="text"
                            label="Last name"
                            value={this.props.lastName}
                            onChange={($event) => this.props.onChangeHandler('lastName', $event.target.value)}
                            margin="normal"
                            variant="outlined"
                        />
                    </div>

                    <div style={{marginTop: "10px"}}>
                        <input
                            accept="image/*"
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            type="file"
                            onChange={($event) => this.props.onChangeHandler('photo', $event.target.files[0])}
                        />
                        <label  htmlFor="raised-button-file">
                            <Button variant="contained" component="p">
                                Upload Photo
                            </Button>
                        </label>
                    </div>

                    <div style={{marginTop: "20px"}}>
                        <Button onClick={this.formSubmit} variant="contained" color="primary">Submit</Button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        email: state.register.email,
        firstName: state.register.firstName,
        lastName: state.register.lastName,
        photo: state.register.photo,
        requestFailed: state.register.requestFailed
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeHandler: (key, value) => dispatch({ type: actionTypes.onInputChange, key: key, value: value }),
        requestStatus: (status) => dispatch({type: actionTypes.requestStatus, status: status}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);