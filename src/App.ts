import './styles/main.scss';
import { Menu } from './components/Menu';
import * as tools from './tools';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<h1>Info Site</h1>
${Menu()}
<p>Welcome to this site.</p>
<p>${tools.getCurrentUrl()}</p>
`;