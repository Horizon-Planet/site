const categories = document.querySelectorAll('.xmb-icon');
const itemsContainer = document.getElementById('xmb-items');

const data = {
  Levels: [
    {
      name: "Crazy Kart Race",
      author: "rmcvxzz",
      link: "https://horizonplanet.ct.ws/levels/crazy-kart-race"
    },
    {
      name: "Turbo Volcano",
      author: "superKart",
      link: "https://horizonplanet.ct.ws/levels/turbo-volcano"
    },
    {
      name: "Snow Drift",
      author: "lbpMaster",
      link: "https://horizonplanet.ct.ws/levels/snow-drift"
    }
  ],
  Account: [
    {
      name: "Username",
      value: "rmcvxzz"
    },
    {
      name: "Email",
      value: "rmcvxzz@horizonplanet.ct.ws"
    },
    {
      name: "Logout",
      action: () => alert("Logged out (stubbed)")
    }
  ]
};

function loadItems(category) {
  itemsContainer.innerHTML = '';

  if (category === "Levels") {
    data.Levels.forEach(level => {
      const div = document.createElement('div');
      div.className = 'item';
      div.innerHTML = `<strong>${level.name}</strong><br><small>by ${level.author}</small>`;
      div.onclick = () => {
        window.location.href = level.link;
      };
      itemsContainer.appendChild(div);
    });
  } else if (category === "Account") {
    data.Account.forEach(info => {
      const div = document.createElement('div');
      div.className = 'item';
      if (info.link) {
        div.innerHTML = `<strong>${info.name}:</strong> ${info.value}`;
        div.onclick = () => window.location.href = info.link;
      } else if (info.action) {
        div.innerHTML = `<strong>${info.name}</strong>`;
        div.onclick = info.action;
      } else {
        div.innerHTML = `<strong>${info.name}:</strong> ${info.value}`;
      }
      itemsContainer.appendChild(div);
    });
  }
}

categories.forEach(el => {
  el.addEventListener('click', () => {
    categories.forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');
    loadItems(el.dataset.category);
  });
});

loadItems("Levels");