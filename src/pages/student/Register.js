import React from "react";
import styled from "styled-components";
import { Button } from "components/Button/Button";
import ThePlayerLogo from "../../assets/images/img_theplayer_logo.png";
import SignUpBanner from "../../assets/images/sign-up-banner.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { BASE_URL } from "url/url";

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: row;
  .sign-up-logo {
    width: 240px;
    height: 180px;
    padding-bottom: 76px;
  }

  .left {
    flex: 2;
    .sign-up-banner {
    }
    .sign-up-logo-info {
      padding-top: 115px;
      padding-left: 140px;
      padding-right: 156px;
    }
    .welcome-to-kits {
      font-family: Poppins;
      font-size: 32px;
      font-weight: 700;
      line-height: 48px;
      letter-spacing: 0em;
      text-align: left;

      padding-bottom: 9px;
    }
    .sign-up-info {
      font-family: Poppins;
      font-size: 18px;
      font-weight: 400;
      line-height: 37px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  .right {
    flex: 3;
    padding-left: 170px;
    padding-top: 145px;
    padding-right: 170px;
    background: rgba(159, 215, 249, 0.4);
    .sign-up {
      font-family: Nunito;
      font-size: 64px;
      font-style: normal;
      font-weight: 900;
      line-height: normal;
      .sign {
        color: #0c4ca3;
      }
      .up {
        color: #0c4ca3;
      }
      padding-bottom: 13px;
    }
    .already-have-account-log-in {
      font-family: Poppins;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 206.5%;
      .already-have-account {
        color: #8c8888;
      }
      .log-in {
        color: #0c4ca3;
      }
      padding-bottom: 49px;
    }
    input.info {
      padding: 8px 27px;
      margin-bottom: 44px;
      border: none;
      border-radius: 15px;
      width: 100%;
      outline: none;
      height: 49px;
    }
    .selections {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding-bottom: 40px;
    }
    .i-am-a {
      padding-bottom: 10px;
    }
  }
  @media screen and (max-width: 1275px) {
    .left {
      display: none;
    }
    .right {
      padding-bottom: 128px;
    }
  }
`;

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        role: "STUDENT",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `${BASE_URL}/api/v1/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            const data = await response.json();
            // Save the JWT token to local storage or a cookie
            console.log(data.token);
            // Redirect or show success message
            navigate("/login-page");
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    return (
        <>
          <StyledSignUp>
              <div className="left">
                  <div className="sign-up-logo-info">
                      <img
                          className="sign-up-logo"
                          src={ThePlayerLogo}
                          alt=""
                          onClick={() => navigate("/")}
                          style={{ cursor: "pointer" }}
                      />
                      <div className="welcome-to-kits">Welcome to The Player!</div>
                      <div className="sign-up-info">
                          The Player connects students and their families with qualified tutors
                          for improved learning outcomes.
                      </div>
                  </div>
                  <img className="sign-up-banner" src={SignUpBanner} alt="" />
              </div>
              <div className="right">
                  <div className="sign-up">
                      <span className="sign">Sign</span>
                      <span className="up"> Up</span>
                  </div>
                  <div className="already-have-account-log-in">
                      <span className="already-have-account">
                          Already have an account?
                      </span>
                      <a
                          className="log-in"
                          style={{ cursor: "pointer" }}
                          onClick={() => navigate("/login-page")}
                      >
                          {" "}
                          Log in
                      </a>
                  </div>
                  <form onSubmit={handleRegisterSubmit}>
                      <input
                          className="info"
                          type="text"
                          name="fullName"
                          placeholder="FullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                      />
                      <br />
                      <input
                          className="info"
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleInputChange}
                      />
                      <br />
                      {/* Password field should have eye icon to show password */}
                      <input
                          className="info"
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleInputChange}
                      />
                      <br />
                      <Button bgColor={"#0C4CA3"} width={218} height={269} type="submit">
                          Sign Up
                          {console.log(formData.role)}
                      </Button>
                  </form>
              </div>
          </StyledSignUp>
        </>
    );
};

export default Register;
