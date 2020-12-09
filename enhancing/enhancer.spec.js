const enhancer = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
	describe('repair()', () => {
		test('repair() returns new object', () => {
			const item = {
				name: 'foo',
				enhancement: 15,
				durability: 50,
			};
			const result = enhancer.repair(item);

			expect(result).not.toBe(item);
		});

		test('repair() returns new item with 100 dur', () => {
			const item = {
				name: 'foo',
				enhancement: 15,
				durability: 50,
			};
			const result = enhancer.repair(item);

			expect(result.durability).toBe(100);
		});

		test('repair() will only change durability stat', () => {
			const item = {
				name: 'foo',
				enhancement: 15,
				durability: 50,
			};
			const result = enhancer.repair(item);

			expect(result.name).toBe('foo');
			expect(result.enhancement).toBe(15);
		});
	});
});
