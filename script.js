document.getElementById("signInBtn").addEventListener("click", function() {
    document.getElementById("signInForm").classList.add("show");
    document.getElementById("signUpForm").classList.remove("show");
  });
  
  document.getElementById("signUpBtn").addEventListener("click", function() {
    document.getElementById("signUpForm").classList.add("show");
    document.getElementById("signInForm").classList.remove("show");
  });
  