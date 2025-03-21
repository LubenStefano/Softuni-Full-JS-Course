function search() {
      let searchText = document.getElementById('searchText').value;
      let listItems = document.getElementsByTagName('li');
      let result = document.getElementById('result');
      let matches = 0;
      for (let i = 0; i < listItems.length; i++) {
         if (listItems[i].textContent.includes(searchText)) {
               listItems[i].style.fontWeight = 'bold';
               listItems[i].style.textDecoration = 'underline';
               matches++;
         }
      }
      result.textContent = `${matches} matches found`;
}
