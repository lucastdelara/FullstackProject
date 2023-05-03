import { useContext } from "react";
import { useNavigate, Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/users/UserContext";

import ContactsList from "../../components/ContactsList";
import Modal from "../../components/Modal";

import { StyledHomepage } from "./styles";
import { StyledAddOrRemoveButton, StyledBackButton } from "../../components/Button/styles";

const Home = () => {
    const { user, invisibleModal, setInvisibleModal } = useContext(UserContext);
    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        navigate("/login", { replace: true });
    }

    const token = localStorage.getItem("FPToken");

    return token ? (
        <StyledHomepage className="home-container">
            <Outlet />
            <nav className="home-nav">
                <h1>FullStack Project</h1>
                <StyledBackButton onClick={() => logout()} type="button">
                    Sair
                </StyledBackButton>
            </nav>
            <div className="home-header">
                <h2>Wellcome, {user?.name} </h2>
            </div>
            <div className="home-content">
                <div className="container">
                    <h2>Contacts</h2>
                    <div>
                        <h2>Phone</h2>
                        <StyledAddOrRemoveButton
                            onClick={() => setInvisibleModal(true)}
                            type="button"
                            >
                            +
                        </StyledAddOrRemoveButton>
                    </div>
                </div>
                <div className="home-ul-container">
                {invisibleModal && <Modal />}
                <ContactsList />
                </div>
            </div>
        </StyledHomepage>
    ) : (
        <Navigate to="/login" replace />
    );
};

export default Home;