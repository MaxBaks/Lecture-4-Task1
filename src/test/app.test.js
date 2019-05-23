import getHealthStatus from '../js/app';
import Character from '../js/domain';

test('character should be healthy', () => {
  const newHero = new Character('Маг', 90);

  const result = getHealthStatus(newHero);
  const expected = 'healthy';

  expect(result).toBe(expected);
});

test('character should be wounded', () => {
  const newHero = new Character('Мечник', 45);

  const result = getHealthStatus(newHero);
  const expected = 'wounded';

  expect(result).toBe(expected);
});

test('character should be critical', () => {
  const newHero = new Character('Лучник', 10);

  const result = getHealthStatus(newHero);
  const expected = 'critical';

  expect(result).toBe(expected);
});
