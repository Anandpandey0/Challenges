import { Avatar, IconButton } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { MdMessage } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { deepOrange } from "@mui/material/colors";

const Sidebar = () => {
  return (
    <Container>
      <Header>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <HeaderButtons>
          <IconButton aria-label="delete">
            <MdMessage size={"1.5rem"} color={"grey"} />
          </IconButton>
          <IconButton aria-label="delete">
            <HiOutlineDotsVertical size={"1.5rem"} color={"grey"} />
          </IconButton>
        </HeaderButtons>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  width: 23vw;
  height: 100vh;
  border: solid 2px black;
`;
const Header = styled.div`
  margin-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderButtons = styled.div`
  & > * {
    margin: 0rem 0.5rem;
  }
  & > *:hover {
  }
`;
export default Sidebar;
