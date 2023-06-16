$(document).ready(function() {
  $('.nav-item').hover(
    function() {
      var megaMenu = $(this).find('.mega-menu');
      var megaMenuOffset = $(this).position().left;
      megaMenu.css('left', megaMenuOffset);
      megaMenu.addClass('show-submenu');
    },
    function() {
      var megaMenu = $(this).find('.mega-menu');
      megaMenu.removeClass('show-submenu');
    }
  );
});





































function toggleContent(index) {
  var additionalParagraphs = document.getElementsByClassName('additional-paragraph');
  additionalParagraphs[index - 1].classList.toggle('d-none');
}






function changeContent(direction) {
  var containers = ["compare-container-1", "compare-container-2","compare-container-3","compare-container-4" ];
  var currentContainer = document.querySelector(".container[style='display: block;']");
  var currentIndex = containers.indexOf(currentContainer.id);

  if (direction === "previous") {
    var newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = containers.length - 1;
    }
  } else {
    var newIndex = currentIndex + 1;
    if (newIndex >= containers.length) {
      newIndex = 0;
    }
  }

  currentContainer.style.display = "none";
  document.getElementById(containers[newIndex]).style.display = "block";
}












function showContent(target) {
  // Hide all content sections
  var contentSections = document.getElementsByClassName("content-news");
  for (var i = 0; i < contentSections.length; i++) {
    contentSections[i].style.display = "none";
  }
  
  // Show the selected content section
  var selectedSection = document.getElementById(target);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}










function showContent(target) {
  // Hide all content sections
  var contentSections = document.getElementsByClassName("content-news");
  for (var i = 0; i < contentSections.length; i++) {
    contentSections[i].style.display = "none";
  }
  
  // Show the selected content section
  var selectedSection = document.getElementById(target);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}

















  // JavaScript to handle the zoom square position based on mouse movement
  const container = document.querySelector('.container-description-product');
  const zoomSquare = container.querySelector('.zoom-square');
  
  container.addEventListener('mousemove', (e) => {
    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;
    
    zoomSquare.style.transform = `translate(${mouseX - 200}px, ${mouseY - 200}px)`; /* Adjust the translation values to center the square */
  });



  const containers = document.querySelectorAll('.zoom-container');
  
containers.forEach(container => {
  const image = container.querySelector('img');
  const zoomSquare = container.querySelector('.zoom-square');

  container.addEventListener('mousemove', (e) => {
    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;
  
    zoomSquare.style.display = 'block';
    zoomSquare.style.transform = `translate(${mouseX - 50}px, ${mouseY - 50}px)`;
    image.style.transformOrigin = `${mouseX}px ${mouseY}px`;
    image.style.transform = 'scale(1.2)'; // Adjust the zoom level as needed
  });
  
  container.addEventListener('mouseleave', () => {
    zoomSquare.style.display = 'none';
    image.style.transform = 'scale(1)';
  });
});




















