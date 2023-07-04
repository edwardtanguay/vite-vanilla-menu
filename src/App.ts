import './styles/main.scss';
import { getMenu, getCurrentPage } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML =/* html */`
<header>
    <figure>
        <a href="willkommen">
            <img src="./images/header.png" alt="Lego bauen" title="Lego bauen">
        </a>
    </figure>

    <section>
        <h1>1001 Klemmbausteine v2.1</h1>
    </section>

    <figure>
        <a href="willkommen">
            <img src="./images/logo.png" alt="Logo" title="logo">
        </a>
    </figure>

    ${getMenu()}

</header>
<main>
	${getCurrentPage()}
</main>

<footer>
    <section>
        <p>&#169; 2023</p>
    </section>
    <section>
        <a href="impressum">Impressum</a>
    </section>
</footer>
`;