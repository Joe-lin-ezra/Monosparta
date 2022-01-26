// ********************************
// convert markdown file to html file
// ********************************

// read markdown file content
const fs = require('fs');
let content = fs.readFileSync('markdown.md', 'utf8', (err) => {
    if(err) throw err;
});

// get the component
let mdTransfer = require('markdown-it')()
            .use(require('markdown-it-html5-embed'), {
              html5embed: {
                useImageSyntax: true, // Enables video/audio embed with ![]() syntax (default)
                // useLinkSyntax: true   // Enables video/audio embed with []() syntax
            }});
 
// convert the content to html
let html = mdTransfer.render(content);   

// write the html result into file
fs.writeFile('HTML_File.html', html, function (err) {
    if (err)
        console.log(err);
    else
        console.log('Write operation complete.');
});