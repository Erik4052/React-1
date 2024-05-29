import ReactDOM from 'react-dom/client';
import './index.css';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx';
import { MultipleCustomHook } from './03-examples/MultipleCustomHook.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
/*   <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>, */
  <MultipleCustomHook />,
)
