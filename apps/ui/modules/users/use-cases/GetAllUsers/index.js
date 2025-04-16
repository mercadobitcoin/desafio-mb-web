import { UsersServiceMock } from '../../services/UsersServiceMock';
import { UsersService } from '../../services/UsersService';
import { GetAllUsersUseCase } from './GetAllUsersUseCase';
import Helper from '../../../../core/helpers/Helper';
import { HttpAdapter } from '../../../../core/adapter/HttpAdapter';

const MOCK = Helper.isTestMode()
const httpAdapter = new HttpAdapter();


const usersService = MOCK
  ? new UsersServiceMock()
  : new UsersService(httpAdapter);

const getAllUsersUseCase = new GetAllUsersUseCase(usersService);

export default getAllUsersUseCase;
