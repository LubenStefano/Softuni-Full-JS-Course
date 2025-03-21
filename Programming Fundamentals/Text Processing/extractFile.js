function extractFile(path) {
  path = path.split("\\");
  let fileInfo = path[path.length - 1].split(".");
  let fileName = fileInfo.slice(0, fileInfo.length - 1).join(".");
  let type = fileInfo[fileInfo.length - 1];
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${type}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx.ptt");
