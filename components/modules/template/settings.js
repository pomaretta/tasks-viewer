_registerConfiguration(this,"myPackageSettings",

{
  application: {
    identifier: '<APPLICATION-SIGNED-IDENTIFIER>',
    version: '1.0',
    packageType: {
      type: 'internal',
    },
  },
  editor: {
    identifier: '<EDITOR(PERSON)-IDENTIFIER>',
    privateKey: '<EDITOR-PRIVATE-API-KEY>',
  },
  module: {
    internal: {
      identifier: 'my-package',
      className: 'myPackage',
      version: '1.0',
      tag: 'stable',
      icon: 'icon.png',
      build: {
        type: 'internal',
        path: './modules/my-package',
      },
    },
    name: 'My first module',
    description: 'This is the template module for creating modules with Editor Application.',
    author: {
      name: 'Carlos Pomares',
      website: 'https://carlospomares.es',
    },
    repository: 'exercices/',
    tasks: {
        type: "tasks",
        data:  [
            {
              type: 'container',
              name: 'HTML',
              description: 'This is the template module for creating modules with Editor Application.',
              data: [
                {
                  type: 'task',
                  name: 'Propuesta 1',
                  description: 'This is the template module for creating modules with Editor Application.',
                  path: {
                    origin: 'html/prop1',
                    index: 'index.html',
                    source: 'source.txt',
                  },
                },
              ],
            },
        ]
    }
  },
}

);