    
 //Radio Button
        export const xPathHeaderRadioButton: string = "//h1[text()='Radio Button']";
 
 
 
 
 
 //Text Box Locators   
    export const xPathHeaderTextBox: string = "//h1[text()='Text Box']";
    export const xFullNameField: string = "//input[@id='userName']";
    export const xEmailField: string = "//input[@id='userEmail']";
    export const xCurrentAddress: string = "//textarea[@id='currentAddress']";
    export const xPermanentAddress: string = "//textarea[@id='permanentAddress']";
    export const xSubmitButton: string = "//button[@id='submit']";

    export const xOutputBlock: string = "//div[@id='output']";
    export const xOutputContainer: string =  "//div[@id='output']/div[@class='border col-md-12 col-sm-12']"

    export const xFullNameOutput: string = "//p[@id='name']";
    export const xEmailFieldOutput: string = "//p[@id='email']";
    export const xCurrentAddressOutput: string = "//p[@id='currentAddress']";
    export const xPermanentAddressOutput: string = "//p[@id='permanentAddress']";





//Check Box Locators
    export const xPathHeaderCheckBox: string = "//h1[text()='Check Box']";

    //Home
    export const xNodeHome: string = "//label[@for='tree-node-home']"
    export const xCheckBoxHome: string = xNodeHome + "//span[contains(@class,'rct-checkbox')]";
    export const xExpandHome: string = xNodeHome + "/preceding-sibling::button[contains(@class,'rct-collapse')]"
    export const xTreeNodeHome: string = xNodeHome + "/ancestor::li[1]"//to check status: collapsed/expanded 

    //Desktop
    export const xNodeDesktop: string = "//label[@for='tree-node-desktop']"
    export const xCheckBoxDesktop: string = xNodeDesktop + "//span[contains(@class,'rct-checkbox')]";
    export const xExpandDesktop: string = xNodeDesktop + "/preceding-sibling::button[contains(@class,'rct-collapse')]"
    export const xTreeNodeDesktop: string = xNodeDesktop + "/ancestor::li[1]" //to check status: collapsed/expanded 
                export const xNodeNotes: string = "//label[@for='tree-node-notes']";
                export const xCheckBoxNotes: string = xNodeNotes + "//span[contains(@class,'rct-checkbox')]"; //click()
                export const xNodeCommands: string = "//label[@for='tree-node-commands']";
                export const xCheckBoxCommands: string = xNodeCommands + "//span[contains(@class,'rct-checkbox')]"; //click()
                
    //Documents
    export const xNodeDocuments: string = "//label[@for='tree-node-documents']"
    export const xCheckBoxDocuments: string = xNodeDocuments + "//span[contains(@class,'rct-checkbox')]";
    export const xExpandDocuments: string = xNodeDocuments + "/preceding-sibling::button[contains(@class,'rct-collapse')]"
    export const xTreeNodeDocuments: string = xNodeDocuments + "/ancestor::li[1]"//to check status: collapsed/expanded 
                //WorkSpace
                export const xNodeWorkSpace: string = "//label[@for='tree-node-workspace']"
                export const xCheckBoxWorkSpace: string = xNodeWorkSpace + "//span[contains(@class,'rct-checkbox')]"; //click()
                export const xExpandWorkSpace: string = xNodeWorkSpace + "/preceding-sibling::button[contains(@class,'rct-collapse')]"
                export const xTreeNodeWorkSpace: string = xNodeWorkSpace + "/ancestor::li[1]"//to check status: collapsed/expanded 
                        export const xNodeReact: string = "//label[@for='tree-node-react']";
                        export const xCheckBoxReact: string = xNodeReact + "//span[contains(@class,'rct-checkbox')]"; //click()
                        export const xNodeAngular: string = "//label[@for='tree-node-angular']";
                        export const xCheckBoxAngular: string = xNodeAngular + "//span[contains(@class,'rct-checkbox')]"; //click()
                        export const xNodeVeu: string = "//label[@for='tree-node-veu']";
                        export const xCheckBoxVeu: string = xNodeVeu + "//span[contains(@class,'rct-checkbox')]"; //click()
                //Office        
                export const xNodeOffice: string = "//label[@for='tree-node-office']"
                export const xCheckBoxOffice: string = xNodeOffice + "//span[contains(@class,'rct-checkbox')]"; //click()
                export const xExpandOffice: string = xNodeOffice + "/preceding-sibling::button[contains(@class,'rct-collapse')]"
                export const xTreeNodeOffice: string = xNodeOffice + "/ancestor::li[1]"//to check status: collapsed/expanded 
                        export const xNodePublic: string = "//label[@for='tree-node-public']";
                        export const xCheckBoxPublic: string = xNodePublic + "//span[contains(@class,'rct-checkbox')]"; //click()
                        export const xNodePrivate: string = "//label[@for='tree-node-private']";
                        export const xCheckBoxPrivate: string = xNodePrivate + "//span[contains(@class,'rct-checkbox')]"; //click()
                        export const xNodeClassified: string = "//label[@for='tree-node-classified']";
                        export const xCheckBoxClassified: string = xNodeClassified + "//span[contains(@class,'rct-checkbox')]"; //click()
                        export const xNodeGeneral: string = "//label[@for='tree-node-general']";
                        export const xCheckBoxGeneral: string = xNodeGeneral + "//span[contains(@class,'rct-checkbox')]"; //click()

    //Downloads
    export const xNodeDownloads: string = "//label[@for='tree-node-downloads']"
    export const xCheckBoxDownloads: string = xNodeDownloads + "//span[contains(@class,'rct-checkbox')]";
    export const xExpandDownloads: string = xNodeDownloads + "/preceding-sibling::button[contains(@class,'rct-collapse')]"
    export const xTreeNodeDownloads: string = xNodeDownloads + "/ancestor::li[1]"//to check status: collapsed/expanded 
                export const xNodeWordFile: string = "//label[@for='tree-node-wordFile']";
                export const xCheckBoxWordFile: string = xNodeWordFile + "//span[contains(@class,'rct-checkbox')]";
                export const xNodeExcelFile: string = "//label[@for='tree-node-excelFile']";
                export const xCheckBoxExcelFile: string = xNodeExcelFile + "//span[contains(@class,'rct-checkbox')]";
