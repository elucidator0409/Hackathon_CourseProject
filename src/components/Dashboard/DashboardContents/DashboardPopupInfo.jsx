import Popup from "reactjs-popup";
import styled from "styled-components";
import { TutorCard } from "../DashboardCard";
import "reactjs-popup/dist/index.css";
import { Button } from "components/Button/Button";
import { useNavigate, useParams } from "react-router-dom";

const PopupStyled = styled(Popup)`
  &-overlay {
    background: rgba(0, 0, 0, 0.4);
  }
  &-content {
    border-radius: 20px;
    .modal {
      font-size: 12px;
    }
    .modal > .header {
      width: 100%;
      border-bottom: 1px solid gray;
      font-size: 18px;
      text-align: center;
      padding: 5px;
    }
    .modal > .content {
      width: 100%;
      padding: 10px 5px;
      margin-top: 10px;
      display: flex;
      flex-direction: row;
    }
    .modal > .content > img {
      width: 375px;
      height: 233px;
      flex-shrink: 0;
    }
    .modal > .content > .detail-info {
      padding-left: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: justify;
      justify-content: space-between;
    }
    .modal > .actions {
      width: 100%;
      padding: 10px 5px;
      margin: auto;
      text-align: center;
    }
    .modal > .close {
      cursor: pointer;
      position: absolute;
      display: block;
      padding: 2px 5px;
      line-height: 20px;
      right: -10px;
      top: -10px;
      font-size: 24px;
      background: #ffffff;
      border-radius: 18px;
      border: 1px solid #cfcece;
    }
  }
`;

export const DashboardPopupInfo = ({
  avatar,
  tutorName,
  tutorSchool,
  rating,
  status,
  detail,
  onMouseEnter,
  onMouseLeave,
}) => {
  const navigate = useNavigate();
  const { id, orderId } = useParams();
  return (
    <PopupStyled
      trigger={
        <TutorCard
          bgColor="#D0C1F1"
          avatar={avatar}
          isVerified="true"
          tutorName={tutorName}
          tutorSchool={tutorSchool}
          rating={rating}
          status={status}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> </div>
          <div className="content">
            <img src="" alt="" />
            <div className="detail-info">
              <div>By {tutorName}</div>
              <div>Total hours: </div>
              {detail}
              
            </div>
          </div>
        </div>
      )}
    </PopupStyled>
  );
};
