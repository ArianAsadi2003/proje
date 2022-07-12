// Receives elements----------
function getElement(id) {
   let element = document.getElementById(id);
   return element;
}

// Button View user profile list----------
const showBtn = getElement('show');

// Hides the list and shows the message to the user----------
document.addEventListener('DOMContentLoaded', function () {
   user.classList.add('d-flex');
   profile.classList.add('d-none');
   information.classList.add('d-none');
   notification.classList.remove('d-none');
});

// Shows the list and hides the message form the user----------
function showElement() {
   const information = getElement('information');
   const notification = getElement('notification');
   const user = getElement('user');

   profile.classList.remove('d-none');
   information.classList.remove('d-none');
   notification.classList.add('d-none');

   user.classList.remove('d-flex');
}

// Sets the user profile in the target box----------
function setInformation(obj) {
   // Receives elements----------
   const profile = getElement('profile');
   let resGender = getElement('resGender');
   let resName = getElement('resName');
   let resCountry = getElement('resCountry');
   let resCity = getElement('resCity');
   let resPhone = getElement('resPhone');
   let resAge = getElement('resAge');
   let resEmail = getElement('resEmail');

   // Puts the answer in the element----------
   profile.src = obj.results[0].picture.large;
   resGender.innerHTML = obj.results[0].gender;
   resName.innerHTML = obj.results[0].name.first + ' ' + obj.results[0].name.last;
   resCountry.innerHTML = obj.results[0].location.country;
   resCity.innerHTML = obj.results[0].location.city;
   resPhone.innerHTML = obj.results[0].phone;
   resAge.innerHTML = obj.results[0].dob.age;
   resEmail.innerHTML = obj.results[0].email;
}

//! Example-1 ----------
/*
showBtn.addEventListener('click', function () {
   showAndHide();
   
   const xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://randomuser.me/api/');
   
   xhr.addEventListener('load', function () {
      let jsonOutput = xhr.responseText;
      let jsonObj = JSON.parse(jsonOutput);
      
      setInformation(jsonObj);
   });

   xhr.send();
});
*/

//! Example-2 ----------
/*
function sendReq(url) {
   return new Promise(function (resole, reject) {
      const xhr = new XMLHttpRequest();

      xhr.open('GET', url);

      xhr.addEventListener('load', function () {
         if (xhr.status == 200) {
            resole(xhr.responseText);
         } else reject(xhr.responseText);
      });

      xhr.send();
   });
}

showBtn.addEventListener('click', function () {
   let send = sendReq('https://randomuser.me/api/');
   send.then(onFulFiled);
   function onFulFiled(reply) {
      let jsonObj = JSON.parse(reply);
      setInformation(jsonObj);
      showElement();
   }
});
*/

//! Example-3 ----------
showBtn.addEventListener('click', function () {
   fetch('https://randomuser.me/api/')
      .then((response) => response.text())
      .then((text) => {
         setInformation(JSON.parse(text));
         showElement();
      });
});
