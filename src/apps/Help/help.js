import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Container from '@material-ui/core/Container/Container';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button/Button';

class Help extends Component{

    render(){
        return(
            <div>
                <Header/>
                <Sidebar/>
                <div style={{marginTop: "100px"}}/>
                <Container maxWidth={"md"}>
                    <Card>
                        <CardContent>
                            <ValidatorForm>
                                <TextValidator
                                    fullWidth
                                    type={"text"}
                                    variant={"outlined"}
                                    label={"Enter query"}
                                />

                                <div>
                                    <Button>Send</Button>
                                </div>

                            </ValidatorForm>
                        </CardContent>
                    </Card>
                </Container>



            </div>
        );
    }

}

export default Help;