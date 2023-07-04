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

    <nav>
        <ul>
            <li><a href="./pages/lego.html">Lego</a></li>
            <li><a href="./pages/alternativen.html">Lego-Set-Alternativen</a></li>
            <li><a href="./pages/projekte.html">Klemmbaustein-Projekte</a></li>
            <li><a href="./pages/blog.html">Blog</a></li>
        </ul>
    </nav>
</header>
<main>
	${getCurrentPage()}
</main>
`;