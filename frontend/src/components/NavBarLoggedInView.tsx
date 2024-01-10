import React from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { User } from '../models/user';
import * as Api from '../network/api';

interface NavBarLoggedInViewProps {
  user: User,
  onLogoutSuccessful: () => void,
}

const NavBarLoggedInView = ({ user, onLogoutSuccessful }: NavBarLoggedInViewProps) => {

  async function logout() {
    try {
      await Api.logout();
      onLogoutSuccessful();
    } catch (error) {
      console.error(error);
      alert(error); 
    }
  }

  return (
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text style={{color:"white", paddingRight:"15px"}}>
        Signed in as: <span style={{ fontWeight: 'bold' }}>{user.username}</span>
      </Navbar.Text>
      <Button variant="outline-light" onClick={logout}>Log out</Button>
    </Navbar.Collapse>
  );
}

export default NavBarLoggedInView;
