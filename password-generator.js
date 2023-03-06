// Mendapatkan elemen tombol Generate Password
var generateBtn = document.getElementById("generate-password");

// Menambahkan event listener untuk tombol Generate Password
generateBtn.addEventListener("click", function() {
  // Mendapatkan nilai input panjang password
  var length = document.getElementById("length").value;
  
  // Mendapatkan nilai input uppercase
  var uppercase = document.getElementById("uppercase").checked;
  
  // Mendapatkan nilai input lowercase
  var lowercase = document.getElementById("lowercase").checked;
  
  // Mendapatkan nilai input numbers
  var numbers = document.getElementById("numbers").checked;
  
  // Mendapatkan nilai input symbols
  var symbols = document.getElementById("symbols").checked;
  
  // Memanggil fungsi generatePassword dengan parameter yang sesuai
  var password = generatePassword(length, uppercase, lowercase, numbers, symbols);
  
  // Menampilkan password di input field password
  document.getElementById("password").value = password;
});

// Fungsi generatePassword untuk membuat password acak
function generatePassword(length, uppercase, lowercase, numbers, symbols) {
  var charset = "";
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) charset += "0123456789";
  if (symbols) charset += "!@#$%^&*()_+-={}[]|\\:;<>,.?/~";
  
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}
