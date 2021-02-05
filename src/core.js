/* 

    TASKS APPLICATION

*/

// DEPLOY NODE APP https://www.phusionpassenger.com/library/walkthroughs/deploy/nodejs/ownserver/apache/oss/trusty/deploy_app.html
// https://stackoverflow.com/questions/28299901/dynamically-build-dom-tree-from-json

// RUNTIME VARIABLES
const CORE_VERSION = "1.0";
let DEBUG = true;
let EXPERIMENTAL = false;

// RUNTIME LOAD
this.addEventListener('load', (event) => {
    
    debuggerConsole("DEBUG TRUE");
    if(EXPERIMENTAL) debuggerConsole("EXPERIMENTAL TRUE");
    
    // document.title = "Taskvisor";

    // MAIN
    //clearInterval(this);
    loader("initial");
    Main();

});

// MAIN
function Main(){

    // CREATE APPLICATION
    _applicationInstance();

    if(typeof window["application"] !== "undefined"){
        application.loadConfiguration();
        if(typeof window["applicationSettings"] == "undefined"){
            setTimeout(() => {
                debuggerConsole("WAITING 1 SECONDS...")
                application.initializeComponent();
            },100);
        }
    }

}

// **********************************************
/* 

    APPLICATION COMPONENT FUNCTIONS

*/

// FUNCTIONAL (OK) - TEST (OK) - DEPLOY ()
function _applicationInstance(){
    try {
        if(typeof window["TaskVisor"] == "undefined" && typeof window["application"] == "undefined") {
            window["TaskVisor"] = taskvisorClass();
            window["application"] = new TaskVisor();
        } else {
            throw "Application already created.";
        }
    } catch (error) {
        debuggerConsole("ERROR: " + error)
    }
}

// FUNCTIONAL (OK) - TEST (OK) - DEPLOY ()
function _instanceScriptObject(scriptPaths){

    try {
        
        if(typeof scriptPaths !== "object" && typeof scriptPaths !== "string"){
            throw `invalid type of argument, gave ${typeof scriptPaths}`; 
        } else {

            if(typeof scriptPaths == "object") {
                scriptPaths.forEach( (path) => {

                    debuggerConsole(`LOADING PATH -> ${path}`);

                    var x = document.createElement('script');
                    x.src = path;
                    x.async = true;
                
                    document.head.appendChild(x);
                    document.head.removeChild(x)

                });
            } else {
                debuggerConsole(`LOADING PATH -> ${scriptPaths}`);

                    var x = document.createElement('script');
                    x.src = scriptPaths;
                    x.async = true;
                
                    document.head.appendChild(x);
                    document.head.removeChild(x)
            }

        }

    } catch (error) {
        debuggerConsole("ERROR: " + error);
    }

}

// FUNCTIONAL (OK) - TEST (OK) - DEPLOY ()
function _createVariable(variableName,variableData){
    try {
    
        debuggerConsole(`ANALITZING VARIABLE ${variableName}`);
        
        if(typeof window[variableName] !== "undefined") {
            throw "VARIABLE ALREADY CREATED.";
        } else {
            window[variableName] = variableData;
        }

    } catch (error) {
        debuggerConsole("ERROR: " + error);
    }

}

// FUNCTIONAL (OK) - TEST (RUNNING) - DEPLOY ()
function _registerConfiguration(handler,variableName,configurationData){
    
    handler.setTimeout(_createVariable(variableName,configurationData),500);

}

// **********************************************
/* 

    APPLICATION MODULE FUNCTIONS

*/



// **********************************************
/* 

    APPLICATION UTILITY FUNCTIONS

*/

// FUNCTIONAL (OK) -- TEST(OK) -- DEPLOY(OK)
function debuggerConsole(dataToShow){
    if(DEBUG) console.log(dataToShow);
}

