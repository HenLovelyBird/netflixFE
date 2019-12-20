import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

class NavHead extends React.Component {

    render() {
        return (
        <Nav className="ml-5 nav bg-dark">
            <NavItem>
                <img src="./nflixLogo.png" alt="netflix logo"/> 
            </NavItem>
            <NavItem>
                <NavLink href="#" active>Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Fantasy</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Documentary</NavLink>
            </NavItem>
            <NavItem>
                <NavLink disabled href="#">Comedy</NavLink>
            </NavItem>
            <NavItem>
            <div className="align-self-right"> 
                <input type="text" placeholder="Search a title here" 
                    value={this.props.searchValue}
                    onChange={(input) => this.props.saveSearchString(input)} />
                <button type="search" onClick={() => this.props.searchArtists().toLowerCase()}>Search</button>
            </div>
            </NavItem>
        </Nav> 
        );
    }
}

export default NavHead;