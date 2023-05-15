const firebaseConfig = {
    apiKey: "AIzaSyDqrQNL3CrwcbKegXJ0M9BSaJ4uijYoE6U",
    authDomain: "login-app-c07b9.firebaseapp.com",
    projectId: "login-app-c07b9",
    storageBucket: "login-app-c07b9.appspot.com",
    messagingSenderId: "967749758100",
    appId: "1:967749758100:web:5c5550d19c0dfca2ee5881",
    measurementId: "G-2B05R19740"
  };
      firebase.initializeApp(firebaseConfig);
  render();
  function render(){
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      recaptchaVerifier.render();
  }
      // function for send message
  function phoneAuth(){
      var number = document.getElementById('number').value;
      firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult){
          window.confirmationResult = confirmationResult;
          coderesult = confirmationResult;
          document.getElementById('sender').style.display = 'none';
          document.getElementById('verifier').style.display = 'block';
      }).catch(function(error){
          alert(error.message);
      });
  }
      // function for code verify
  function codeverify(){
      var code = document.getElementById('verificationcode').value;
      coderesult.confirm(code).then(function(){
          document.getElementsByClassName('p-conf')[0].style.display = 'block';
          document.getElementsByClassName('n-conf')[0].style.display = 'none';
      }).catch(function(){
          document.getElementsByClassName('p-conf')[0].style.display = 'none';
          document.getElementsByClassName('n-conf')[0].style.display = 'block';
      })
  }