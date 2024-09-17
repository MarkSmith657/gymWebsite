document.querySelectorAll('input[name="star"]').forEach(star => {
  star.addEventListener('change', handleStarRating);
});

function handleStarRating(event) {
  const rating = event.target.value;
  const thankYouDiv = document.getElementById('review-thank-you');
  const reviewWriteDiv = document.getElementById('review-write');
  
  if (rating <= 3) {
      thankYouDiv.classList.remove('hidden');
      reviewWriteDiv.classList.add('hidden');
  } else {
      reviewWriteDiv.classList.remove('hidden');
      thankYouDiv.classList.add('hidden');
  }
}

function resetReviewForm() {
  document.querySelectorAll('input[name="star"]').forEach(star => {
      star.checked = false;
  });
  document.getElementById('review-thank-you').classList.add('hidden');
}

function submitReview() {
  const reviewText = document.getElementById('review-text').value;
  const reviewList = document.getElementById('review-list');

  if (reviewText.trim() !== "") {
      const reviewDiv = document.createElement('div');
      reviewDiv.classList.add('review');
      reviewDiv.textContent = reviewText;
      reviewList.appendChild(reviewDiv);
      
      document.getElementById('review-text').value = '';
      document.querySelectorAll('input[name="star"]').forEach(star => {
          star.checked = false;
      });
      document.getElementById('review-write').classList.add('hidden');
  }
}
