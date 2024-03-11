import './App.scss';
import {Header} from './components/Header/Header.jsx';
import {Main} from './components/Main/Main.jsx';
import {Sidebar} from './components/Sidebar/Sidebar.jsx';

function App () {

	return (
		<>
			<div className="content">
				<Sidebar/>
				<Header/>
				<Main/>
			</div>
		</>
	);
}

export default App;
