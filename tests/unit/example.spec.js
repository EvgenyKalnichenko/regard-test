import { booleanToInt, copy } from '@/assets/js/utils';

describe('Unit test', () => {
  it(
    'booleanToInt - преобразовывает тип boolean в число',
    () => {
      const testBooleanToInt = (data) => {
        const result = booleanToInt(data);
        console.log('testBooleanToInt', JSON.stringify(result));
        return result;
      };
      expect(testBooleanToInt('qwerty'))
        .toBe('qwerty');
      expect(testBooleanToInt(1))
        .toBe(1);
      expect(testBooleanToInt(false))
        .toBe(0);
      expect(testBooleanToInt(true))
        .toBe(1);
      expect(testBooleanToInt([1, 'qwerty', false]))
        .toEqual([1, 'qwerty', 0]);
      expect(testBooleanToInt([1, 'qwerty', { a: true }]))
        .toEqual([1, 'qwerty', { a: 1 }]);
      expect(testBooleanToInt({
        a: { b: true },
        c: false,
        d: 'qwerty',
      }))
        .toEqual({
          a: { b: 1 },
          c: 0,
          d: 'qwerty',
        });
      expect(testBooleanToInt({
        date1: {
          date1_1: 1,
          date1_2: [
            {
              date2_1: false,
              date2_2: 'str1',
            },
            {
              date2_3: true,
              date2_4: 'str2',
            },
            {
              date2_5: false,
              date2_6: 'str1',
            },
          ],
          date1_3: false,
          date1_4: {
            date3_1: true,
            date3_2: false,
            date3_3: 'str1',
            date3_4: 123,
          },
          date1_5: 'true',
        },
      }))
        .toEqual({
          date1: {
            date1_1: 1,
            date1_2: [
              {
                date2_1: 0,
                date2_2: 'str1',
              },
              {
                date2_3: 1,
                date2_4: 'str2',
              },
              {
                date2_5: 0,
                date2_6: 'str1',
              },
            ],
            date1_3: 0,
            date1_4: {
              date3_1: 1,
              date3_2: 0,
              date3_3: 'str1',
              date3_4: 123,
            },
            date1_5: 'true',
          },
        });
    },
  );
  it(
    'copy - копирование объекта',
    () => {
      const testCopy = (obj, path) => {
        const result = copy(obj, path);
        console.log(result);
        return result;
      };

      const example = {
        b: {
          c: 3,
          d: [3, 4],
        },
        a: 12,
      };
      expect(testCopy(example, ['a.a', 'b.c', 'b.d.0', 'b.c.e']))
        .toEqual({
          b: {
            c: 3,
            d: [3],
          },
        });

      const a = {
        b: {
          c: [false, 34, { f: 321 }],
          d: [3, 4],
        },
        a: 12,
      };
      const b = {
        b: {
          c: 3,
          d: [3, 4],
        },
        a: 12,
      };
      const c = {
        b: {
          c: [1, 2, 3],
          d: [3, 4],
        },
        a: 12,
        v: false,
        g: {
          s: 123,
          f: 32,
          g: {
            a: 12,
            q: 'fsa',
          },
        },
      };
      const d = {
        a: [{ a: 'fsa' }, 2, false, [12, 4, { f: 132 }]],
        b: [1, 2, 3, 4, 5],
        c: ['asd', 'afd', 'qwerty'],
      };

      expect(testCopy(a, ['x', 'b.c.0', 'b.d.0']))
        .toEqual({
          b: {
            c: [false],
            d: [3],
          },
        });

      expect(testCopy(b, ['a.a', 'b.c', 'b.d.0', 'b.c.e']))
        .toEqual({
          b: {
            c: 3,
            d: [3],
          },
        });

      expect(testCopy(c, ['b.c', 'b.d.0', 'b.c.a', 'g.f', 'g.g.q']))
        .toEqual({
          b: {
            c: [1, 2, 3],
            d: [3],
          },
          g: {
            f: 32,
            g: { q: 'fsa' },
          },
        });

      expect(testCopy(d, ['f.s', 'a.0.a', 'a.0.3.f', 'c.2']))
        .toEqual({
          a: [{ a: 'fsa' }],
          c: [undefined, undefined, 'qwerty'],
        });
    },
  );
});
