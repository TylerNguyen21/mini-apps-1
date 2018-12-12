let template = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>CSV REPORT GENERATOR</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
    <link rel = "stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h1>CSV REPORT GENERATOR</h1>
    <div>
        <form id= 'csvSubmit' action="/" method="POST" enctype="multipart/form-data">
            <input type='file' name='fileUpload' id='fileUpload'>
            <input type="submit" value="Submit">
        </form>
    </div>
    <div class="form">
        <table>
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>county</th>
                <th>city</th>
                <th>role</th>
                <th>sales</th>
            </thead>
            <tbody>`


const csvFileConverter = (data, callback) => {
  for (var x = 0; x < data.length; x++) {
    appendToTable(data[x]);
  }
  template +=`</tbody>`;
  template += `</table>`;
  template += `</div>`;
  template += `<script src="./app.js"></script>`;
  template += `</body>`;
  template += `</html>`;
  callback(null, template);
}

const appendToTable = (employeeData) => {
  template +=`
    <tr>
        <td>${employeeData[0]}</td>
        <td>${employeeData[1]}</td>
        <td>${employeeData[2]}</td>
        <td>${employeeData[3]}</td>
        <td>${employeeData[4]}</td>
        <td>${employeeData[5]}</td>
    </tr>
  `
}



module.exports = {
    csvFileConverter
}