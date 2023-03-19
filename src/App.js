// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SidebarMenu from "./scenes/global/Sidebar";
import Dashboard  from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";


function App() {
  const [theme, colorMode] = useMode();
  // const [isSidebar, setIsSidebar] = useState(true);

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="app">
      <SidebarMenu />
      <main className="content">
        <Topbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </main>
    </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
