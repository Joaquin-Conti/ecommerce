import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

function NavLinkItem(props) {
    return (
        <li>
            <NavLink onClick={() => props.sidebarIsOpen ? props.onSidebarToggled() : null} to={props.to}>{props.children}</NavLink>
        </li>
    )
}

const mapStateToProps = state => {
    return {
        sidebarIsOpen: state.sidebarIsOpen
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSidebarToggled: () => dispatch({type: 'SIDEBAR_TOGGLED'})
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavLinkItem))
