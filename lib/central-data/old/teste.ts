let setData, centralData, useListener, setReporter, initData;

export { setData, centralData, useListener, setReporter, initData };

/**
 * setData return Promise
 * type NotFunc<T> = Exclude<T, Function>
 *
 * central data return {string|boolean|[]any|}
 *
 */

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : 'object';

const setData1 = (value: { [key: string]: TypeName<any> }) => {
  return {
    ...centralData,
    ...value,
  };
};

setData1({
  teste1: () => {},
  teste2: '()=>{}',
  teste3: ['()=>{}', { teste4: () => {} }],
  teste4: { testeA: { testeb: () => {} } },
  teste5: null,
  teste6: undefined,
});
