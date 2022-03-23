import { useCases } from './use-cases.mocks';

it('should provide a complete mock', async () => {
  for (const useCase of useCases) {
    for (const property in useCase) {
      expect(useCase[property]).toBeTruthy();
    }
    const response = await fetch(useCase.image);
    expect(response.ok).toBeTruthy();
  }
});
