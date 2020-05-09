import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('shoud be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute({
      name: 'Luiz Fernando',
      email: 'lfaazevedo@hotmail.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
    expect(user.name).toBe('Luiz Fernando');
  });

  it('shoud not be able to create a new user with same email from another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const userEmail = 'lfaazevedo@hotmail.com';

    await createUser.execute({
      name: 'Luiz Fernando',
      email: userEmail,
      password: '123456',
    });

    expect(
      createUser.execute({
        name: 'Luiz Fernando',
        email: userEmail,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
