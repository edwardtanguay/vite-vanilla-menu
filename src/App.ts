import './styles/main.scss';
import { getMenu, getCurrentPage } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<header>
    <figure>
        <a href="index.html">
            <img src="./images/header.png" alt="Lego bauen" title="Lego bauen">
        </a>
    </figure>

    <section>
        <h1>1001 Klemmbausteine</h1>
    </section>

    <figure>
        <a href="index.html">
            <img src="./images/logo.png" alt="Logo" title="logo">
        </a>
    </figure>

    ${getMenu()}

</header>
<main>
	${getCurrentPage()}
</main>
`;