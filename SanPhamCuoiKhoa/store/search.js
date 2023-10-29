function filter() {
    let input = document.querySelector('.find').value //<-- Changed to querySelector
    input = input.toLowerCase();
    let cards = document.querySelectorAll('.product'); //<-- Changed to querySelectorAll with '.card' selector.
  
    //loop over cards and compare search with title.
    cards.forEach((el) => {
      let title = el.querySelector('.title').textContent.toLowerCase();
      el.style.display = title.includes(input) ? "list-item" : "none";
    });
  }