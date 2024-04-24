const submitButton = document.getElementById('submitButton');
const emailInput = document.getElementById('emailInput');

chrome.storage.sync.get(["email"], function(result) {
  emailInput.placeholder = result.email;
});

submitButton.addEventListener('click', function() {
  // const emailInput = document.getElementById('emailInput').value;
  chrome.storage.sync.set({ ["email"]: [emailInput.value] });
  // console.log(emailInput);
});
