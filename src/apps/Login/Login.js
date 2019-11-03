import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';
import Button from '@material-ui/core/Button/Button';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import { Link } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Container from '@material-ui/core/Container/Container';

class Login extends Component{

    render(){
        return(
            <Container maxWidth="sm">

                <div className="d-flex flex-column justify-content-center" style={{height: "90vh"}}>
                    <Card>
                        <CardContent>
                            <ValidatorForm>

                                <div className="text-center">
                                    <h1>Login</h1>
                                </div>

                                <TextValidator
                                    fullWidth
                                    type="email"
                                    label="Email"
                                    margin="normal"
                                    validators={["required", "email"]}
                                    errorMessages={["This field is required", "Fill valid email"]}
                                    variant="outlined"
                                />

                                <TextValidator
                                    fullWidth
                                    type="password"
                                    label="password"
                                    margin="normal"
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    variant="outlined"
                                />

                                <div className="mt-1">
                                    <Link to="/dashboard"><Button fullWidth variant="contained" color="primary" >Login</Button></Link>
                                </div>

                            </ValidatorForm>
                        </CardContent>
                    </Card>
                </div>


            </Container>
        );
    }

}

const mapStateToProps = state => {
    return{
        username: state.login.username,
        password: state.login.password
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeHandler: (value) => dispatch({ type: actionTypes.INPUT_CHANGE, value: value })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);