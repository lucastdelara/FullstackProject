import { useContext } from "react";
import { useNavigate, Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

import ContactsList from "../../components/ContactsList";
import Modal from "../../components/Modal";

import { StyledHomepage } from "./styles";

const Home = () => {
    const { user, token,invisibleModal, setInvisibleModal } = useContext(UserContext);
    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        navigate("/login", { replace: true });
    }

    return token ? (
        <StyledHomepage className="home-container">
            <Outlet />
            <nav className="home-nav">
                <h1>FullStack Project</h1>
                <p>button</p>
            </nav>
            <div className="home-header">
                <h2>Olá, {user?.name} !</h2>
            </div>
            <div className="home-content">
                <div className="content-header">
                    <h2>Contacts</h2>
                    <p>button</p>
                </div>
                <div className="home-ul-container">
                {invisibleModal && <Modal />}
                </div>
            </div>
        </StyledHomepage>
    );
};

export default Home;