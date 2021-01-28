
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    "projects": [
      { "name": "Waiting in Line",
      "image": "lorempixel.people.1.jpeg",
      "id": "project1"
    },
    { "name": "Needfinding",
    "image": "lorempixel.people.1.jpeg",
    "id": "project2"
    },
    { "name": "Doing Work",
    "image": "lorempixel.people.1.jpeg",
    "id": "project3"
    },
    { "name": "Finshing work",
    "image": "lorempixel.people.1.jpeg",
    "id": "project4"
    }
  ]
  });
};