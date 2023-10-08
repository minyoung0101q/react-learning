import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './routes/Detail';
import Home from './routes/Home';
//Link는 브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie/:id">
          {/* React Router한테 여기 오는 id값이 무엇인지 알고 싶다고 말하고 있음 
          URL의 이 부분에 오는 값이 뭔지 확인하는 건 사실 아주 쉽다.
          React Router에서 제공하는 함수가 있는데, url에 있는 값을 반환해주는 함수이다. 특히 변경되는 값을 말함, url에 있는 변수값, 아주 쉽다.
          */}
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

/*
url을 동적으로 만들 수 있음, :id를 통해 즉, 변수를 넣을 수 있다는 말
*/

/* 
Route path="/" => 이것은 URL을 의미한다.
user가 / 경로에 있으면, 우리는 Home Route를 렌더링 해준다.
*/

/*
Router에는 두 가지 종류가 있다.
Hash Router와 Browser Router

Switch : 라우터를 찾는 것
Switch 컴포넌트를 넣어준 이유는 한 번에 하나의 Route만 렌더링 하기 위해서이다.
왜냐하면, React Router에서는 내가 원한다면 두 개의 Route를 한 번에 렌더링 할 수 있기 때문이다.
우리는 한 번에 Route 하나만 렌더링 되기를 원한다.
*/

/* 다음 커밋 : 다이나믹 동적 url은 어떻게 만드는가? */