// FUNCTIONAL (OK) -- TEST(OK) -- DEPLOY(OK)
function loader(type){
    try {
        
        if(type == "initial" || type == "runtime"){

            let load = document.createElement('div');
            let loaderContainer = document.createElement('div');
            
            if(type == "initial"){

                document.body.classList.add('loaderHandler');
                // window["root"].classList.add('disabled');
                load.classList.add('loader');
                document.body.prepend(load);

            } else if(type == "runtime"){

                loaderContainer.classList.add('loadHandler')
                loaderContainer.id = "loadHandler";
                load.classList.add('load');
                loaderContainer.appendChild(load);
                document.body.prepend(loaderContainer);

            }

            setTimeout(() => {

                if(type == 'initial'){
                    document.body.removeChild(load);
                    document.body.classList.remove('loaderHandler');
                    document.getElementById('root').classList.remove('disabled');
                    // delete window["load"];
                    debuggerConsole("LOADER INITIAL.");
                } else if(type == 'runtime'){
                    debuggerConsole("TRYING TO REMOVE CONTAINER...");
                    document.body.removeChild(document.getElementById('loadHandler'));
                    delete window["load"];
                    delete window["loaderContainer"];
                    debuggerConsole("LOADER RUNTIME.");
                }

            },1000)

        } else {
            throw "No valid type of loader.";
        }

    } catch (error) {
        debuggerConsole(error);
    }
}

const utilities = {
    loadAllUtilities: () => {
        utilities.burgerUtility();
    },
    burgerUtility: () => {
        burgerComponent.addEventListener('click', () => {
            //console.log('Burger opens!');
            if (headerLinks.classList.contains('active')) {
                headerLinks.classList.remove('active');
                burgerComponent.classList.remove('toggle');
            } else {
                headerLinks.classList.add('active');
                burgerComponent.classList.add('toggle');
            }
        });
    }
}

// **********************************************
/* 

    APPLICATION COMPONENT CLASS

*/

function taskvisorClass(){
    return class Taskvisor extends ApplicationComponent {

        settingsPath = ["./src/config/settings.js"];
        components;

        initializeComponent = () => {
            
            debuggerConsole("ATTEMPT TO USE applicationSettings");
              
            if(typeof window["applicationSettings" !== "undefined"]){

                this.applicationData = applicationSettings.application;
                this.applicationAPI = applicationSettings.api;
                this.settingsData = applicationSettings.settings;

                if(this.applicationData.metadata){
                    this.applicationMetadata = this.applicationData.metadata;
                }

                this.components = this.applicationData.components;
                document.title = this.applicationData.name + " - V" + this.applicationData.version;

                // LOAD COMPONENTS PROTO
                this._loadAllComponentsPrototypes();
                this._loadMetadata();
                this._loadComponents();
            }
        }

        loadConfiguration = () => {
            _instanceScriptObject(this.settingsPath);
        }

        reloadComponents = () => {
            loader('initial');
            this._reloadComponent();
            utilities.loadAllUtilities();
        }

        // PRIVATE

        // FUNCTIONAL (YES) -- TEST() -- DEPLOY()
        _loadAllComponentsPrototypes = () => {
            try {

                this.components.forEach((component) => {
                    //debuggerConsole(component.path);
                    _instanceScriptObject(component.path);
                });

            } catch (error) {
                debuggerConsole(error);
            }
        }

        // FUNCTIONAL (YES) -- TEST() -- DEPLOY()
        _instanceAllComponents = () => {
            try {

                this.components.forEach((component) => {

                    let data = component.data;

                    data.forEach((el) => {
                        debuggerConsole(el);
                    })
                    
                    window[component.class] = eval(`new ${component.prototype}()`);
                    window[component.class].setSettings(data);

                });

            } catch (error) {
                debuggerConsole(error);
            }
        }

        // FUNCTIONAL (YES) -- TEST() -- DEPLOY()
        _loadMetadata = () => {
            try {
                
                debuggerConsole("ATTEMPT TO USE METADATA");

                if(this.applicationMetadata){

                    var metadata = {
                        status: false,
                        path: ''
                    };

                    for(var prop in this.applicationMetadata){
                        if(this.applicationMetadata[prop].data[0].type == 'metadata'){
                           metadata.status = true;
                           metadata.path = this.applicationMetadata[prop].data;
                        }
                    }
                    
                    if(metadata.status){
                        ComponentStructureSystem.parseStructure(metadata.path);
                    }

                }

            } catch (error) {
                debuggerConsole(error);
            }
        }

        // FUNCTIONAL (YES) -- TEST() -- DEPLOY()
        _loadAllComponents = () => {
            try {
                
                //this._instaceAllContainers();

                this.components.forEach((component) => {
                    window[component.class].initializeComponent();    
                })
                utilities.loadAllUtilities();

            } catch (error) {
                debuggerConsole(error);
            }
        }

        // FUNCTIONAL (YES) -- TEST() -- DEPLOY()
        _destroyAllComponents = () => {
            try {

                this.components.forEach((component) => {
                    
                    window[component.class].destroyComponent();

                });

            } catch (error) {
                debuggerConsole(error);
            }
        }

        // FUNCTIONAL (YES) -- TEST() -- DEPLOY()
        _loadComponents = () => {
            clearTimeout(this);
            setTimeout(() => {
                this._instanceAllComponents();
                this._loadAllComponents();
            },500);
        }

        // FUNCTIONAL (YES) -- TEST() -- DEPLOY()
        _reloadComponent = () => {
            try {

                this.components.forEach((component) => {
                    window[component.class].destroyComponent();
                    window[component.class].initializeComponent();
                })

            } catch (error) {
                debuggerConsole(error);   
            }
        }

    }
}

