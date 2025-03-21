function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchField = document.querySelector('#searchField');
      let searchValue = searchField.value.toLowerCase();
      searchField.value = '';

      let rows = Array.from(document.querySelectorAll('tbody tr'));
      rows.forEach(row => {
         row.classList.remove('select');
      });

      rows.forEach(row => {
         let cells = Array.from(row.children);
         cells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(searchValue)) {
               row.classList.add('select');
            }
         });
      });
   }
}