let guests = [];

fetch('guests.json')
  .then(response => response.json())
  .then(data => {
    guests = data;
  })
  .catch(error => {
    console.error('Error loading guest list:', error);
  });

function findTable() {
  const query = document.getElementById('nameInput').value.trim().toLowerCase();
  const resultsDiv = document.getElementById('results');

  resultsDiv.innerHTML = '';

  if (query.length < 2) {
    return;
  }

  const matches = guests.filter(guest =>
    guest.name.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    resultsDiv.innerHTML = `
      <div class="result-card">
        Name not found. Please see Kris or John.
      </div>
    `;
    return;
  }

  matches.forEach(match => {
    resultsDiv.innerHTML += `
      <div class="result-card">
        <div>${match.name}</div>
        <div class="table-number">Table ${match.table}</div>
      </div>
    `;
  });
}