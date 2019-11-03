import React, { Component } from 'react';
import MaterialTable from 'material-table';
import Header from '../../../components/Header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Container from '@material-ui/core/Container/Container';
import Button from '@material-ui/core/Button/Button';
import { Link } from 'react-router-dom';

class Users extends Component{


    render(){

        return(
            <div>
                <Header/>
                <Sidebar/>

                <div style={{display: "block", height: "100px"}}>
                </div>

                <Container maxWidth="md">

                    <Link to={"/workers/add"}>
                        <Button style={{marginBottom: "10px"}} variant={"contained"} color={"primary"}>Add new</Button>
                    </Link>
                    <MaterialTable
                        title={"All workers"}
                        columns={[
                            {title: "Name", field: "name"},
                            {title: "Email", field: "email"},
                            {title: "Mobile number", field: "mobileNo", type: "numeric"},
                            {title: "Type", field: "type", lookup: {1: "Supervisor", 2: "Worker"}}
                        ]}
                        data={[
                            {
                                name: "Dhiraj", email: "sutardhiraj98@gmail.com", mobileNo: 8788332232, type: 1
                            },
                            {
                                name: "Piyush", email: "thetechnolover7@gmail.com", mobileNo: 9158674554, type: 2
                            }
                        ]}
                        actions={[
                            {
                                icon: "delete_outline",
                                tooltip: "Delete user",
                                onClick: (e) => alert("Clicked")
                            }
                        ]}
                    />
                </Container>


            </div>
        );
    }
}

export default Users;