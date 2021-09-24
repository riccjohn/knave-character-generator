module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "create files for a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "name of component",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{properCase name}}/index.ts",
        templateFile: "plop/component/index.hbs",
      },
      {
        type: "add",
        path: "src/components/{{properCase name}}/{{properCase name}}.tsx",
        templateFile: "plop/component/component.hbs",
      },
      {
        type: "add",
        path: "src/components/{{properCase name}}/{{properCase name}}.styles.ts",
        templateFile: "plop/component/component.styles.hbs",
      },
      {
        type: "add",
        path: "src/components/{{properCase name}}/{{properCase name}}.stories.tsx",
        templateFile: "plop/component/component.stories.hbs",
      },
      {
        type: "add",
        path: "src/components/{{properCase name}}/{{properCase name}}.test.tsx",
        templateFile: "plop/component/component.test.hbs",
      },
    ],
  })
}
