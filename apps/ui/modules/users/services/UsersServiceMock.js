

export class UsersServiceMock {
  async getAllUsers(_input) {
    const returnBody = [
      {
        id: '1',
        fullName: 'Nome Sobrenome 1',
        re: '628106',
        assignedProfile: false,
        profileId: 'abc-1',
        cpf: '97228250400'
      },
      {
        id: '2',
        fullName: 'Nome Sobrenome 2',
        re: '190446',
        assignedProfile: false,
        profileId: 'abc-2',
        cpf: '88269539420'
      },
      {
        id: '3',
        fullName: 'Nome Sobrenome 3',
        re: '542998',
        assignedProfile: false,
        profileId: 'abc-3',
        cpf: '50731138727'
      },
      {
        id: '4',
        fullName: 'Nome Sobrenome 4',
        re: '654062',
        assignedProfile: false,
        profileId: 'abc-4',
        cpf: '95966361862'
      },
      {
        id: '5',
        fullName: 'Nome Sobrenome 5',
        re: '589089',
        assignedProfile: true,
        profileId: 'abc-5',
        cpf: '53288784973'
      },
      {
        id: '6',
        fullName: 'Nome Sobrenome 6',
        re: '242334',
        assignedProfile: true,
        profileId: 'abc-6',
        cpf: '60973188196'
      },
      {
        id: '7',
        fullName: 'Nome Sobrenome 7',
        re: '731468',
        assignedProfile: true,
        profileId: 'abc-7',
        cpf: '48779095019'
      },
      {
        id: '8',
        fullName: 'Nome Sobrenome 8',
        re: '278695',
        assignedProfile: true,
        profileId: 'abc-8',
        cpf: '20728402558'
      },
      {
        id: '9',
        fullName: 'Nome Sobrenome 9',
        re: '66513',
        assignedProfile: true,
        profileId: 'abc-9',
        cpf: '31457290960'
      },
      {
        id: '10',
        fullName: 'Nome Sobrenome 10',
        re: '594953',
        assignedProfile: false,
        profileId: 'abc-10',
        cpf: '38013708386'
      },
      {
        id: '11',
        fullName: 'Nome Sobrenome 11',
        re: '716432',
        assignedProfile: false,
        profileId: 'abc-11',
        cpf: '59683844868'
      },
      {
        id: '12',
        fullName: 'Nome Sobrenome 12',
        re: '310388',
        assignedProfile: false,
        profileId: 'abc-12',
        cpf: '77566389970'
      },
      {
        id: '13',
        fullName: 'Nome Sobrenome 13',
        re: '637559',
        assignedProfile: false,
        profileId: 'abc-13',
        cpf: '33299808511'
      },
      {
        id: '14',
        fullName: 'Nome Sobrenome 14',
        re: '478007',
        assignedProfile: true,
        profileId: 'abc-14',
        cpf: '69689927419'
      },
      {
        id: '15',
        fullName: 'Nome Sobrenome 15',
        re: '303250',
        assignedProfile: true,
        profileId: 'abc-15',
        cpf: '67111236898'
      },
      {
        id: '16',
        fullName: 'Nome Sobrenome 16',
        re: '983832',
        assignedProfile: true,
        profileId: 'abc-16',
        cpf: '44229749524'
      },
      {
        id: '17',
        fullName: 'Nome Sobrenome 17',
        re: '980646',
        assignedProfile: false,
        profileId: 'abc-17',
        cpf: '28913593585'
      },
      {
        id: '18',
        fullName: 'Nome Sobrenome 18',
        re: '137427',
        assignedProfile: true,
        profileId: 'abc-18',
        cpf: '99658018263'
      },
      {
        id: '19',
        fullName: 'Nome Sobrenome 19',
        re: '579809',
        assignedProfile: false,
        profileId: 'abc-19',
        cpf: '47366825907'
      },
      {
        id: '20',
        fullName: 'Nome Sobrenome 20',
        re: '918294',
        assignedProfile: true,
        profileId: 'abc-20',
        cpf: '84681644247'
      }
    ]

    return await new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          let response
          if (_input.filterType === 'CPF') {
            response = returnBody.filter(i => {
              return i.cpf.includes(_input.filterValue)
            })

            return resolve(response)
          }

          response = returnBody.filter(i => i.re.includes(_input.filterValue))
          return resolve(response)
        }, 1000)
      } catch (err) {
        return reject(err)
      }
    })
  }
}
