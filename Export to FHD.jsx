
if (documents.length == 0) {
  alert("There are no documents open.");
}
else {
  var docRef = app.activeDocument;
  var psdSaveOptions = new PhotoshopSaveOptions();
  
  psdSaveOptions.layers = true;
  psdSaveOptions.embedColorProfile = true;
  psdSaveOptions.annotations = false;

  lcPath = docRef.path.toString();
  lcName = docRef.name.split('.')[0].toString();
  lcRoot = lcPath.substring(1, 2) + ":/" + lcPath.substring(3, lcPath.length - 6);
  lcPSDFile = lcRoot + "Edit/" + lcName + ".psd";
  loPSDFile = File(lcPSDFile.replace("%20", " "));
  lcJPGFile = lcRoot + "Processed/" + "FHD_" + lcName + ".jpg";
  loJPGFile = File(lcJPGFile.replace("%20", " "));

  // Save as PSD
  docRef.saveAs(loPSDFile, psdSaveOptions, true);

  lnWidth = Math.round(docRef.width);
  lnHeight = Math.round(docRef.height);
  
  var origRuler = app.preferences.rulerUnits; 
  app.preferences.rulerUnits = Units.PIXELS; 
  var jpegQuality = 12;
 
  if (lnWidth > lnHeight) { // Landscape
    docRef.resizeImage(UnitValue(1920, "px"), null, null, ResampleMethod.BICUBICSHARPER);
  } else if (lnWidth < lnHeight) { // Portrait
    docRef.resizeImage(null, UnitValue(1920, "px"), null, ResampleMethod.BICUBICSHARPER);  
  } else { // Square
    docRef.resizeImage(UnitValue(1920, "px"), UnitValue(1920, "px"), null, ResampleMethod.BICUBICSHARPER);
  }
  
  // Save as JPEG 
  var jpgOptions = new JPEGSaveOptions(); 
  jpgOptions.quality = jpegQuality; 
  docRef.flatten(); 
  docRef.saveAs(loJPGFile, jpgOptions, true); 
  docRef.close(SaveOptions.DONOTSAVECHANGES); 
  app.preferences.rulerUnits = origRuler; 

}