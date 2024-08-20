import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
// import Header from "./Header";
// import styled from "styled-components";

// const StyledAppLayout = styled.div`
//   display: grid;
//   grid-template-columns: 26rem 1fr;
//   grid-template-rows: auto 1fr;
//   height: 100vh;
// `;

// const Main = styled.main`
//   background-color: var(--color-grey-50);
//   padding: 4rem 4.8rem 6.4rem;
// `;

function AppLayout() {
  return (
    <>
      {/* <Header /> */}
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default AppLayout;
