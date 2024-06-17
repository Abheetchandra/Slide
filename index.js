const imageData = [
    'https://images.pexels.com/photos/4835419/pexels-photo-4835419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3934616/pexels-photo-3934616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/7120424/pexels-photo-7120424.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/11280353/pexels-photo-11280353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/19589484/pexels-photo-19589484/free-photo-of-a-woman-in-a-black-coat-and-black-purse-standing-next-to-a-carousel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
   
];

let currentIndex = 0;
const slideImage = document.getElementById('slideImage');

// Function to change the image
function changeImage() {
    currentIndex = (currentIndex + 1) % imageData.length;
    slideImage.src = imageData[currentIndex];
}

// Set the first image as the default image
slideImage.src = imageData[currentIndex];

// Change image every 2000ms (2 seconds)
setInterval(changeImage, 2000);
