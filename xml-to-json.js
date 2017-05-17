const parser = require ('xml2json');
const fs = require('fs');

function parseDirectory2Json (sourceDir, targetDir) {
  const sourceFiles = fs.readdirSync(sourceDir);
  sourceFiles.forEach((file) => {
    const xml = fs.readFileSync(sourceDir + file);
    const json = parser.toJson(xml);
    file = file.replace('.xml', '.json');
    fs.writeFileSync(targetDir + file, json);
  });
}

parseDirectory2Json('./testXML/', './testJSON/');