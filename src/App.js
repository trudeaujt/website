import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home                           from "./components/Home"
import About                          from "./components/About"
import SinglePost                     from "./components/SinglePost"
import Post                           from "./components/Post"
import Project                        from "./components/Project"
import NavBar                         from "./components/NavBar"

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route component={Home} path='/'
                       exact/> {/*exact for home so it won't get confused with the other pages*/}
                <Route component={About} path='/about'/>
                <Route component={SinglePost} path='/post/:slug'/> {/*Find the url with the slug, and if not...*/}
                <Route component={Post} path='/post'/> {/*...show the post overview. Order matters!*/}
                <Route component={Project} path='/project'/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
