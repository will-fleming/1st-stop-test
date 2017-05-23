import xml2js from 'xml2js';
import fs from 'fs';

function parseDirectory2Json (sourceDir, targetDir) {
  const jsonToUpload = [];
  const sourceFiles = fs.readdirSync(sourceDir);
  
  sourceFiles.forEach((file) => {
    const parser = new xml2js.Parser();
    const xml = fs.readFileSync(sourceDir + file);
  
    let json;
    parser.parseString(xml, (err, result) => {
      json = JSON.stringify(result);
    });
  
    jsonToUpload.push(json);
    file = file.replace('.xml', '.json');
    fs.writeFileSync(targetDir + file, json);
  });
  
  return jsonToUpload;
}

export default parseDirectory2Json;
// parseDirectory2Json('./testXML/', './testJSON/');