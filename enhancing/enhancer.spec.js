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

		test('repair() returns new item with 100 DUR', () => {
			const item = {
				name: 'foo',
				enhancement: 15,
				durability: 50,
			};
			const result = enhancer.repair(item);

			expect(result.durability).toBe(100);
		});

		test('repair() will only change DUR stat', () => {
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

	describe('success()', () => {
		test('success() returns new object', () => {
			const item = {
				name: 'foo',
				enhancement: 15,
				durability: 50,
			};
			const result = enhancer.success(item);

			expect(result).not.toBe(item);
		});

		test('success() returns obj with ENH +1', () => {
			const item = {
				name: 'foo',
				enhancement: 15,
				durability: 50,
			};
			const result = enhancer.success(item);

			expect(result.enhancement).toBe(16);
		});

		test('success() ENH does not exceed 20', () => {
			const item = {
				name: 'foo',
				enhancement: 20,
				durability: 50,
			};
			const result = enhancer.success(item);

			expect(result.enhancement).toBe(20);
		});

		test('success() only modifies ENH stat', () => {
			const item = {
				name: 'foo',
				enhancement: 15,
				durability: 50,
			};
			const result = enhancer.success(item);

			expect(result.name).toBe('foo');
			expect(result.durability).toBe(50);
		});
	});

	describe('fail()', () => {
		test('fail() returns new object', () => {
			const item = {
				name: 'foo',
				enhancement: 15,
				durability: 50,
			};
			const result = enhancer.fail(item);

			expect(result).not.toBe(item);
		});

		test('fail() decreases DUR by 5 when ENH < 15', () => {
			const item = {
				name: 'foo',
				enhancement: 14,
				durability: 50,
			};
			const result = enhancer.fail(item);

			expect(result.durability).toBe(45);
		});

		test('fail() decreases DUR by 10 when ENH >= 15', () => {
			const item = {
				name: 'foo',
				enhancement: 15,
				durability: 50,
			};
			const result = enhancer.fail(item);

			expect(result.durability).toBe(40);
		});

		test('fail() decreases ENH -1 when ENH > 16', () => {
			const item = {
				name: 'foo',
				enhancement: 17,
				durability: 50,
			};
			const result = enhancer.fail(item);

			expect(result.enhancement).toBe(16);
		});
	});

	describe('get()', () => {
		test('get() returns new object', () => {
			const item = {
				name: 'Sword of Badasstitude',
				enhancement: 7,
				durability: 50,
			};
			const result = enhancer.get(item);

			expect(result).not.toBe(item);
		});

		test('get() correctly modifies obj name', () => {
			const item = {
				name: 'Sword of Badasstitude',
				enhancement: 7,
				durability: 50,
			};
			const result = enhancer.get(item);

			expect(result.name).toBe('[+7] Sword of Badasstitude');
		});

		test('get() only modifies name property', () => {
			const item = {
				name: 'Sword of Badasstitude',
				enhancement: 7,
				durability: 50,
			};
			const result = enhancer.get(item);

			expect(result.enhancement).toBe(7);
			expect(result.durability).toBe(50);
		});
	});
});
