// CSS styles to inject
const customStyles = `
    #payment-custom-field2, #payment-custom-field3, #payment-custom-field4, #payment-custom-field5, #payment-custom-field6 {
        display: block !important;
        background-color: red;
        color: black;
    }
    #payment-custom-field2 label, #payment-custom-field3 label, #payment-custom-field4 label, #payment-custom-field5 label, #payment-custom-field6 label{
        color: white;
    }

    <!--You can add more here-->
`;

// Create a style element
const styleElement = document.createElement('style');
styleElement.textContent = customStyles;

// Append style element to the head of page
document.head.appendChild(styleElement);


chrome.storage.sync.get(["email"], function(result) {
    email_value = result.email;
    console.log(email_value);
    document.getElementById("input-payment-email").value = email_value;
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
    if ('email' in changes) {
      chrome.storage.sync.get(["email"], function(result) {
        const email_value = result.email;
        // console.log(email_value);
        document.getElementById("input-payment-email").value = email_value;
      });
    }
});
