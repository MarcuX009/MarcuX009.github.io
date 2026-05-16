const SUPPORTED_LANGUAGES = ["en", "zh"];
const DEFAULT_LANGUAGE = "en";

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const urlLanguage = params.get("lang");
  const savedLanguage = window.localStorage.getItem("resume-language");
  const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";

  return [urlLanguage, savedLanguage, browserLanguage, DEFAULT_LANGUAGE]
    .find((language) => SUPPORTED_LANGUAGES.includes(language)) || DEFAULT_LANGUAGE;
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function createExternalLink(link) {
  const anchor = createElement("a", null, link.label);
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noreferrer";
  return anchor;
}

function renderSectionHeader(section) {
  const header = createElement("div", "section__header");
  header.appendChild(createElement("h2", "section__title", section.title));
  if (section.kicker) header.appendChild(createElement("p", "section__kicker", section.kicker));
  return header;
}

function renderEntry(entry) {
  const item = createElement("article", "entry");
  const header = createElement("div", "entry__header");
  const titleRow = createElement("div", "entry__title-row");
  const title = createElement("h3", "entry__title", entry.title);

  titleRow.appendChild(title);
  if (entry.meta) titleRow.appendChild(createElement("p", "entry__meta", entry.meta));
  header.appendChild(titleRow);
  if (entry.role) header.appendChild(createElement("p", "entry__role", entry.role));
  item.appendChild(header);

  const body = createElement("div", "entry__body");
  if (entry.body) {
    entry.body.forEach((paragraph) => body.appendChild(createElement("p", null, paragraph)));
  }
  if (entry.bullets) {
    const list = createElement("ul");
    entry.bullets.forEach((bullet) => list.appendChild(createElement("li", null, bullet)));
    body.appendChild(list);
  }
  item.appendChild(body);

  if (entry.links) {
    const links = createElement("div", "link-row");
    entry.links.forEach((link) => links.appendChild(createExternalLink(link)));
    item.appendChild(links);
  }

  if (entry.note) item.appendChild(createElement("p", "note", entry.note));
  return item;
}

function renderProfile(section) {
  const wrapper = createElement("section", "section");
  wrapper.id = "profile";
  wrapper.appendChild(renderSectionHeader(section));

  const content = createElement("div", "profile-copy");
  section.paragraphs.forEach((paragraph) => content.appendChild(createElement("p", null, paragraph)));
  wrapper.appendChild(content);
  return wrapper;
}

function renderEntrySection(id, section) {
  const wrapper = createElement("section", "section");
  wrapper.id = id;
  wrapper.appendChild(renderSectionHeader(section));

  const list = createElement("div", "entry-list");
  section.entries.forEach((entry) => list.appendChild(renderEntry(entry)));
  wrapper.appendChild(list);
  return wrapper;
}

function renderSkills(section) {
  const wrapper = createElement("section", "section");
  wrapper.id = "skills";
  wrapper.appendChild(renderSectionHeader(section));

  const grid = createElement("div", "skills-grid");
  section.groups.forEach((group) => {
    const groupElement = createElement("section", "skill-group");
    groupElement.appendChild(createElement("h3", "skill-group__title", group.title));

    const tagList = createElement("div", "tag-list");
    group.items.forEach((item) => tagList.appendChild(createElement("span", "tag", item)));
    groupElement.appendChild(tagList);
    grid.appendChild(groupElement);
  });

  wrapper.appendChild(grid);
  return wrapper;
}

function renderNavigation(content) {
  const nav = document.getElementById("nav-links");
  nav.replaceChildren();
  content.nav.forEach((item) => {
    const link = createElement("a", null, item.label);
    link.href = `#${item.id}`;
    nav.appendChild(link);
  });
}

function renderPage(language) {
  const content = window.resumeContent[language];
  document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
  document.title = language === "zh" ? "Wenjin Li | 简历" : "Wenjin Li | Resume";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = content.meta[key] || "";
  });

  renderNavigation(content);

  const main = document.getElementById("content");
  main.replaceChildren(
    renderProfile(content.sections.profile),
    renderEntrySection("education", content.sections.education),
    renderEntrySection("experience", content.sections.experience),
    renderEntrySection("research", content.sections.research),
    renderEntrySection("projects", content.sections.projects),
    renderSkills(content.sections.skills)
  );

  document.querySelectorAll(".language-toggle__button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === language);
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });
}

function setLanguage(language, updateUrl = true) {
  if (!SUPPORTED_LANGUAGES.includes(language)) return;
  window.localStorage.setItem("resume-language", language);

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, "", url);
  }

  renderPage(language);
}

document.addEventListener("DOMContentLoaded", () => {
  const language = getInitialLanguage();
  setLanguage(language, false);

  document.querySelectorAll(".language-toggle__button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
});
