let isLoading = false;

async function loadUsers() {
    if (isLoading) return;

    const userCount = document.getElementById('userCount').value;
    const loadingDiv = document.getElementById('loading');
    const errorDiv = document.getElementById('error');
    const userListDiv = document.getElementById('userList');
    const loadBtn = document.getElementById('loadBtn');

    if (userCount < 1 || userCount > 50) {
        showError('Por favor ingresa un número entre 1 y 50');
        return;
    }

    errorDiv.style.display = 'none';
    userListDiv.innerHTML = '';
    loadingDiv.style.display = 'block';
    loadBtn.disabled = true;
    isLoading = true;

    try {
        const response = await fetch(`/api/users?count=${userCount}`);
        const result = await response.json();

        if (!result.success) {
            throw new Error(result.error || 'Error al cargar datos');
        }

        displayUsers(result.data);
    } catch (error) {
        showError('Error al cargar los usuarios: ' + error.message);
    } finally {
        loadingDiv.style.display = 'none';
        loadBtn.disabled = false;
        isLoading = false;
    }
}

function displayUsers(users) {
    const userListDiv = document.getElementById('userList');
    userListDiv.innerHTML = '';

    users.forEach((user, index) => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.style.animationDelay = `${index * 0.05}s`;
        
        userCard.innerHTML = `
            <div class="user-header">
                <img src="${user.picture}" alt="${user.name}" class="user-avatar">
                <div class="user-name">${user.name}</div>
            </div>
            <div class="user-info">
                <div class="user-info-item">${user.email}</div>
                <div class="user-info-item">${user.city}, ${user.country}</div>
                <div class="user-info-item">${user.phone}</div>
            </div>
        `;
        
        userListDiv.appendChild(userCard);
    });
}

function showError(message) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    
    setTimeout(() => {
        errorDiv.style.display = 'none';
    }, 5000);
}

window.addEventListener('DOMContentLoaded', () => {
    loadUsers();
});
