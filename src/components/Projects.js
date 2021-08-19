import { useRouteMatch, Switch, Route, useParams, Link} from 'react-router-dom';
import ProjectTable from './ProjectTable';

function Projects(){
    let match = useRouteMatch();

    return (
        <div>
            <h1>Projects Page</h1><hr />
            <ProjectTable/>
            <Switch>
                <Route path={`${match.path}/:projectId`}>
                    <Project />
                </Route>
            </Switch>
        </div>
    )
}
function Project() {
    let {projectId} = useParams();
    return <h5>Requested ProjectID: {projectId}</h5>
}
export default Projects;