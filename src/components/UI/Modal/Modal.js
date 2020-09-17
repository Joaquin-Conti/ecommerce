import React from 'react'
import styles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import { connect } from 'react-redux'


function Modal(props) {
    return (
        <div className={styles.Modal}>
            <Backdrop 
                    show={props.showingLogin}
                    backdropClicked={() => props.onNotShowingLogin()}
                />
            <div 
                className={styles.Modal}
                style={{
                    transform: props.showingLogin ? 'translateY(0)': 'translateY(-100vh)',
                    opacity: props.showingLogin ? '1' : '0' 
                }}
                >
                {props.children}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        showingLogin: state.showingLogin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNotShowingLogin: () => dispatch({type: 'LOGIN_MODAL_CLOSED'})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
