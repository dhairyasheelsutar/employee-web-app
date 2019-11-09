import React, { useEffect }  from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import * as actionTypes from '../../apps/Users/Register/store/actions';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

let renderTimes = 0;
const SnackbarApp = (props) => {

    useEffect(() => {
        renderTimes++;
        if(renderTimes === 2){
            setTimeout(() => {
                props.resetForm();
            }, 1500);
        }
    }, [props.message]);

    return(
        <div>
            <Dialog
                open={props.show}
            >
                <DialogContent>
                    <div style={{textAlign: "center"}}>
                        <CircularProgress/>
                    </div>
                    <DialogContentText id="alert-dialog-description">
                        {props.message}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );

};

const mapDispatchToProps = dispatch => {
    return{
        onClose: () => dispatch({type: actionTypes.onInputChange, value: {requestFailed: undefined}})
    }
};

export default connect(null, mapDispatchToProps)(SnackbarApp);