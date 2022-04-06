import fetch from 'cross-fetch';
import { useCases } from './use-cases.mocks';

it('should provide a complete mock', () => {
  Object.values(useCases).forEach((aCase) => {
    Object.values(aCase).forEach((value) => expect(value).toBeTruthy());
  });
});

it('verify all cases have valid images', async () => {
  const images = Object.values(useCases)
    .map((x) => x.image)
    .map((url) => fetch(url));

  const responses = await Promise.all(images);
  responses.forEach((response) => expect(response.ok).toBeTruthy());
});
