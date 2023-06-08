console.log("Site loaded")
document.addEventListener('DOMContentLoaded', function() {
    var notification = document.getElementById('notification');
    var notificationText = document.getElementById('notificationText');
    var closeButton = document.getElementById('closeButton');
  
    function showNotification(text) {
      notificationText.textContent = text;
      notification.style.display = 'block';
    }
  
    function closeNotification() {
      notification.style.display = 'none';
    }
  
    if (notification && notificationText && closeButton) {
      closeButton.addEventListener('click', closeNotification);
  
      
      setTimeout(function() {
        showNotification('Witaj na stronie!');
        console.log("Hello notification send!")
      }, 3000);
    }
});
  