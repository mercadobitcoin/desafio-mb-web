
import { left, right } from '@/core/base/Either';
import AppError from '@/core/base/AppError';
import { HttpHelper } from '../../../../core/helpers/HttpHelper';
import Helper from '../../../../core/helpers/Helper';
import Result from '../../../../core/base/Result';


export class GetAllUsersUseCase {
  constructor(usersService) {
    this.usersService = usersService;
  }

  async execute(data) {
    /**
     * data: {
     * profileId?: string;
     * type?: RE | CPF;
     * value?: string;
     * }
     */
    const { value, type } = data

    const request = {
      filterType: type,
      filterValue: Helper.removeSpecialCharsFromString(value)
    };

    try {
      const response = await this.usersService.getAllUsers(request);
      return right(Result.ok(response));
    } catch (error) {


      if (HttpHelper.isBadRequestError(error)) {
        return left(new AppError.BadRequest(error));
      }

      if (HttpHelper.isNotFoundError(error)) {
        return left(new AppError.DataNotFound(error));
      }

      return left(new AppError.UnexpectedError(error));
    }
  }
}
