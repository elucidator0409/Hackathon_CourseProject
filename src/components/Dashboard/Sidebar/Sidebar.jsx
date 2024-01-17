import styled from "styled-components";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import React, { useState, useEffect } from "react";

import ThePlayerLogo from "../../../assets/images/img_theplayer_logo.png";
import { ReactComponent as PurchaseIcon } from "../../../assets/icons/dashboardicon/purchase-icon.svg";
import { ReactComponent as SessionsIcon } from "../../../assets/icons/dashboardicon/sessions-icon.svg";
import { BASE_URL } from "url/url";

const StyledSidebar = styled.div`
  width: 100%;
  padding-left: 63px;
  padding-right: 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .KitLogo {
    margin-top: 59px;
    max-width: 99px;
    width: 100%;
  }
  .top-sidebar {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 50px;
    margin-top: 68px;
  }
  .noti {
    width: 17px;
    height: 17px;
    border-radius: 5px;
    background: #ff8282;
  }
  .class-text {
    color: #c7c4c4;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 22px 0px 22px 0px;
  }
  .bottom-sidebar {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 50px;
  }
  .show {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 23.93px;
    cursor: pointer;
    color: #cbcbcb;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .specpath {
    padding: 0px;
    align-items: center;
    .show {
      text-align: center;
      justify-content: center;
    }
    .bottom-sidebar {
      margin-top: 75.49px;
    }
  }
  @media screen and (max-width: 1224px) {
    padding: 0px;
    align-items: center;
    .show {
      text-align: center;
      justify-content: center;
    }
    .bottom-sidebar {
      margin-top: 75.49px;
    }
  }
`;
const StyledNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  color: #7a797d;
  a {
    display: flex;
    text-decoration: unset;
    color: #7a797d;
    align-items: center;
    gap: 16px;
  }
  .active {
    svg {
      path {
        stroke: #0c4ca3;
        fill: #0c4ca3;
      }
    }
    color: #0c4ca3;
  }
  .NavLink {
    width: 100%;
  }
  @media screen and (max-width: 1224px) {
    padding: 0px;
    justify-content: center;
  }
`;
const NavSpecStyled = {
  padding: "0px",
  justifyContent: "center",
};
const SpecStyled = {
  padding: "0px",
  alignItems: "center",
};
const ShowSpecStyled = {
  textAlign: "center",
  justifyContent: "center",
};
const BottomSidebarStyled = {
  marginTop: "75.49px",
  alignItems: "center",
};
const NavItem = ({ path, text, icon, children }) => {
  const location = useLocation();
  const { id, orderId } = useParams();
  return (
    <StyledNavItem
      style={
        location.pathname === `/mainboard/${orderId}/video-player/${id}` ||
        location.pathname === `/mainboard/${orderId}/video-call`
          ? NavSpecStyled
          : null
      }
    >
      <NavLink to={path}>
        {icon}
        {text}
      </NavLink>
      {children}
    </StyledNavItem>
  );
};
export const Sidebar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = localStorage.getItem('user')
  const { id, orderId } = useParams();
  const [isOpen, setOpen] = useState(false);
  const toggleShowMore = () => setOpen(!isOpen);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [userFetch, setUserFetch] = useState([]);
  const [role, setRole] = useState([]);
  const url = `/mainboard/${orderId}/my-courses/${orderId}`;
  const videoPlayerUrl = `/mainboard/${orderId}/video-player/${id}`;
  const mainboardUrl = `/mainboard/${orderId}`;
  const allClassesUrl = `/mainboard/${orderId}/all-classes/${orderId}`;


  useEffect(() => {
    console.log(user)
    const url = `${BASE_URL}/admin/user/${user}`
    console.log(url)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUserFetch(data)
        setRole(data.role)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
   
  }, []);

  let isStudent = false;
  if (role === "STUDENT") {
    isStudent = true
    } else {
      isStudent = false
  }  
 

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <StyledSidebar
      style={
        location.pathname === videoPlayerUrl ||
        location.pathname === `/mainboard/${orderId}/video-call`
          ? SpecStyled
          : null
      }
    >
      {isDesktopOrLaptop && (
        <img src={ThePlayerLogo} alt="logo" style={{ width: "120px", height: "50px", marginTop: "20px" }} onClick={() => navigate("/home")} />
      )}
      {isTabletOrMobile && (
        <img src={ThePlayerLogo} alt="logo" style={{ width: "120px", height: "50px", marginTop: "20px" }} onClick={() => navigate("/home")} />
      )}
      <div className="top-sidebar">
        {isDesktopOrLaptop &&
          location.pathname !== videoPlayerUrl &&
          location.pathname !== `/mainboard/${orderId}/video-call` && (
            <>
              { isStudent ?
                (<>
                  <NavItem text="My Courses" path={url} icon={<SessionsIcon />} />
                  <NavItem
                    text="Hour purchase history"
                    path={`/mainboard/${orderId}/hour-purchase-history/${orderId}`}
                    icon={<PurchaseIcon />}
                  />  
                </>) :
                (
                  <NavItem
                    text="Add Courses"
                    path={`/mainboard/${orderId}/add-courses/${orderId}`}
                    icon={<SessionsIcon />}
                  />
                )
              } 
            </>
          )}

          {(isTabletOrMobile ||
            location.pathname === videoPlayerUrl ||
            location.pathname === `/mainboard/${orderId}/video-call`) && (
            <>
              <NavItem path={url} icon={<SessionsIcon />} />
              <NavItem
                path={`/mainboard/${orderId}/hour-purchase-history/${orderId}`}
                icon={<PurchaseIcon />}
              />
            </>
          )}
      
      </div>
    </StyledSidebar>
  );
};
