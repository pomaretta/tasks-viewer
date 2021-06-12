class HeaderComponent extends ApplicationComponent {

    constructor(){
        super();
        //debuggerConsole(settings);
        //this.settings = settings;
    }

    setSettings = (settings) => {
        this.settings = settings;
        debuggerConsole(this.settings);
    }

    initializeComponent = () => {
        ComponentStructureSystem.parseStructure(this.settings);
    }

    destroyComponent = () => {

        delete window["headerNavContainer"];
        delete window["headerTitleContainer"];
        delete window["headerTitleComponent"];
        delete window["burgerComponent"];
        delete window["burgerComponentLine1"];
        delete window["burgerComponentLine2"];
        delete window["burgerComponentLine3"];
        delete window["headerLinks"];

    }

    // PRIVATE FUNCTIONS
    // EACH Component has his own functions that are private

}