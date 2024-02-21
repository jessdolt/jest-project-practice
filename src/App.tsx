import "./App.css"
import AppProviders from "./providers/app-providers"

import Application from "./components/application/application"
import Skills from "./components/skills/skills"
import Counter from "./components/counter/counter"
import MuiMode from "./components/mui/mui-mode"
import Users from "./components/users/users"

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Counter /> */}
        {/* <Application /> */}
        {/* <Skills skills={["Javascript", "ReactJS"]} /> */}
        {/* <MuiMode /> */}
        <Users />
      </div>
    </AppProviders>
  )
}

export default App
