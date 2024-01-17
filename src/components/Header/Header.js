import styled from "styled-components";
import {
  useNavigate,
} from "react-router-dom";
import ThePlayerLogo from "assets/images/img_theplayer_logo.png";
import userIcon from "assets/icons/user-regular.svg";
import cartIcon from "assets/icons/cart-shopping-solid.svg";
import { useSelector } from "react-redux"
import { selectCurrentUser } from "features/auth/authSlice";

const HeaderStyled = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 4px 20px 4px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  p {
    color: #96989b;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .left-header {
    display: flex;
    align-items: center;
    margin-left: 16px;
    cursor: pointer;
  }
  .right-header {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser)
  const token = localStorage.getItem('token')
  const cartData = JSON.parse(localStorage.getItem('cartItem')) || [];
  const numberOfItemsInCart = cartData.length;
  

  const goHome = () => {
    navigate("/home");
  };
  const goCart = () => {
    navigate("/cart");
  };
  const goCourse = () => {
    navigate("/our-courses");
  }

  const logout = () => {
    // Clear the token from local storage to log out the user
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Optionally, you can redirect the user to the login page or any other page
    // window.location.href = '/login';
  };

  const handleLogout = () => {
    logout(); // Call the logout function to log out the user
    window.location.reload();
  };

  const handleLogin = () => {
    navigate("/login-page")

  }

  const handleDashBoard = (user) => {
    const orderId = user
    console.log(user)
    console.log(orderId)
    navigate(`/mainboard/:orderId/my-courses/:orderId`)

  }
  return (
    <HeaderStyled>
      <div className="left-header" onClick={goHome}>
        <img src={ThePlayerLogo} alt="logo" style={{ width: "120px", height: "50px" }} />
      </div>
      <div className="right-header">
        <p style={{ cursor: "pointer" }} onClick={goHome}>
          Home
        </p>
        { token ?
        (
        <p style={{ cursor: "pointer" }} onClick={() => handleDashBoard(user)}>
          DashBoard
        </p>) :
        (<></>
        )
        } 
        <p style={{ cursor: "pointer" }} onClick={goCourse}>
          Course
        </p>
        { token ?
        (
        <p style={{ cursor: "pointer" }} onClick={handleLogout}>
          LogOut
        </p>) :
        (
          <p style={{ cursor: "pointer" }} onClick={handleLogin}>
          Login
        </p>
        )
        } 
        
        <img src={userIcon} alt="user" style={{ width: "16px", cursor: "pointer" }} />
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <img
            src={cartIcon}
            alt="cart"
            style={{ width: "20px", cursor: "pointer" }}
            onClick={goCart}
          />
          <span style={{color: "#e90003"}}>{numberOfItemsInCart}</span>
        </div>
      </div>
    </HeaderStyled>
  );
};
export default Header;
