import classnames from '../helpers/classnames';

describe('classes', () => {
  it('accept a className', () => {
    const result = classnames('a');
    expect(result).toEqual('a');
  });

  it('accept two classname', () => {
    const result = classnames('a', 'b');
    expect(result).toEqual('a b');
  });
});
