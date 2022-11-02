import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import store from "@/store";

const ViewPage = () =>
  import(
    /* webpackChunkName: "index-page" */ "@/views/ViewIndexPage.vue" //? Entry Point
  );

const AdminPage = () =>
  import(
    /* webpackChunkName: "admin-page" */ "@/views/ViewAdminPage.vue"
  );

const AdminDashboard = () =>
  import(
    /* webpackChunkName: "admin-dashboard" */ "@/components/Admin/AdminDashboard.vue"
  );
const LoginPage = () =>
  import(
    /* webpackChunkName: "admin-dashboard" */ "@/components/Admin/Auth/LoginPage.vue"
  );
const RegisterPage = () =>
  import(
    /* webpackChunkName: "admin-dashboard" */ "@/components/Admin/Auth/RegisterPage.vue"
  );
const ForgotPassword = () =>
  import(
    /* webpackChunkName: "admin-dashboard" */ "@/components/Admin/Auth/ForgotPassword.vue"
  );

const BlogCategories = () =>
  import(
    /* webpackChunkName: "blog-categories" */ "@/components/Admin/Blog/BlogCategories.vue"
  );

const BlogCreateCategory = () =>
  import(
    /* webpackChunkName: "create-category" */ "@/components/Admin/Blog/BlogCreate.vue"
  );

const HomePage = () =>
  import(
    /* webpackChunkName: "home-page" */ "@/views/HomePage.vue"
  );

const AboutPage = () =>
  import(
    /* webpackChunkName: "about-page" */ "@/views/AboutPage.vue"
  );

const PricingPage = () =>
  import(
    /* webpackChunkName: "pricing-page" */ "@/views/PricingPage.vue"
  );

const NotaryPage = () =>
  import(
    /* webpackChunkName: "pricing-page" */ "@/views/NotaryPage.vue"
  );

const SolutionPage = () =>
  import(
    /* webpackChunkName: "solution-page" */ "@/views/SolutionPage.vue"
  );

const ContactPage = () =>
  import(
    /* webpackChunkName: "faq" */ "@/views/ContactPage.vue"
  );

const SolutionToSign = () =>
  import(
    /* webpackChunkName: "to-sign" */ "@/components/Solution/SolutionToSign.vue"
  );

const SolutionToVerify = () =>
  import(
    /* webpackChunkName: "to-verify" */ "@/components/Solution/SolutionToVerify.vue"
  );

const SolutionToNotarise = () =>
  import(
    /* webpackChunkName: "to-notarise" */ "@/components/Solution/SolutionToNotarise.vue"
  );


const ResourcesPage = () =>
  import(
    /* webpackChunkName: "resource-page" */ "@/views/ResourcesPage.vue"
  );

const ResourceBlog = () =>
  import(
    /* webpackChunkName: "blog" */ "@/components/Resources/ResourceBlog.vue"
  );

const ResourceFAQ = () =>
  import(
    /* webpackChunkName: "faq" */ "@/components/Resources/ResourceFAQ.vue"
  );

const ResourcePartners = () =>
  import(
    /* webpackChunkName: "faq" */ "@/components/Resources/ResourcePartners.vue"
  );

