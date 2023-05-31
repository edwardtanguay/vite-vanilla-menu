import './style.scss';
import * as tools from './tools';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<h1>Info Site</h1>
<nav>
	<ul>
		<li><a href="welcome" class="active">Welcome</a></li>
		<li><a href="info">Info</a></li>
		<li><a href="about">About</a></li>
	</ul>
</nav>
<p>Welcome to this site.</p>
<p>${tools.getCurrentUrl()}</p>
`;