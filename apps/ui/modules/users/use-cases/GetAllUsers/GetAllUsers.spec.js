import { vi } from 'vitest';

import { UsersServiceMock } from '../../services/UsersServiceMock';
import { GetAllUsersUseCase } from './GetAllUsersUseCase';
import useCaseInstance from '.';
import { ErrorCodeEnum } from '@/core/enums/ErrorCodeEnum';
import Helper from '../../../../core/helpers/Helper';

describe('UseCase: Users/GetAllUsers', () => {
  let useCase;
  let service;

  beforeAll(() => {
    // import.meta.env.IS_MOCK_ACTIVE = 'true';
    service = new UsersServiceMock();
    useCase = useCaseInstance;
  });

  test('should get users using CPF with success', async () => {
    const res = await useCase.execute({
      type: 'CPF',
      value: '972.282.504-00'
    });

    console.log({ res, isMock: Helper.isTestMode() })
    expect(res.isRight()).toBe(true);

    const successValue = res.value.getValue();

    expect(successValue).toBeDefined();
  });



  test('should return Unexpected Error', async () => {

    const spy = vi.spyOn(service, 'getAllUsers');
    spy.mockImplementationOnce(() => Promise.reject(new Error('Unexpexted error')));

    const useCase = new GetAllUsersUseCase(service);

    const res = await useCase.execute({
      type: 'CPF',
      value: '972.282.504-00'
    });

    expect(res.isRight()).toBe(false);

    const errorValue = res.value.errorValue();

    expect(errorValue.code).toBe(ErrorCodeEnum.UnexpectedError);
  });

  test('should return Bad Request Error', async () => {


    const spy = vi.spyOn(service, 'getAllUsers');
    spy.mockImplementationOnce(() => Promise.reject(new Error('Bad Request')));

    const useCase = new GetAllUsersUseCase(service);

    const res = await useCase.execute({
      type: 'CPF',
      value: '972.282.504-00'
    });

    expect(res.isRight()).toBe(false);

    const errorValue = res.value.errorValue();

    expect(errorValue.code).toBe(ErrorCodeEnum.BadRequest);
  });

  test('should return Not Found Error', async () => {

    const spy = vi.spyOn(service, 'getAllUsers');
    spy.mockImplementationOnce(() => Promise.reject(new Error('404 Not Found')));

    const useCase = new GetAllUsersUseCase(service);

    const res = await useCase.execute({
      type: 'CPF',
      value: '972.282.504-00'
    });

    expect(res.isRight()).toBe(false);

    const errorValue = res.value.errorValue();

    expect(errorValue.code).toBe(ErrorCodeEnum.NotFound);
  });
});
