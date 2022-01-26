// ********************************
// convert markdown file to pdf
// ********************************

// get the component
const markdownpdf = require("markdown-pdf");

// set the source file and destination file
markdownpdf()
  .from("markdown.md")
  .to("PDF_File.pdf", function () {
  console.log("Done")
})