// **********************************************
/*

    PROTOTYPES

*/

// MODULE COMPONENT
class ApplicationComponent {

    constructor(){}

    // COMPONENT INSTANCE CHILDS
    initializeComponent = () => {}
    destroyComponent = () => {}

    // PRIVATE INTERFACE FUNCTION
    loadConfiguration = () => {}
    unloadConfiguration = () => {}

}

// https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Inheritance
// TASK MODULE
function ApplicationModule(settings) {

    ({ application: this.application , editor: this.editor , module: this.module } = settings);

    /* loadConfiguration = () => {}
    unloadConfiguration = () => {}

    initializeComponent = () => {}
    destroyComponent = () => {}

    loadTasks = () => {} */

}

// TASK ITSELF
class ApplicationTask {

    constructor(){

        this.title;
        this.description;
        
        // DATE + AUTHOR
        this.taskData;

        // PATH AND NAMES
        this.taskPath;

    }

}

// STRUCTURE SYSTEM
class ComponentStructureSystem {

    static parseStructure = (settings) => {

        debuggerConsole("PARSING COMPONENT STRUCTURE");
    
        this.settings = settings[0];

        if(this.settings.type == 'structure' || this.settings.type == 'metadata'){
            
            debuggerConsole(`PARSING TYPE: ${this.settings.type}`);

            this.structure = this.settings.data;
            ComponentStructureSystem._generateStructure(null,this.structure);
        }

    }

