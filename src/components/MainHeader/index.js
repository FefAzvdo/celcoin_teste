import { Fragment, useState } from "react";
import * as icons from "../../assets/icons";
import "./styles.css";

const HiddenBox = () => {
  const pStyle = {
    fontWeight: "bold",
    fontSize: "12px",
    color: "#303B5A",
    marginLeft: "10px",
  };

  const separatorStyle = {
    height: "1px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: "100%",
  };

  return (
    <div style={{ backgroundColor: "#fff", width: "150px" }}>
      <p style={pStyle}>Minha conta</p>
      <div style={separatorStyle} />
      <p style={pStyle}>Configurações</p>
      <div style={separatorStyle} />
      <p style={pStyle}>
        <span style={{ marginRight: "20px" }}>
          <svg
            width="14"
            height="12"
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66667 8.66675V9.33341C7.66667 9.86385 7.45595 10.3726 7.08088 10.7476C6.70581 11.1227 6.1971 11.3334 5.66667 11.3334H3C2.46957 11.3334 1.96086 11.1227 1.58579 10.7476C1.21071 10.3726 1 9.86385 1 9.33341V2.66675C1 2.13631 1.21071 1.62761 1.58579 1.25253C1.96086 0.877462 2.46957 0.666748 3 0.666748H5.66667C6.1971 0.666748 6.70581 0.877462 7.08088 1.25253C7.45595 1.62761 7.66667 2.13631 7.66667 2.66675V3.33341M10.3333 8.66675L13 6.00008L10.3333 8.66675ZM13 6.00008L10.3333 3.33341L13 6.00008ZM13 6.00008H3.66667H13Z"
              stroke="#EF0C35"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        Sair
      </p>
    </div>
  );
};

export const SearchBox = ({ placeholder }) => {
  return (
    <div className="main_white_board_header_wrapper">
      <span style={{ marginRight: "10px" }}>{icons.searchIcon}</span>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

const ProfileBox = ({ onClickProfileBox }) => {
  return (
    <div className="left_side_header_content">
      {icons.configIcon}
      <Fragment>
        {icons.orangeBadgeIcon}
        {icons.bellIcon}
      </Fragment>
      <div className="profile_info_box" onClick={onClickProfileBox}>
        <span>Olá, </span>
        <strong>Felipe</strong>
        <div className="profile_image_box">
          <img
            src="https://s3-alpha-sig.figma.com/img/c802/7a91/6da53c96403795a3b9fd5e9c60d80419?Expires=1621814400&Signature=XPMAalEapbjQssHWR57Uhwy8Chp0O0vuhaG7eD7j2YEFSf46mI~tniCXzccnQ98RlxR1-BaVrA-DgNRsvOsDHWpSfOHE5TL7sjwiZOF8ImrZk6dYHxe1YceYXXsuvWs7kytJX56lnBWqAGtgIIFK5CVZJsLCcBoczLH5a5IRXHR3ka56YmVJ5559KMTzWLmANmLi8PLntXXOzOQZSGPObvhhMECv8No5CI7jRVrZwTfJUqjsS9PlOTu~RAh6MHxY-8ZTxyV-ng8~k~wUDDpoXpU28m9lawPv2mGhlFoJvjkP0sK5ufjD6FFhMbCqmRhyppv-BsGVaSayaHlHTtgSQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            alt="Imagem de perfil"
          />
        </div>
      </div>
      {icons.dotsIcon}
    </div>
  );
};

export default function MainHeader() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="main_white_board_header" style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <SearchBox placeholder="Busca..." />
          </div>
          <div>
            <ProfileBox onClickProfileBox={() => setIsVisible(!isVisible)} />
          </div>
        </div>
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            height: isVisible ? "auto" : 0,
            display: "flex",
            justifyContent: "flex-end",
            transition: "opacity .2s",
            position: isVisible ? "fixed" : "inherit",
            right: 80,
            top: 100,
            zIndex: 10,
          }}
        >
          <HiddenBox />
        </div>
      </div>
    </div>
  );
}
