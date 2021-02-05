_registerConfiguration(this,"applicationSettings", 

// SETTINGS

{
  settings: {
    version: '1.0',
    name: 'applicationSettings',
    data: {
      release: '20210110',
      identifier: 'stable'
    },
  },
  api: {
    url: 'api.carlospomares.es',
    key: '1000',
  },
  application: {
    name: 'Taskvisor',
    identifier: 'development',
    version: '20210205',
    metadata: [
      {
        name: 'head',
        version: '1.0',
        data: [
          {
            type: 'metadata',
            data: [
              {
                type: 'meta',
                parent: 'head',
                name: 'meta',
                data: [
                  {
                    type: 'meta-name',
                    data: 'author'
                  },
                  {
                    type: 'meta-content',
                    data: [
                      {
                        type: 'meta-reference',
                        from: 'applicationSettings',
                        data: 'application.name'
                      }
                    ]
                  }
                ]
              },
              {
                type: 'css',
                parent: 'head',
                name: 'resetCss',
                data: [
                  {
                    type: 'path-css',
                    data: './assets/css/reset.css'
                  }
                ]
              },
              {
                type: 'css',
                parent: 'head',
                name: 'mainCss',
                data: [
                  {
                    type: 'path-css',
                    data: './assets/css/main.css'
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    components: [
      {
        name: 'handler',
        version: '1.0',
        path: './src/components/handler/handler.js',
        class: 'handlerComponent',
        prototype: 'HandlerComponent',
        data: [
          {
            type: 'structure',
            data: [
              {
                type: 'container',
                parent: 'body',
                name: 'root',
                tag: 'div',
                id: 'root',
                class: 'disabled',
                data: [
                  {
                    type: 'container',
                    name: 'headerContainer',
                    tag: 'header',
                    class: 'header'
                  },
                  {
                    type: 'container',
                    name: 'mainContainer',
                    tag: 'main',
                    class: 'main',
                    data: [
                      {
                        type: 'container',
                        name: 'navigatorComponentSection',
                        tag: 'section',
                        class: 'module-navigation'
                      },
                      {
                        type: 'container',
                        name: 'viewerComponentSection',
                        tag: 'section',
                        class: 'module-viewer'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'header',
        version: '1.0',
        path: './src/components/header/header.js',
        class: 'headerComponent',
        prototype: 'HeaderComponent',
        data: [
          {
            type: 'structure',
            data: [
              {
                type: 'container',
                name: 'headerNavContainer',
                parent: 'headerContainer',
                tag: 'nav',
                class: 'nav',
                data: [
                  {
                    type: 'container',
                    name: 'headerTitleContainer',
                    tag: 'div',
                    class: 'brand',
                    data: [
                      {
                        type: 'element',
                        name: 'headerTitleComponent',
                        tag: 'a',
                        data: [
                          {
                            type: 'inner',
                            data: [
                              {
                                type: 'reference',
                                from: 'applicationSettings',
                                data: 'application.name'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    type: 'container',
                    name: 'burgerComponent',
                    tag: 'div',
                    class: 'burger',
                    data: [
                      {
                        type: 'element',
                        name: 'burgerComponentLine1',
                        tag: 'div',
                        class: 'line1'
                      },
                      {
                        type: 'element',
                        name: 'burgerComponentLine2',
                        tag: 'div',
                        class: 'line2'
                      },
                      {
                        type: 'element',
                        name: 'burgerComponentLine3',
                        tag: 'div',
                        class: 'line3'
                      }
                    ]
                  },
                  {
                    type: 'container',
                    name: 'headerLinks',
                    tag: 'ul',
                    class: ['links','collapse'],
                    data: [
                      {
                        type: 'container',
                        name: 'item',
                        tag: 'li',
                        class: 'item',
                        data: [
                          {
                            type: 'element',
                            name: 'href',
                            tag: 'a',
                            class: 'link',
                            data: [
                              {
                                type: 'inner',
                                data: [
                                  {
                                    type: 'string',
                                    data: 'Author',
                                  }
                                ]
                              },
                              {
                                type: 'href',
                                data: 'http://www.carlospomares.es'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'container',
                        name: 'item',
                        tag: 'li',
                        class: 'item',
                        data: [
                          {
                            type: 'element',
                            name: 'href',
                            tag: 'a',
                            class: 'link',
                            data: [
                              {
                                type: 'inner',
                                data: [
                                  {
                                    type: 'string',
                                    data: 'Reload',
                                  }
                                ]
                              },
                              {
                                type: 'onclick',
                                data: 'application.reloadComponents()'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'navigation',
        version: '1.0',
        path: './src/components/navigator/navigator.js',
        class: 'navigationComponent',
        prototype: 'NavigationComponent',
        data: [
          {
            type: "structure",
            data: [
              {
                type: 'container',
                name: 'navigatorComponentSectionContainer',
                parent: 'navigatorComponentSection',
                tag: 'div',
                class: 'container',
                data: [
                  {
                    type: 'container',
                    name: 'navigatorComponentContent',
                    tag: 'div',
                    class: 'content',
                    data: [
                      {
                        type: 'container',
                        name: 'navigatorComponentTitleContainer',
                        tag: 'div',
                        class: 'title',
                        data: [
                          {
                            type: 'element',
                            name: 'navigatorComponentTitle',
                            tag: 'a',
                            data: [
                              {
                                type: 'inner',
                                data: 'Modules'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'element',
                        name: 'moduleLoadButton',
                        tag: 'button',
                        id: 'loadModuleButton',
                        data: [
                          {
                            type: 'inner',
                            data: 'Load modules'
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'viewer',
        version: '1.0',
        path: './src/components/viewer/viewer.js',
        class: 'viewerComponent',
        prototype: 'ViewerComponent',
        data: [
          {
            type: 'structure',
            data: [
              {
                type: 'container',
                name: 'viewerComponentContainer',
                parent: 'viewerComponentSection',
                tag: 'div',
                class: 'container',
                data: [
                  {
                    type: 'container',
                    name: 'viewerComponentContent',
                    tag: 'div',
                    class: ['content', 'disabled'], // SET TO DISABLED
                    data: [
                      {
                        type: 'container',
                        name: 'viewerComponentModuleTitle',
                        tag: 'div',
                        class: 'viewer-title',
                        data: [
                          {
                            type: 'element',
                            name: 'viewerComponentModuleTitleString',
                            tag: 'h1'
                          }
                        ]
                      },
                      {
                        type: 'container',
                        name: 'viewerTreeViewContainer',
                        tag: 'div',
                        class: 'viewer-file-tree',
                        data: [
                          {
                            type: 'element',
                            name: 'treeViewTitle',
                            tag: 'h4',
                            class: 'viewer-file-tree',
                          }
                        ]
                      },
                      {
                        type: 'container',
                        name: 'viewerComponentExerciceDescription',
                        tag: 'div',
                        class: 'viewer-description',
                        data: [
                          {
                            type: 'element',
                            name: 'viewerComponentExerciceDescriptionString',
                            tag: 'p'
                          }
                        ]
                      },
                      {
                        type: 'container',
                        name: 'viewerComponentExerciceViewerContainer',
                        tag: 'div',
                        class: 'viewer-code-viewer',
                        data: [
                          {
                            type: 'element',
                            objectType: 'text/html',
                            name: 'viewerComponentExerciceViewer',
                            tag: 'object',
                            id: 'viewer-code', // ADD HEIGHT AND TYPE
                            style: [
                              {
                                type: 'style',
                                property: 'height',
                                content: '300px'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        type: 'container',
                        name: 'viewerComponentExerciceSourceCodeContainer',
                        tag: 'div',
                        class: 'viewer-source-code',
                        data: [
                          {
                            type: 'element',
                            objectType: 'text/p',
                            name: 'viewerComponentExerciceSourceCode',
                            tag: 'object',
                            id: 'viewer-source', // ADD HEIGHT AND TYPE
                            style: [
                              {
                                type: 'style',
                                property: 'height',
                                content: '300px'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
  },
}

);