    static _generateStructure = (parent,jsonData) => {
        for (var i = 0; i < jsonData.length; i++) {
            
            debuggerConsole(jsonData[i]);

            // ****************************

            // PARSE STEP

            if(parent != null){
                debuggerConsole(`INHERIT PARENT: ${parent}`);
            }
            
            if(jsonData[i].type){
                debuggerConsole(`TYPE: ${jsonData[i].type}`);
            }
            
            if(jsonData[i].tag){
                debuggerConsole(`TAG: ${jsonData[i].tag}`);
            }
            
            if(jsonData[i].name){
                debuggerConsole(`NAME: ${jsonData[i].name}`);
            }
            
            if(jsonData[i].parent){
                debuggerConsole(`PARENT: ${jsonData[i].parent}`);
            }

            // ****************************

            // INSTACE STEP

            if(jsonData[i].type == 'container'){

                debuggerConsole(`CREATED CONTAINER: ${jsonData[i].name}`)
                
                window[jsonData[i].name] = document.createElement(jsonData[i].tag);
                
            }

            if(jsonData[i].type == 'css'){

                debuggerConsole(`CREATING STYLESHEET ${jsonData[i].name}`);

                window[jsonData[i].name] = document.createElement('link');
                window[jsonData[i].name].rel = "stylesheet";

            }

            if(jsonData[i].type == 'meta'){

                debuggerConsole(`CREATING META ${jsonData[i].name}`);

                window[jsonData[i].name] = document.createElement('meta');

            }

            if(jsonData[i].type == 'element'){
                
                debuggerConsole(`CREATING ELEMENT: ${jsonData[i].name}`);

                window[jsonData[i].name] = document.createElement(jsonData[i].tag);

            }

            if(jsonData[i].type == 'inner') {

                if(typeof jsonData[i].data != "object"){
                    debuggerConsole(`INNER SIMPLE DATA: ${jsonData[i].data}`);
                    window[parent].innerHTML = jsonData[i].data;  
                }

            }

            if(jsonData[i].type == 'reference') {
                debuggerConsole(`REFERENCE DATA: ${jsonData[i].data}`);
                if(window[jsonData[i].from]){
                    debuggerConsole(`DATA EXISTS: ${window[jsonData[i].from]}`);
                    window[parent].innerHTML = eval(`window['${jsonData[i].from}'].${jsonData[i].data}`);
                }
            }

            if(jsonData[i].type == 'meta-reference') {
                debuggerConsole(`REFERENCE DATA: ${jsonData[i].data}`);
                if(window[jsonData[i].from]){
                    debuggerConsole(`DATA EXISTS: ${window[jsonData[i].from]}`);
                    window[parent].content = eval(`window['${jsonData[i].from}'].${jsonData[i].data}`);
                }
            }

            if(jsonData[i].type == 'meta-name') {
                debuggerConsole(`META NAME DATA: ${jsonData[i].data}`);
                window[parent].name = jsonData[i].data;
            }

            if(jsonData[i].type == 'meta-content') {
                debuggerConsole(`META CONTENT DATA: ${jsonData[i].data}`);
                window[parent].content = jsonData[i].data;
            }

            if(jsonData[i].type == 'string') {
                debuggerConsole(`STRING DATA: ${jsonData[i].data}`);
                window[parent].innerHTML = jsonData[i].data;
            }

            if(jsonData[i].type == 'href') {
                debuggerConsole(`HREF DATA: ${jsonData[i].data}`);
                window[parent].href = jsonData[i].data;
            }

            if(jsonData[i].type == 'path-css'){
                window[parent].href = jsonData[i].data;
            }

            if(jsonData[i].objectType){
                eval(`window['${jsonData[i].name}'].type = '${jsonData[i].objectType}'`);
            }

            if(jsonData[i].style){
                if(jsonData[i].style.length > 0){
                    for(var prop = 0; prop < jsonData[i].style.length; prop++){
                        debuggerConsole(jsonData[i].style[prop]);
                        debuggerConsole(`window['${jsonData[i].name}'].style.${jsonData[i].style[prop].property} = ${jsonData[i].style[prop].content}`);
                        eval(`window['${jsonData[i].name}'].style.${jsonData[i].style[prop].property} = '${jsonData[i].style[prop].content}';`);
                    }
                }
            }

            if(jsonData[i].type == 'onclick'){
                eval(`window['${parent}'].addEventListener('click', () => {
                    ${jsonData[i].data};
                })`);
            }

            if(jsonData[i].class || jsonData[i].id){

                debuggerConsole(`TRYING TO ASSIGN ID OR CLASS TO: ${jsonData[i].name}`);

                if(jsonData[i].class){
                    if(typeof jsonData[i].class == 'object'){
                        for(var prop = 0; prop < jsonData[i].class.length; prop++){
                            window[jsonData[i].name].classList.add(jsonData[i].class[prop]);
                        }
                    } else {
                        window[jsonData[i].name].classList.add(jsonData[i].class);
                    }
                } 
                    
                if(jsonData[i].id) {
                    window[jsonData[i].name].id = (jsonData[i].id);
                } 

            }

            if(jsonData[i].type == 'container' || jsonData[i].type == 'element' || jsonData[i].type == 'css' || jsonData[i].type == 'meta'){
                
                //debuggerConsole(`TRYING TO APPEND CHILD ${jsonData[i].name} ON ${jsonData[i].parent || parent}`)
                
                if(parent){
                    window[parent].appendChild(window[jsonData[i].name]);
                } else if(jsonData[i].parent == 'head'){
                    debuggerConsole("ENCOUNTERED HEAD");
                    document.head.appendChild(window[jsonData[i].name]);
                } else if(jsonData[i].parent == 'body'){
                    debuggerConsole("ENCOUNTERED BODY");
                    document.body.append(window[jsonData[i].name]);
                } else if(jsonData[i].parent != "body"){
                    window[jsonData[i].parent].appendChild(window[jsonData[i].name]);
                }
            }

            // ****************************

            // RECURSIVE STEP

            if(jsonData[i].data){
                if (jsonData[i].data.length > 0 && typeof jsonData[i].data == "object") {
                
                    if(jsonData[i].type == 'container' || jsonData[i].type == 'element' || jsonData[i].type == 'css' || jsonData[i].type == 'meta'){
                        ComponentStructureSystem._generateStructure(jsonData[i].name,jsonData[i].data);
                    } else if(jsonData[i].type == 'inner' || jsonData[i].type == 'meta-content' && typeof jsonData[i].data == 'object'){
                        ComponentStructureSystem._generateStructure(parent,jsonData[i].data);
                    } else {
                        ComponentStructureSystem._generateStructure(null,jsonData[i].data);
                    }
    
                }
            }

            // ****************************

        }
    }

