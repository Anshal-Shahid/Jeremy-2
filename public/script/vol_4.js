document.addEventListener("DOMContentLoaded", () => {
    const currentDate = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    document.querySelector('.date').textContent= formattedDate;
  });