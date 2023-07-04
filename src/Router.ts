import * as tools from "./tools";

import { Page404 } from "./pages/Page404";
import { PageWillkommen } from "./pages/PageWillkommen";
import { PageAlternativen } from "./pages/PageAlternativen";
import { PageBlog } from "./pages/PageBlog";
import { PageLego } from "./pages/PageLego";
import { PageProjekte } from "./pages/PageProjekte";

const pageNames = ["Willkommen", "Lego", "Alternativen", "Projekte", "Blog"];

const currentPageIdCode = getSmartCurrentPageId();


export const getCurrentPage = () => {
  switch (currentPageIdCode) {
    case "willkommen":
      return PageWillkommen();
    case "lego":
      return PageLego();
    case "alternativen":
      return PageAlternativen();
    case "projekte":
      return PageProjekte();
    case "blog":
      return PageBlog();
    default:
      return Page404();
  }
};

const getPageIdCode = (pageName: string) => {
  pageName = tools.cleanCharactersToAscii(pageName);
  return pageName.toLowerCase();
};

export const getMenu = () => {
  const getMenuClass = (pageName: string) => {
    const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
    if (pageIdCode === currentPageIdCode) {
      return ` class="active"`;
    } else {
      return "";
    }
  };

  return /*html*/ `
	<nav class="menu">
		<ul>
			${pageNames
        .map(
          (pageName) =>
            `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(
              pageName
            )}>${pageName}</a></li>`
        )
        .join("")}
		</ul>
	</nav>
`;
};

function getSmartCurrentPageId() {
  let currentPageIdCode = tools.getCurrentPageIdCode();
  currentPageIdCode =
    currentPageIdCode === ""
      ? tools.cleanCharactersToAscii(pageNames[0].toLowerCase())
      : currentPageIdCode;
  return currentPageIdCode;
}
