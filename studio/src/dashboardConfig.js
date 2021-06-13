export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60c65e55e4bb6d1c56477930",
                  title: "Sanity Studio",
                  name: "eva-m-hands-on-jamstack-studio",
                  apiId: "f5cb06c9-b8fc-4ab2-876e-9fe72260c624",
                },
                {
                  buildHookId: "60c65e55ebfb71989d046c97",
                  title: "Blog Website",
                  name: "eva-m-hands-on-jamstack",
                  apiId: "a1fa5e5c-6637-40a6-8cbc-2d3c3b4e59f9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/daxyonis/eva-m-hands-on-jamstack",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://eva-m-hands-on-jamstack.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
