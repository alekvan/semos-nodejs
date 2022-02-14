function deletePlayer(id) {
  fetch("http://localhost:3000/players/" + id, {
    method: "DELETE",
  })
    .then((res) => res.text())
    .then((res) => {
      location.reload();
    });
}

function deleteClub(id) {
  fetch("http://localhost:3000/clubs/" + id, {
    method: "DELETE",
  })
    .then((res) => res.text())
    .then((res) => {
      location.reload();
    });
}

function deleteCoach(id) {
  fetch("http://localhost:3000/coaches/" + id, {
    method: "DELETE",
  })
    .then((res) => res.text())
    .then((res) => {
      location.reload();
    });
}

function deleteAgent(id) {
  fetch("http://localhost:3000/agents/" + id, {
    method: "DELETE",
  })
    .then((res) => res.text())
    .then((res) => {
      location.reload();
    });
}
