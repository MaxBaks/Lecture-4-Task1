import Character from './domain';

const getHealthStatus = (newChar) => {
  if (newChar.health > 50) {
    return 'healthy';
  }
  if (newChar.health >= 15 && newChar.health <= 50) {
    return 'wounded';
  }

  return 'critical';
};

export default getHealthStatus;
