import { GramatikaModule } from './gramatika.module';

describe('GramatikaModule', () => {
  let gramatikaModule: GramatikaModule;

  beforeEach(() => {
    gramatikaModule = new GramatikaModule();
  });

  it('should create an instance', () => {
    expect(gramatikaModule).toBeTruthy();
  });
});
