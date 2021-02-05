## Taskvisor
[First version](http://tasks.carlospomares.es)

### Table of contents

1. [Idea](#idea)
2. [Tecnologies](#tecnologies)
3. [Actual build](#actual-build)
4. [Future ideas](#future-ideas)
5. [Usage](#usage)

### Idea

This project was originaly thought for resolve a common problem in my daily workflow in colege tasks, the way to send the exercices to the teacher was with .ZIP files, in that way the teacher has to download, decompress, and go throught all the subdirectories and open each .HTML related to the exercice, for that reason I had an idea to export all my tasks in a way that my teacher only with an Web Application, based in client only, needn't an internet connection, without files in cloud, all in his computer, and that previusly .ZIP files named as "modules", that the teacher only has to download the module and move to the modules/ folder in the app directory. With the app the teacher can go throught that modules and see the tasks that contains, with a preview tool, that the user can see the result of the .HTML with an embed element, and a raw .HTML view, that can view the source code.

![Preview](https://github.com/pomaretta/taskvisor/blob/master/preview.png)

### Tecnologies

- HTML5
- CSS3
- JS (Vanilla, has some limitations, but this project can be done with it)

### Actual build

It's in development and this rebuild version of the first, is more powerfull and
uses Classes for making OOP. The actual version doesnt have finished the modules
class, but it will be the same design as the first early version. I have to migrate all the old code to the new conceptual vision of the app. That is actual based in Classes but I think that will function based inheritance will be better.

### Future Ideas

- External APP load option
- Public API for access to external modules
- Private API for making new builds for each application suit, and for upload modules by authorized module editors.
- Make this same application with Node and using more backend properties and apply the SOC, that will separate the front and back development.
* Make a suite of 4 applications
    - Taskvisor (this application)
    - Builder (for generate signed application builds)
    - Editor (for generate and sign modules by verified editors)
    * API
        - Will handle all API Keys (public and private) for verify builds.
        - Will handle all requests from users and send settings.js and module settings.
        - Will handle and store all new modules from Editors and act as CDN. 

### Usage

The actual usage of this early build of the applications is opening the local file index.html at the root directory.