    static parseModule = (module) => {

        debuggerConsole("PARSING MODULE STRUCTURE");

        this.repository = module.repository;
        this.tasks = module.tasks;

        if(this.tasks.type == "tasks"){
            debuggerConsole(`PARSING TYPE: ${this.tasks.type}`);
            this.structure = this.tasks.data;
            ComponentStructureSystem._generateModuleStructure(null,this.structure,this.repository);
        }

    }


    static _generateModuleStructure = (parent,jsonData, repository) => {
        for (var i = 0; i < jsonData.length; i++) {
            
            debuggerConsole(jsonData[i]);

            // ****************************

            // PARSE STEP

            if(parent != null){
                debuggerConsole(`INHERIT PARENT: ${parent}`);
            }
            
            if(jsonData[i].type){
                debuggerConsole(`TYPE: ${jsonData[i].type}`);
            }
            
            if(jsonData[i].name){
                debuggerConsole(`NAME: ${jsonData[i].name}`);
            }
            
            if(jsonData[i].parent){
                debuggerConsole(`PARENT: ${jsonData[i].parent}`);
            }

            // ****************************

            // INSTACE STEP

            if(jsonData[i].type == 'container'){

                debuggerConsole(`CREATED CONTAINER: ${jsonData[i].name}`)
                
                window[jsonData[i].name] = document.createElement(jsonData[i].tag);
                
            }

            // ****************************

            // RECURSIVE STEP

            if(jsonData[i].data){
                if (jsonData[i].data.length > 0 && typeof jsonData[i].data == "object") {
                    ComponentStructureSystem._generateStructure(null,jsonData[i].data);
                }
            }

            // ****************************

        }
    }

}

// **********************************************
/*

    EXPERIMENTAL

*/


if(EXPERIMENTAL){

    debuggerConsole("EXPERIMENTAL FEATURES.");

}

// TODO

// Modules