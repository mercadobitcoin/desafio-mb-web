

export class UsersService {
  constructor(httpAdapter) {
    this.httpAdapter = httpAdapter
  }

  async getAllUsers(input) {
    const profileId = input.profileId
    const url = profileId
      ? `${process.env.VUE_APP_API_URL}/profile/api/v1/User?filterType=${input.filterType}&filterValue=${input.filterValue}&profileId=${profileId}`
      : `${process.env.VUE_APP_API_URL}/profile/api/v1/User?filterType=${input.filterType}&filterValue=${input.filterValue}`

    const res = await this.httpAdapter.get({ url })
    return res.data
  }
}
