import { expect } from 'chai';
import { renderComponent } from 'helpers/TestHelper';
import { Repos } from './index';

/** Mock App. State */
const state: object = {
  counter: { count: 1 },
};

describe('<Repos />', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(Repos, state);
  });

  it('Renders header', () => {
    expect(component.find('h4').text()).to.eql('Repos Example');
  });

});
