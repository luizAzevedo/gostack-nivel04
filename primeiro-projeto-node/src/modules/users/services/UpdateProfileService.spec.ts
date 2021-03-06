import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfileService: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfileService = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('shoud be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Luiz Fernando',
      email: 'lfaazevedo@hotmail.com',
      password: '123456',
    });

    const updatedUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'Luiz Azevedo',
      email: 'lfaazevedo@gmail.com',
    });

    expect(updatedUser.name).toBe('Luiz Azevedo');
  });

  it('shoud not be able to update the profile from non-existing user', async () => {
    await expect(
      updateProfileService.execute({
        user_id: 'non-existing-user-id',
        name: 'Luiz Fernando',
        email: 'lfaazevedo@hotmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('shoud not be able to change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'Luiz Fernando',
      email: 'lfaazevedo@hotmail.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'teste',
      email: 'teste@hotmail.com',
      password: '123456',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'Luiz Fernando',
        email: 'lfaazevedo@hotmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('shoud be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Luiz Fernando',
      email: 'lfaazevedo@hotmail.com',
      password: '123456',
    });

    const updatedUser = await updateProfileService.execute({
      user_id: user.id,
      name: 'Luiz Azevedo',
      email: 'lfaazevedo@gmail.com',
      old_password: '123456',
      password: '561082',
    });

    expect(updatedUser.password).toBe('561082');
  });

  it('shoud not be able to update the password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Luiz Fernando',
      email: 'lfaazevedo@hotmail.com',
      password: '123456',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'Luiz Azevedo',
        email: 'lfaazevedo@gmail.com',
        password: '561082',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('shoud not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Luiz Fernando',
      email: 'lfaazevedo@hotmail.com',
      password: '123456',
    });

    await expect(
      updateProfileService.execute({
        user_id: user.id,
        name: 'Luiz Azevedo',
        email: 'lfaazevedo@gmail.com',
        old_password: 'wrong-old-password',
        password: '561082',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
