import * as React from "react";
import { NotFoundWrapper } from "../components/styled/shared.styled";

const NotFoundPage = () => (
  <NotFoundWrapper className="container">
    <div className="error404page">
      <div className="newcharacter404">
        <div className="chair404"></div>
        <div className="leftshoe404"></div>
        <div className="rightshoe404"></div>
        <div className="legs404"></div>
        <div className="torso404">
          <div className="body404"></div>
          <div className="leftarm404"></div>
          <div className="rightarm404"></div>
          <div className="head404">
            <div className="eyes404"></div>
          </div>
        </div>
        <div className="laptop404"></div>
      </div>
    </div>
  </NotFoundWrapper>
);

export default NotFoundPage;
