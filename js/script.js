// var link = document.querySelector(".modal-link");
// var popup = document.querySelector(".modal-write-us");
// var close = popup.querySelector(".modal-close");
// var form = popup.querySelector("form");
// var loginName = popup.querySelector("[name=name]");
// var loginEmail = popup.querySelector("[name=email]");

// var isStorageSupport = true;
// var storage = ""; 

// try {
//   storage = localStorage.getItem("login");
// } catch (err) {
//   isStorageSupport = false;
// }

// link.addEventListener("click", function (evt) {
// 	evt.preventDefault();
// 	popup.classList.add("modal-show");
//      if (storage) {
// 	    loginName.value = storage;
// 	    loginEmail.focus();
// 	  } else {
// 	    loginName.focus();
// 	  }
// });

// close.addEventListener("click", function (evt) {
// 	evt.preventDefault();
// 	popup.classList.remove("modal-show");
// 	popup.classList.remove("modal-error");
// });

// form.addEventListener("submit", function (evt) {
//   if (!loginName.value || !loginEmail.value){
//     evt.preventDefault();
//     popup.classList.remove("modal-error");
//     popup.offsetWidth = popup.offsetWidth;
//     popup.classList.add("modal-error");
//   } else {
//     if (isStorageSupport) {
//       localStorage.setItem("login", loginName.value);
//     }
//   }
// });

// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     if (popup.classList.contains("modal-show")) {
//       evt.preventDefault();
//       popup.classList.remove("modal-show");
//       popup.classList.remove("modal-error");
//     }
//   }
// });


var loginLink = document.querySelector(".modal-link");
var loginPopup = document.querySelector(".modal-write-us");
var loginClose = loginPopup.querySelector(".modal-close");
var loginForm = loginPopup.querySelector("form");
var loginLogin = loginPopup.querySelector("[name=name]");
var loginPassword = loginPopup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  
  if (storage) {
    loginLogin.value = storage;
    loginPassword.focus();
  } else {
    loginLogin.focus();
  }
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  loginPopup.classList.remove("modal-error");
});

loginForm.addEventListener("submit", function (evt) {
  if (!loginLogin.value || !loginPassword.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
      loginPopup.classList.remove("modal-error");
    }
  }
});