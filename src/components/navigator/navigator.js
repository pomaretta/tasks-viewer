class NavigationComponent extends ApplicationComponent {

    constructor(){
        super();
        /* debuggerConsole(settings);
        this.settings = settings; */
    }

º   // PUBLIC FUNCTIONS
    // Only use super functions

    setSettings = (settings) => {
        this.settings = settings;
        debuggerConsole(this.settings);
    }

    initializeComponent = () => {
        ComponentStructureSystem.parseStructure(this.settings);
    }

    destroyComponent = () => {

        delete window["navigatorComponentSectionContainer"];
        delete window["navigatorComponentContent"];
        delete window["navigatorComponentTitleContainer"];
        delete window["navigatorComponentTitle"];
        delete window["moduleLoadButton"];
        delete window["navigatorModuleList"];

    }

    // PRIVATE FUNCTIONS
    // EACH Component has his own functions that are private



}