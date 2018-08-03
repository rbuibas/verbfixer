import { DaoModule } from './dao.module';

describe('DaoModule', () => {
  let daoModule: DaoModule;

  beforeEach(() => {
    daoModule = new DaoModule();
  });

  it('should create an instance', () => {
    expect(daoModule).toBeTruthy();
  });
});
