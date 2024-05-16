const scriptPath = File($.fileName).path;
const fileName = "KBPR";

// modes
const FileModes = {
    FILE: "Fájl",
    FOLDER: "Mappa"
};
const FileModesArray = getValues(FileModes); // i despise this language

const RollWidthsArray = [610, 914, 1067];

const PaperSizes = {
    A0: { name: "A0", width: 841, height: 1189 },
    A1: { name: "A1", width: 594, height: 841 },
    A2: { name: "A2", width: 420, height: 594 },
    A3: { name: "A3", width: 297, height: 420 },
    A4: { name: "A4", width: 210, height: 297 },
    A5: { name: "A5", width: 148, height: 210 },
    A6: { name: "A6", width: 105, height: 148 },
    A7: { name: "A7", width: 74, height: 105 },
    POSTER: { name: "Nagyplakát", width: 914, height: 1600 },
    STICKER: { name: "Körmatrica", width: 71, height: 71 },
    OTHER: { name: "Egyéb...", width: 100, height: 100 }
};
const PaperSizesArray = getValues(PaperSizes);

// setting variables
var fileAspectLock = true;                  // aspect ratio lock is enabled by default
var selectedFileAspect = 1;                 // width / height, 1 by default
var selectedFile = null;                    // selected file, null by default
var selectedFolder = null;                  // selected folder, null by default
var selectedMode = FileModes.FILE;          // default mode
var selectedRollWidth = RollWidthsArray[0]; // default roll width = 610
var selectedPaperSize = PaperSizes.A4;      // default paper size = A4
var quantity = 20;                          // default quantity
var quantityCorrectionEnabled = false;      // quantity correction disabled by default
var margin = 5;                             // default margin = 5 mm
var gutter = 2;                             // default gutter = 2 mm
var guide = true;                           // guide is enabled by default