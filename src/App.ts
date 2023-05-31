import './styles/main.scss';
import { Menu } from './components/Menu';
import { Router } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<h1>Info Site</h1>
${Menu()}
${Router()}
`;