import React  from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';

const SnackbarApp = (props) => {

    return(
        <div>
            <Dialog
                open={props.show}
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
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