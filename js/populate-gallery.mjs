'use strict';

const populateGallery = () => {
  // Get the gallery element so we can populate it
  const gallery = document.querySelector('.gallery');
  
  for (let i = 0 ; i < 50 ; i++ ) {
    // insert the properties of each objects inside the array into the appropriate HTML field.
    gallery.innerHTML += `
       <figure>
        <img src="https://picsum.photos/500/500?random=${i}" alt="random picsum image" loading="lazy">
      <figcaption></figcaption>
      </figure>
    `;
  }
}

export default populateGallery;