const routes = [
  {
    path: "/admin",
    name: "Admin",
    component: AdminPage,
    meta: {
      title: "Admin | ToNote",
    },
    children: [
      {
        path: "",
        name: "admin.dashboard",
        component: AdminDashboard,
        meta: {
          title: "Admin | ToNote",
          transitionName: "slide",
          metaTags: [
            {
              name: "description",
              content: "The blog page of ToNote.",
            },
            {
              property: "og:description",
              content: "The blog page of ToNote.",
            },
          ],
        },
      },
      
      {
        path: "category",
        name: "admin.category",
        component: BlogCategories,
        meta: {
          title: "Category | ToNote",
          // requiresAuth: true,
          metaTags: [
            {
              name: "description",
              content: "The category page of ToNote.",
            },
            {
              property: "og:description",
              content: "The category page of ToNote.",
            },
          ],
        },
      },
      {
        path: "create",
        name: "admin.create",
        component: BlogCreateCategory,
        meta: {
          title: "Create Category | ToNote",
        },
      },
    ],
  },

  {
    path: "/login",
    name: "Login",
    component: LoginPage,
    meta: {
      title: "Login | ToNote",
      transitionName: "slide",
      metaTags: [
        {
          name: "description",
          content: "The blog page of ToNote.",
        },
        {
          property: "og:description",
          content: "The blog page of ToNote.",
        },
      ],
    },
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
    meta: {
      title: "Register | ToNote",
      transitionName: "slide",
      metaTags: [
        {
          name: "description",
          content: "The blog page of ToNote.",
        },
        {
          property: "og:description",
          content: "The blog page of ToNote.",
        },
      ],
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "ForgotPassword | ToNote",
      transitionName: "slide",
      metaTags: [
        {
          name: "description",
          content: "The blog page of ToNote.",
        },
        {
          property: "og:description",
          content: "The blog page of ToNote.",
        },
      ],
    },
  },

  {
    path: "/",
    name: "Index",
    component: ViewPage,
    meta: {
      title: "Home | ToNote",
    },
    children: [
      {
        path: "",
        name: "Home",
        component: HomePage,
        meta: {
          title: "Home | ToNote",
          transitionName: "fade",
          metaTags: [
            {
              name: "description",
              content: "The home page of ToNote.",
            },
            {
              property: "og:description",
              content: "The home page of ToNote.",
            },
          ],
        },
      },
      {
        path: "/about",
        name: "About",
        component: AboutPage,
        meta: {
          title: "About | ToNote",
          transitionName: "fade",
          metaTags: [
            {
              name: "description",
              content: "The about page of ToNote.",
            },
            {
              property: "og:description",
              content: "The about page of ToNote.",
            },
          ],
        },
      },
      {
        path: "/solution",
        name: "Solution",
        component: SolutionPage,
        meta: {
          title: "Solutions - ToNote",
          transitionName: "fade",
        },
        children: [
          {
            path: "tosign",
            name: "solution.sign",
            component: SolutionToSign,
            meta: {
              title: "Sign | ToNote",
              transitionName: "fade",
              metaTags: [
                {
                  name: "description",
                  content: "To sign page of ToNote.",
                },
                {
                  property: "og:description",
                  content: "To sign page of ToNote.",
                },
              ],
            },
          },
          {
            path: "tonotarise",
            name: "solution.notarise",
            component: SolutionToNotarise,
            meta: {
              title: "Notarise | ToNote",
              transitionName: "fade",
              metaTags: [
                {
                  name: "description",
                  content: "To notarise page of ToNote.",
                },
                {
                  property: "og:description",
                  content: "To notarise page of ToNote.",
                },
              ],
            },
          },
          {
            path: "toverify",
            name: "solution.verify",
            component: SolutionToVerify,
            meta: {
              title: "Verify | ToNote",
              transitionName: "fade",
              metaTags: [
                {
                  name: "description",
                  content: "To verify page of ToNote.",
                },
                {
                  property: "og:description",
                  content: "To verify page of ToNote.",
                },
              ],
            },
          },
        ],
      },
      {
        path: "/contact",
        name: "Contact",
        component: ContactPage,
        meta: {
          title: "Contact | ToNote",
          transitionName: "fade",
          metaTags: [
            {
              name: "description",
              content: "The contact page of ToNote.",
            },
            {
              property: "og:description",
              content: "The contact page of ToNote.",
            },
          ],
        },
      },
      {
        path: "/pricing",
        name: "Pricing",
        component: PricingPage,
        meta: {
          title: "Pricing | ToNote",
          transitionName: "fade",
          metaTags: [
            {
              name: "description",
              content: "The pricing page of ToNote.",
            },
            {
              property: "og:description",
              content: "The pricing page of ToNote.",
            },
          ],
        },
      },
      {
        path: "/notary",
        name: "Notary",
        component: NotaryPage,
        meta: {
          title: "Notary | ToNote",
          transitionName: "fade",
          metaTags: [
            {
              name: "description",
              content: "The notary page of ToNote.",
            },
            {
              property: "og:description",
              content: "The notary page of ToNote.",
            },
          ],
        },
      },
      {
        path: "/resources",
        name: "Resources",
        component: ResourcesPage,
        meta: {
          title: "Resources - ToNote",
          transitionName: "fade",
        },
        children: [
          {
            path: "",
            name: "resource.blog",
            component: ResourceBlog,
            meta: {
              title: "Blog | ToNote",
              transitionName: "fade",
              metaTags: [
                {
                  name: "description",
                  content: "The blog page of ToNote.",
                },
                {
                  property: "og:description",
                  content: "The blog page of ToNote.",
                },
              ],
            },
          },
          {
            path: "faq",
            name: "resource.faq",
            component: ResourceFAQ,
            meta: {
              title: "FAQ | ToNote",
              transitionName: "fade",
              metaTags: [
                {
                  name: "description",
                  content: "The FAQ page of ToNote.",
                },
                {
                  property: "og:description",
                  content: "The FAQ page of ToNote.",
                },
              ],
            },
          },
          {
            path: "partners",
            name: "resource.partners",
            component: ResourcePartners,
            meta: {
              title: "Partners | ToNote",
              transitionName: "fade",
              metaTags: [
                {
                  name: "description",
                  content: "The Partners page of ToNote.",
                },
                {
                  property: "og:description",
                  content: "The Partners page of ToNote.",
                },
              ],
            },
          },
        ],
      },
    ]
  },

  {
    path: "/:catchAll(.*)",
    component: () => import("@/components/NotFound.vue"),
    meta: {
      title: "Error 404 | ToNote",
      transitionName: "zoom",
      metaTags: [
        {
          name: "description",
          content: "The error 404 page of ToNote.",
        },
        {
          property: "og:description",
          content: "The error 404 page of ToNote.",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  NProgress.start();

  /* ---------------------------------------------//? ROUTE GUARD META -------------------------------------------- */

  if (to.matched.some(record => record.meta.requiresAuth)) {
    const hasToken = store.getters["auth/token"];
    if (!hasToken) {
      next({ name: 'Home' })
    } else {
      next()
    }
  } else {
    next()
  }

  /* ---------------------------------------------//? SEO Friendly META -------------------------------------------- */

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  // if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
