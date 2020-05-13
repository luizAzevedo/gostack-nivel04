import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUserService;
let createUser: CreateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
  });

  it('shoud be able to authenticate', async () => {
    const user = await createUser.execute({
      name: 'Luiz Fernando',
      email: 'lfaazevedo@hotmail.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'lfaazevedo@hotmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('shoud not be able to authenticate with non existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'lfaazevedo@hotmail.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('shoud not be able to authenticate with wrong password', async () => {
    await createUser.execute({
      name: 'Luiz Fernando',
      email: 'lfaazevedo@hotmail.com',
      password: '123456',
    });

    await expect(
      authenticateUser.execute({
        email: 'lfaazevedo@hotmail.com',
        password: 'error',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});