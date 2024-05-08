document.addEventListener("DOMContentLoaded", function() {
  //  code here


  // Login Fuvction 
  function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'user' && password === 'admin') {
        // Redirect to a specific page after successful login
        window.location.href = 'HomePageuserDark.html'; // Change 'specific_page.html' to your desired page URL
    } else {
        document.getElementById('error-message').innerText = 'Invalid username or password';
    }
}

function BackToHome() {
    // Redirect to the home page
    window.location.href = 'home_page.html'; // Change 'home_page.html' to your home page URL
}
  // diplay HomPage
  document.getElementById("Newticket").addEventListener("click", function (event) {
      document.getElementById("HomePageDiv").style.display = "none";
      document.getElementById("newTicket").style.display = "block";
      document.getElementById("Manageacountport").style.display= "none";
  });

  // display new ticket port
  document.getElementById("HmoePagebtn").addEventListener("click",function(event){
  document.getElementById("HomePageDiv").style.display="block";
  document.getElementById("newTicket").style.display = "none";
  document.getElementById("Manageacountport").style.display= "none";

});

// Display Manage Acount

  document.getElementById("MangeAccountbtn").addEventListener("click",function(event){
  document.getElementById("HomePageDiv").style.display="none";
  document.getElementById("newTicket").style.display = "none";
  document.getElementById("Manageacountport").style.display= "block";

  
});
// file ticket

  const fileBtn = document.querySelector('.filebtn');
  const summaryDiv = document.getElementById('summaryDiv');
  const overlay = document.getElementById('overlay');
  const confirmButton = document.createElement('button');

  fileBtn.addEventListener('click', function() {
      // Retrieve user input values
      const firstName = document.querySelector('[aria-label="First name"]').value;
      const lastName = document.querySelector('[aria-label="Last name"]').value;
      const phone = document.querySelector('[aria-label="رقم التواصل"]').value;
      const email = document.querySelector('[aria-label="email"]').value;
      const city = document.getElementById('city').value;
      const ticketText = document.getElementById('exampleFormControlTextarea1').value;
      const attachments = document.getElementById('formFile').files;

      // Check if the checkbox is checked
      const checkBox = document.getElementById('flexCheckIndeterminate');

      if (!checkBox.checked) {
          alert('يرجى الموافقة على الشروط قبل إرسال التذكرة.');
          return;
      }

      // Generate summary HTML
      const summaryHTML = `
          <h4>ملخص التذكرة:</h4>
          <p><strong>الاسم:</strong> ${firstName} ${lastName}</p>
          <p><strong>رقم التواصل:</strong> +966${phone}</p>
          <p><strong>البريد الإلكتروني:</strong> ${email}</p>
          <p><strong>المدينة:</strong> ${city}</p>
          <p><strong>نص التذكرة:</strong> ${ticketText}</p>
          <p><strong>المرفقات:</strong> ${attachments.length} ملف(ات)</p>
          
      `;

      // Update summary in the summaryDiv
      summaryDiv.innerHTML = summaryHTML;

      // Show the overlay
      overlay.style.display = 'flex';
  });

  // Function to close the overlay
  function closeOverlay() {
      overlay.style.display = 'none';
      // Clear the summary
      summaryDiv.innerHTML = '';
  }

            confirmButton.textContent = 'تأكيد الإرسال';
            confirmButton.classList.add('btn', 'btn-primary');
            confirmButton.onclick = function() {
                // Your code to handle confirmation (e.g., submit the ticket) goes here
                alert('تم إرسال التذكرة بنجاح!');
                // Clear the summary
                summaryDiv.innerHTML = '';
                // Hide the overlay
                overlay.style.display = 'none';
            };

            // Append the confirmation button to the overlay content
            overlaycontent.appendChild(confirmButton);

            console.log("Confirmation button created and appended."); // Log statement to check
       

});//end of DOM Load