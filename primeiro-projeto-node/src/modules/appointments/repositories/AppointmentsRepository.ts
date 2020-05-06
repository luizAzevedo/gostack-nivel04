import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../infra/typeorm/entities/Appointment';

/**
 * É responsavel de como o dado é trabalhado na aplicação.
 *
 * Quando usa typeorm não precisa do contructor, all e create
 *
 * Quando transforma a função em async/await, transforma em uma Promise
 *
 */
@EntityRepository(Appointment)
class AppointmentRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentRepository;
