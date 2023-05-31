import * as tools from './tools';

const pageNames = ['Welcome', 'Info', 'About'];

const currentPageIdCode = tools.getCurrentPageIdCode();

export const getMenu = () => {

	const getMenuClass = (pageName: string) => {
		const pageIdCode = pageName.toLowerCase();
		if (pageIdCode === currentPageIdCode) {
			return ` class="active"`
		} else {
			return '';
		}
	}

	return /*html*/`
	<ul>
		${pageNames.map(pageName => `<li><a href="${pageName.toLowerCase()}"${getMenuClass(pageName)}>${pageName}</a></li>`).join('')}
	</ul>
`;
}

export const getCurrentPage = () => {
	return 'mmm';
}