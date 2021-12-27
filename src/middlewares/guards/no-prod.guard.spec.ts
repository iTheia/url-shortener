import { NoProdGuard } from './no-prod.guard';

describe('NoProdGuard', () => {
  it('should be defined', () => {
    expect(new NoProdGuard()).toBeDefined();
  });
});
