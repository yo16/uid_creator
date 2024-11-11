import './App.css'

import { Nano } from './Nano';

function App() {


    return (
        <>
            記号もあり<br />
            {Array.from({ length: 10 }, (_, i) => (
                <Nano key={i} length={8} />
            ))}

            <hr />
            記号はなし<br />
            {Array.from({ length: 10 }, (_, i) => (
                <Nano key={i} length={8} usingSymboles={false} />
            ))}
        </>
    );
}

export default App
