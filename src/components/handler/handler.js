class HandlerComponent extends ApplicationComponent {

    constructor(){
        super();
    }

    setSettings = (settings) => {
        this.settings = settings;
        debuggerConsole(this.settings);
    }

    // FUNCTIONAL (OK) - TEST (OK) - DEPLOY ()
    initializeComponent = () => {
        ComponentStructureSystem.parseStructure(this.settings);
    }

    destroyComponent = () => {
     
        document.body.removeChild(root);

        delete window['root'];
        delete window['headerContainer'];
        delete window['mainContainer'];
        delete window['navigatorComponentSection'];
        delete window['viewerComponentSection'];

    }

}