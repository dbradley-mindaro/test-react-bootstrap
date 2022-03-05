
import styled from 'styled-components'
import { Link } from 'react-router-dom';



export const JumbotronMain = styled.div`
color: white;
background-image: url("https://images.unsplash.com/photo-1438109491414-7198515b166b?q=80&fm=jpg&s=cbdabf7a79c087a0b060670a6d79726c");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
`;

export const JumbotronMain2 = styled.div`
color: white;
background-image: url("https://images.unsplash.com/photo-1645193601259-63ad87c0b4a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
`;

export const Container = styled.div`
  padding:75px 45px
`;

export const MainParent = styled.div`
  padding:95px
`;

export const Links = styled(Link)`
  color:white;
  text-decoration:none;
`;