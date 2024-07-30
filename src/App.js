import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// router v5 : BrowserRouter, Switch, Route 사용
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Navigation from "./components/Navigation"; // Navigation 컴포넌트 위치는 Switch 밖에 위치해야함, 내부는 안됨
// Switch 컴포넌트는 경로에 따라 적절한 컴포넌트를 렌더링하는 역할을 함, Navigation을 Switch 외부에 배치하면 모든 경로에 대해 항상 Navigation이 렌더링됨
function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;