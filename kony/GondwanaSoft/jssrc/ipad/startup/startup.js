//startup.js file
function appmenuitemid3_callback_seq0() {
    frmHome.show();
};

function appmenuitemid4_callback_seq0() {
    frmDashboard.show();
};

function GondwanaSoftpostappinit_seq0(params) {
    datelist = new Array();
    productlist = new Array();
};
var globalhttpheaders = {};
var appConfig = {
    appId: "GondwanaSoft",
    appName: "Gondwana Soft",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.2.64.42",
    serverPort: "8080",
    secureServerPort: null,
    isDebug: true,
    middlewareContext: "middleware",
    url: "http://10.2.64.42:8080/middleware/MWServlet",
    secureurl: "https://10.2.64.42/middleware/MWServlet"
};
sessionID = "";
datelist = {};
productlist = {};

function appInit(params) {
    skinsInit();
    initializelogoHeader();
    initializedateExt();
    initializefilterBtns();
    datePopupGlobals();
    frm000DataVizViewFormGlobals();
    frm101DemoCGGlobals();
    frm103DemoCNAGlobals();
    frm105DemoSeaGreyGlobals();
    frm112DemoFinanceChartFormGlobals();
    frm115DemoCCGlobals();
    frm116DemoWhiteGlobals();
    frm800PopUp001Globals();
    frmDashboardGlobals();
    frmGradingGlobals();
    frmGrowthGlobals();
    frmHomeGlobals();
    frmTopGlobals();
    frmTrendsGlobals();
    frmVisGlobals();
    welcomePopGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false
    })
};

function themeCallBack() {
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: GondwanaSoftpostappinit_seq0,
        showstartupform: function() {
            frmDashboard.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;