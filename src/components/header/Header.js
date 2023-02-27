import React, { useState, useContext } from 'react';
import stylesheet from './header.module.css';
import mnj from '../../assets/mnj.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Offcanvas } from 'react-bootstrap';
import { IoMdLogOut, IoMdMenu } from 'react-icons/io';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/context';

const Header = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const logoutFun = () => {
        Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                logout();
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Out !',
                    showConfirmButton: false,
                    timer: 800
                })
                navigate('/login');
            }
        })
    };

    return (
        <div className={stylesheet.header}>
            <div className={stylesheet.brand_logo}>
                <NavLink to="/home">
                    <img src={mnj} height="62px" className="ms-4" alt='brand-log0' />
                </NavLink>
            </div>
            <div className={stylesheet.toggle_icon}>
                <Button className={stylesheet.mdmenu}>
                    <IoMdMenu className={stylesheet.mdmenuicon} onClick={handleShow} />
                </Button>
                <Offcanvas show={show} onHide={handleClose} className={stylesheet.app_canvas}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title> </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={stylesheet.off_canvas}>
                        <ul className={stylesheet.toggle_menu}>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
            <div className={stylesheet.menu}>
                <ul>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className={stylesheet.logout_icon}>
                <Button variant='outline-danger' className={stylesheet.btn} onClick={logoutFun}><IoMdLogOut /></Button>
            </div>
        </div>
    )
}

export default Header