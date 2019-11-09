import React, { Component } from 'react';
import MaterialTable from 'material-table';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Container from '@material-ui/core/Container/Container';

class Attendance extends Component{


    render(){

        return(
            <div>
                <Header/>
                <Sidebar/>

                <div style={{display: "block", height: "100px"}}>
                </div>

                <Container maxWidth="md">
                    <MaterialTable
                        title={"Workers attendance"}
                        columns={[
                            {title: "Name", field: "name"},
                            {title: "Days attended", field: "dayAttended", type: "numeric"},
                            {title: "Calculated payment", field: "payment", type: "numeric"}
                        ]}
                        data={[
                            {
                                name: "Dhiraj", dayAttended: 23, payment: 4500
                            },
                            {
                                name: "Piyush", dayAttended: 25, payment: 7000
                            }
                        ]}
                        actions={[
                            {
                                icon: "payment",
                                tooltip: "Pay worker",
                                onClick: (e) => alert("Paid")
                            }
                        ]}
                    />
                </Container>


            </div>
        );
    }
}

export default Attendance;