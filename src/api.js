const fetch = require('node-fetch');

async function getRandomUsers(count = 10) {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.results.map(user => ({
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      country: user.location.country,
      city: user.location.city,
      picture: user.picture.medium,
      phone: user.phone
    }));
  } catch (error) {
    console.error('Error al obtener datos de la API:', error);
    throw error;
  }
}

module.exports = {
  getRandomUsers
};
