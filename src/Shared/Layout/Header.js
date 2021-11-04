import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PageHeader, Button, Select } from "antd";

import { Context } from "../Context";
import { PATHS } from "../../utils/constants";

import "./styles.css";
const { Option } = Select;

const DropdownMenu = ({ game }) => {
  const { onSetSelectedGame, selectedGame } = game;
  return (
    <Select
      defaultValue={selectedGame}
      size="middle"
      className="dropdownMenu"
      onChange={(game) => onSetSelectedGame({ selectedGame: game })}
    >
      <Option key="all" value="all">
        All Games
      </Option>
      <Option key="csgo" value="csgo">
        CS-GO
      </Option>
      <Option key="codmw" value="codmw">
        Call of Duty
      </Option>
      <Option key="dota2" value="dota2">
        Dota 2
      </Option>
      <Option key="pubg" value="pubg">
        PUBG
      </Option>
      <Option key="ow" value="ow">
        Overwatch
      </Option>
      
    </Select>
  );
};

const Header = () => {
  const { push, goBack } = useHistory();
  const game = useContext(Context);
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={goBack}
        title={
          <h1 className="header-title" onClick={() => push(PATHS.HOME)}>
            UBO E-SPORT
          </h1>
        }
        extra={[
          <DropdownMenu key="1" game={game} />,
          <Button type="default" key="3" onClick={() => push(PATHS.TEAMS.LIST)}>
          TEAMS
        </Button>,
          <Button type="default" key="2" onClick={() => push(PATHS.HOME)}>
            LEAGUES
          </Button>,
         
       
        ]}
      />
    </div>
  );
};

export default Header;
