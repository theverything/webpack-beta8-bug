import mymodule from './mymodule';

const foo = 'foo';

const dropdownClassName = mymodule({
  [foo]: 'foo',
  [`${foo}_bar`]: 'foo_bar',
});
