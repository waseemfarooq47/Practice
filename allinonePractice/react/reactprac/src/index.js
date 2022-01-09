import react from 'react';
import reactDom from 'react-dom';

const App=()=>{
    return(
        <h1>This is react app</h1>
    )
}

reactDom.render(<App/>,document.getElementById('root'))