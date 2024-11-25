document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const userList = document.getElementById('user-list');
        
        data.forEach(user => {
          const userCard = document.createElement('div');
          userCard.classList.add('user-card');
          
          userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Endereço: ${user.address.street}, ${user.address.city}</p>
          `;
          
          userList.appendChild(userCard);
        });
      })
      .catch(error => console.error('Erro ao carregar os dados', error));
  });
  