function validateInput() {
  var name = document.forms["message-form"]["nama"].value;
  var birthDate = document.forms["message-form"]["tanggal-lahir"].value;
  var gender = document.forms["message-form"]["jenis-kelamin"].value;
  var message = document.forms["message-form"]["pesan"].value;

  if (name == "" || birthDate == "" || gender == "" || message == "") {
    alert("Input tidak boleh kosong");
    return false;
  }

  setOutput(name, birthDate, gender, message);
  return false;
}

function setOutput(name, birthDate, gender, message) {
  document.getElementById("output-current-time").innerText = new Date();
  document.getElementById("output-nama").innerText = name;
  document.getElementById("output-tanggal-lahir").innerText = birthDate;
  document.getElementById("output-jenis-kelamin").innerText = gender;
  document.getElementById("output-pesan").innerText = message;
  return false;
}
