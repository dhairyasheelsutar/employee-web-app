import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';
import Button from '@material-ui/core/Button/Button';
import './Register.css';
import axios from 'axios';
import * as constants from '../../../constants';
import SnackbarApp from '../../../components/SnackbarApp/SnackbarApp';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import FormControl from '@material-ui/core/FormControl/FormControl';
import Select from '@material-ui/core/Select/Select';
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Container from '@material-ui/core/Container/Container';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';

class Register extends Component{

    formSubmit = () => {


        if(this.validateFields()){

            this.props.onChangeHandler({formSubmitted: true, selectError: false, fileError: false});

            let obj = {
                firstname: this.props.firstName,
                lastname: this.props.lastName,
                email: this.props.email,
                mobileNo: this.props.mobile
            };

            if(this.props.person === "supervisor"){
                axios.post(constants.NODE_API + "supervisor/register", obj).then(data => {
                    this.props.onChangeHandler({requestFailed: false});
                    setTimeout(() => {
                        this.props.onChangeHandler({formSubmitted: false, requestFailed: undefined, email: "", firstName: "", lastName: "", person: "", photo: "", mobile: ""});
                    }, 2000);
                }).catch(error => {
                    console.log(error);
                    this.props.onChangeHandler({requestFailed: true});
                });

            }else if(this.props.person === "worker"){
                axios.post(constants.NODE_API + "employee/register", obj).then((data) => {
                    let form = new FormData();
                    form.append("file", this.props.photo);
                    form.append("profileId", data["data"]["profileId"]);
                    axios.post(constants.FLASK_API + "employee/register", form).then(data => {
                        console.log(data);
                        this.props.onChangeHandler({requestFailed: false});
                        setTimeout(() => {
                            this.props.onChangeHandler({formSubmitted: false, requestFailed: undefined, email: "", firstName: "", lastName: "", person: "", photo: "", mobile: ""});
                        }, 2000);
                    }).catch(error => {
                        console.log(error);
                        this.props.onChangeHandler({requestFailed: true});
                    });

                }).catch(error => {
                    console.log(error);
                });

            }
        }else{
            console.log("here");
        }

    };

    validateFields = () => {
        let flag = true;

        if(this.props.person === ""){
            this.props.onChangeHandler({selectError: true});
            flag = false;
        }

        if(this.props.photo === "" && this.props.person !== "supervisor"){
            this.props.onChangeHandler({fileError: true});
            flag = false;
        }

        return flag;
    };

    resetForm = () => {
        this.props.onResetForm();
    };

    render(){

        const selectRef = createRef();

        let snackbar = null;
        if(this.props.formSubmitted && this.props.requestFailed === undefined){
            snackbar = <SnackbarApp resetForm={this.resetForm} show={this.props.formSubmitted} message="Saving data"/>
        }else if(this.props.formSubmitted && this.props.requestFailed === false){
            snackbar = <SnackbarApp resetForm={this.resetForm} show={this.props.formSubmitted} message="Data saved successfully"/>
        }else if(this.props.formSubmitted && this.props.requestFailed){
            snackbar = <SnackbarApp resetForm={this.resetForm} show={this.props.formSubmitted} message="Something went wrong"/>
        }


        return(

            <div>
                {snackbar}
                <Header/>
                <Sidebar/>
                <div style={{display: "block", height: "100px"}}/>
                <Container maxWidth={"md"}>
                    <Card>
                        <CardContent>
                            <ValidatorForm encType="multipart/form-data" className="Form" onSubmit={this.formSubmit} autoComplete="off">
                                <div>
                                    <TextValidator
                                        fullWidth
                                        type="email"
                                        label="Email"
                                        value={this.props.email}
                                        validators={["required", "isEmail"]}
                                        errorMessages={["This field is required", "Email is not valid"]}
                                        onChange={($event) => this.props.onChangeHandler({email: $event.target.value})}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </div>

                                <div>
                                    <TextValidator
                                        fullWidth
                                        type="text"
                                        label="First name"
                                        value={this.props.firstName}
                                        onChange={($event) => this.props.onChangeHandler({firstName: $event.target.value})}
                                        margin="normal"
                                        validators={["required"]}
                                        errorMessages={["This field is required"]}
                                        variant="outlined"
                                    />
                                </div>

                                <div>
                                    <TextValidator
                                        fullWidth
                                        type="text"
                                        label="Last name"
                                        value={this.props.lastName}
                                        onChange={($event) => this.props.onChangeHandler({lastName: $event.target.value})}
                                        margin="normal"
                                        validators={["required"]}
                                        errorMessages={["This field is required"]}
                                        variant="outlined"
                                    />
                                </div>

                                <div>
                                    <TextValidator
                                        fullWidth
                                        type="text"
                                        label="Mobile no"
                                        value={this.props.mobile}
                                        onChange={($event) => this.props.onChangeHandler({mobile: $event.target.value})}
                                        margin="normal"
                                        validators={["required"]}
                                        errorMessages={["This field is required"]}
                                        variant="outlined"
                                    />
                                </div>

                                <div style={{marginTop: "15px"}}>

                                    <FormControl className="Select"  variant="outlined">
                                        {this.props.person === "" ?
                                            <InputLabel ref={selectRef} htmlFor="select">
                                                Person type
                                            </InputLabel> : null
                                        }
                                        <Select inputProps={{id: "select"}} value={this.props.person} onChange={($event) => this.props.onChangeHandler({person: $event.target.value})} >
                                            <MenuItem value="">None</MenuItem>
                                            <MenuItem value={"supervisor"}>Supervisor</MenuItem>
                                            <MenuItem value={"worker"}>Worker</MenuItem>
                                        </Select>
                                        <FormHelperText style={{color: "red"}}>{this.props.selectError ? "This field is required" : null}</FormHelperText>
                                    </FormControl>

                                </div>

                                {this.props.person === "worker" ?
                                    <div style={{marginTop: "20px"}}>
                                        <input
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            id="profile"
                                            name="profile"
                                            type="file"
                                            onChange={($event) => this.props.onChangeHandler({photo: $event.target.files[0]})}
                                        />
                                        <label  htmlFor="profile">
                                            <Button type="button" variant="contained" component="p">
                                                Upload Photo
                                            </Button>
                                            <span style={{marginLeft: "10px"}}>{ this.props.photo !== "" ? "Filename: " + this.props.photo.name : null }</span>
                                            <FormHelperText style={{color: "red"}}>{this.props.fileError ? "Please select file for uploading" : null}</FormHelperText>
                                        </label>
                                    </div> : null
                                }


                                <div style={{marginTop: "20px"}}>
                                    <Button type="submit" onClick={this.validateFields} variant="contained" color="primary">Submit</Button>
                                </div>
                            </ValidatorForm>
                        </CardContent>
                    </Card>
                </Container>
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
        mobile: state.register.mobile,
        requestFailed: state.register.requestFailed,
        person: state.register.person,
        formSubmitted: state.register.formSubmitted,
        selectError: state.register.selectError,
        fileError: state.register.fileError
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeHandler: (value) => dispatch({ type: actionTypes.onInputChange, value: value }),
        onResetForm: () => dispatch({type: actionTypes.RESET_FORM})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);