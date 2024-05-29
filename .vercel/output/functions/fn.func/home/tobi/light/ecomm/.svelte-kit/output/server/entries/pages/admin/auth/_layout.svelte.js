import { c as create_ssr_component, b as add_classes, e as escape, v as validate_component, a as add_attribute, d as each } from "../../../../chunks/ssr.js";
/* empty css                      */import { l as loadIcons } from "../../../../chunks/functions.js";
import { a as subscribe } from "../../../../chunks/lifecycle.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { p as page } from "../../../../chunks/stores.js";
import "devalue";
import { N as Navbar, F as Footer } from "../../../../chunks/Navbar.js";
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isCurrentLinkActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { link } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  isCurrentLinkActive = $page.url.pathname.startsWith(link.active || link.href);
  $$unsubscribe_page();
  return `<li${add_classes((isCurrentLinkActive ? "active" : "").trim())}>${link.href.includes("/logout") ? `<form action="/admin/auth/logout" method="post"><button class="${"cursor-pointer group flex items-center rounded-lg p-2 " + escape(
    isCurrentLinkActive ? "bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-white dark:text-white" : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    true
  )}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: link.icon,
      class: "flex-shrink-0 text-2xl transition duration-75 " + (isCurrentLinkActive ? "text-white" : "text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white")
    },
    {},
    {}
  )} <span class="ml-3 flex-1 whitespace-nowrap">${escape(link.name)}</span></button></form>` : `<a${add_attribute("href", link.href, 0)} class="${"group flex items-center rounded-lg p-2 " + escape(
    isCurrentLinkActive ? "bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-white dark:text-white" : "text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    true
  )}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: link.icon,
      class: "flex-shrink-0 text-2xl transition duration-75 " + (isCurrentLinkActive ? "text-white" : "text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white")
    },
    {},
    {}
  )} <span class="ml-3 flex-1 whitespace-nowrap">${escape(link.name)}</span></a>`}</li>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { links } = $$props;
  loadIcons(links.map(({ icon }) => icon));
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  return `<aside class="fixed left-0 top-0 z-40 mt-16 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white transition-transform dark:border-gray-700 dark:bg-gray-800 md:translate-x-0 py-6" aria-label="Sidebar"><div class="h-full overflow-y-auto bg-white px-3 dark:bg-gray-800"><ul class="space-y-2 font-medium">${each(links, (link) => {
    return `${validate_component(Link, "Link").$$render($$result, { link }, {}, {})}`;
  })}</ul></div></aside>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    {
      name: "Dashboard",
      href: "/admin/auth/dashboard",
      icon: "mdi:view-dashboard-variant"
    },
    {
      name: "Admins",
      active: "/admin/auth/admin",
      href: "/admin/auth/admin/list",
      icon: "mdi:account-multiple"
    },
    {
      name: "Categories",
      active: "/admin/auth/category",
      href: "/admin/auth/category/list",
      icon: "mdi:layers-triple"
    },
    {
      name: "Products",
      active: "/admin/auth/product",
      href: "/admin/auth/product/list",
      icon: "mdi:shopping"
    },
    {
      name: "Logout",
      href: "/admin/auth/guest/logout",
      icon: "mdi:logout"
    }
  ];
  return `<div>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(Sidebar, "Sidebar").$$render($$result, { links }, {}, {})} <div class="flex min-h-screen flex-col gap-y-5 bg-gray-100 p-6 dark:bg-gray-900 md:ml-64"><section class="mt-16 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800">${slots.default ? slots.default({}) : ``}</section> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Layout as default
};
