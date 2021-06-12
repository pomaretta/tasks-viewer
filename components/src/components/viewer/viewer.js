class ViewerComponent extends ApplicationComponent {

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

    // FUNCTIONAL (OK) - TEST (OK) - DEPLOY ()
    initializeComponent = () => {
        ComponentStructureSystem.parseStructure(this.settings);
    }

    destroyComponent = () => {

        //mainContainer.removeChild(viewerComponentSection);
        //viewerComponentSection.removeChild(viewerComponentContainer);

        // PROPERTIES
        delete window["actualModule"];
        delete window["actualExercice"];
        delete window["safari"];

        //delete window["viewerComponentSection"];
        delete window["viewerComponentContainer"];
        delete window["viewerComponentContent"];
        delete window["viewerComponentModuleTitle"];
        delete window["viewerComponentModuleTitleString"];
        delete window["viewerTreeViewContainer"];
        delete window["treeViewTitle"];
        delete window["treeViewListRoot"];
        delete window["treeViewLevel"];
        delete window["treeViewLevelSpan"];
        delete window["treeViewLevelNest"];
        delete window["viewerComponentExerciceDescription"];
        delete window["viewerComponentExerciceDescriptionString"];
        delete window["viewerComponentExerciceViewerContainer"];
        delete window["viewerComponentExerciceViewerContainer"];
        delete window["viewerComponentExerciceSourceCodeContainer"];
        delete window["viewerComponentExerciceSourceCode"];

        //delete window["viewerComponent"];

    }

    // PRIVATE FUNCTIONS
    // EACH Component has his own functions that are private

}