
input.addEventListener('onclick', function(e) {
  e.preventDefault();
  function fetchData(str) {
    fetch("/image")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var arrApi = data.split('');
        var img = data['hdUrl']
        var title = data['title']
        var h3 = document.createElement("h3");
        var title = document.createTextNode(title);
        h3.appendChild(title);
        // console.log(h3);
        var background = document.getElementById('mybody');
        document.body.style.backgroundImage = url(img);
      })
      .catch(function(err) {
        console.log("No such Asteroids");

      })
  }
  }
);
