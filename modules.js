// Required packages
const pdf = require("pdf-creator-node");
const fs = require("fs");

// Read HTML Template
const html = fs.readFileSync("template.html", "utf8");

// PDF Options
const options = {
  format: "A3",
  orientation: "portrait",
  border: "10mm",
  header: {
    height: "45mm",
    contents: '<div style="text-align: center;">Author: PROTYUSH</div>',
  },
  footer: {
    height: "28mm",
    contents: {
      default: '<div style="text-align: center;">Made by PROTYUSH</div>',
    },
  },
};

// User data
const users = [
  {
    name: "Protyush", age: "24", sex: "Male", address: "Ramkrishnabati(baroyaritala)", city: "Hooghy", college: "MCKV Institute of Engineering"
  },
  {
    name: "Navjot", age: "26", sex: "Male", address: "45 Sector 9", city: "Chandigarh", college: "Panjab University"
  },
  {
    name: "Vitthal", age: "26", sex: "Male", address: "Plot 12", city: "Pune", college: "MIT Pune"
  },
  {
    name: "Anita", age: "24", sex: "Female", address: "B-123 Green Park", city: "Delhi", college: "DU North Campus"
  },
  {
    name: "Raj", age: "22", sex: "Male", address: "5 Shastri Nagar", city: "Jaipur", college: "JECRC University"
  },
  {
    name: "Priya", age: "28", sex: "Female", address: "11 Rose Villa", city: "Bangalore", college: "Christ University"
  },
  {
    name: "Aman", age: "25", sex: "Male", address: "19 Patel Street", city: "Lucknow", college: "IIM Lucknow"
  },
  {
    name: "Sneha", age: "27", sex: "Female", address: "7 Rainbow Apartments", city: "Hyderabad", college: "Osmania University"
  },
  {
    name: "Ravi", age: "29", sex: "Male", address: "301 Skyline Tower", city: "Chennai", college: "Anna University"
  },
  {
    name: "Meera", age: "21", sex: "Female", address: "D-9 Lotus Society", city: "Kolkata", college: "Presidency University"
  },
  {
    name: "Kunal", age: "30", sex: "Male", address: "88 West End", city: "Mumbai", college: "St. Xavier's College"
  },
  {
    name: "Divya", age: "23", sex: "Female", address: "12 Pine Street", city: "Indore", college: "DAVV"
  },
  {
    name: "Rahul", age: "31", sex: "Male", address: "77 Galaxy Road", city: "Nagpur", college: "VNIT Nagpur"
  },
  {
    name: "Nikita", age: "22", sex: "Female", address: "4 Blossom Block", city: "Ahmedabad", college: "Nirma University"
  },
  {
    name: "Vikram", age: "27", sex: "Male", address: "17 East Lane", city: "Bhopal", college: "MANIT Bhopal"
  },
  {
    name: "Isha", age: "26", sex: "Female", address: "26 Pearl Heights", city: "Patna", college: "Patna Women's College"
  },
  {
    name: "Arjun", age: "25", sex: "Male", address: "91 Campus View", city: "Amritsar", college: "GNDU"
  },
  {
    name: "Pooja", age: "24", sex: "Female", address: "34 Harmony Homes", city: "Ranchi", college: "BIT Mesra"
  },
  {
    name: "Neeraj", age: "28", sex: "Male", address: "76 Unity Lane", city: "Surat", college: "SVNIT Surat"
  },
  {
    name: "Tanya", age: "23", sex: "Female", address: "15 Coral Tower", city: "Thiruvananthapuram", college: "IISER TVM"
  },
];


// Document definition
const document = {
  html: html,
  data: {
    users: users,
  },
  path: "./output.pdf",
  type: "pdf", // optional: "buffer" or "stream"
};

// Create PDF
pdf
.create(document, options)
  .then((res) => {
    console.log("PDF created:", res);
  })
  .catch((error) => {
    console.error("PDF creation error:", error);
  });
