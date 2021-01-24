var elementsInsideBody = [...document.body.getElementsByTagName('*')];
var badWords = [
  "darkie",
  "jap",
  "japcrap",
  "negro",
  "negroes",
  "nigga",
  "niggah",
  "niggaracci",
  "niggard",
  "niggarded",
  "niggarding",
  "niggardliness",
  "niggardliness's",
  "niggardly",
  "niggards",
  "niggard's",
  "niggaz",
  "nigger",
  "niggerhead",
  "niggerhole",
  "niggers",
  "nigger's",
  "niggle",
  "niggled",
  "niggles",
  "niggling",
  "nigglings",
  "niggor",
  "niggur",
  "niglet",
  "nlgger",
  "russkie",
  "sandnigger",
  "snowback",
  "snownigger",
  "wetback",
  "whitenigger",
  "whitetrash",
  "yellowman",
]

//var badWords = badWords.json;

function findAndReplace() {
  elementsInsideBody.forEach(element => {
    element.childNodes.forEach(child => {
      if (child.nodeType === 3) {
        replaceText(child);
      }
    });
  });
}

function replaceText(node) {
  let value = node.nodeValue;

  for (var i = 0; i < badWords.length; i++) {
    var word = badWords[i];
    var wordreg = RegExp('(\\w*'+word+'e*r*s*(?!\\w+))', 'gi')
    var oldval = value;
    match = wordreg.exec(value)
    while (match !== null){
        value = value.replace(match[0], "■".repeat(match[0].length));
        match = wordreg.exec(value)
    }
  }
  if (value !== oldval) {
    // do something with knowledge of old values 
  }

  //  value = value.replace(/Cryptocurrency/gi, 'cRyPtOcUrReNcY');
  node.nodeValue = value;
}

window.onload = findAndReplace();