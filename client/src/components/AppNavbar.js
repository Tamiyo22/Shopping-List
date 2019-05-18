import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
	DropdownItem } from 'reactstrap';

	class AppNavbar extends Component {

	state={
		isOpen:false
	}
	 toggle =()=>{
   this.setState({
		 isOpen: !this.state.isOpen

		});

	}

render(){
	return(
	<div>
		<Navbar color="dark" dark expand="sm" className="mb-5">
   <container>
		 <NavbarBrand href="/"> ShoppingList</NavbarBrand>
		 <NavbarToggler onClick={this.toggle} />
		 <Collapse isOpen={this.state.isOpen} navbar>

		 <Nav className="ml-auto" navbar>

		 <NavItem>
			 <NavLink href="https://github.com/Tamiyo22">
			 Github
			 </NavLink>
		 </NavItem>
		 </Nav>
		 </Collapse>
	 </container>
		</Navbar>
	</div>
    )
	}
}


export default AppNavbar;
