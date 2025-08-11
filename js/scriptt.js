document.querySelector(".main-header").innerHTML = `
  <style>
#main-header ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
}
    #main-header li {
      margin: 0;
      padding: 15px 20px;
    }

    #main-header a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-family: Arial, sans-serif;
    }

    #main-header a:hover {
      background-color: #555;
      border-radius: 5px;
    }
  </style>

  <ul>
    <li><a href="index.html">Home 1</a></li>
    <li><a href="home2.html">Home 2</a></li>
    <li><a href="home3.html">Home 3</a></li>
    <li><a href="home4.html">Home 4</a></li>
    <li><a href="home5.html">Home 5</a></li>
  </ul>
`;
