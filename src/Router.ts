import * as tools from './tools';

const currentPageIdCode = tools.getCurrentPageIdCode();

console.log(currentPageIdCode);

export const getMenu = () => {
	return /*html*/`
	<ul>
		<li><a href="welcome" class="active">Welcome</a></li>
		<li><a href="info">Info</a></li>
		<li><a href="about">About</a></li>
	</ul>
`;
}

export const getCurrentPage = () => {
	return 'mmm';
}