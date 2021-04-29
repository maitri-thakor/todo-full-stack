import { getEvent } from './eventHelper'
import { SET_WAITING, CLEAR_WAITING } from '../actions/waiting'
import { dispatch, getState } from '../store'
// NOTE! Not written for eventHelper - must edit

jest.mock('../store')

afterEach(() => {
  return jest.resetAllMocks()
})

// describe('getGarden', () => {
//   describe('-> GET /gardens/:id api call success', () => {
//     it('dispatches with the correct garden action', () => {
//       getState.mockImplementation(() => ({ user: { gardenId: 2 } }))
//       function consume (path) {
//         expect(path).toMatch('2')
//         return Promise.resolve({
//           body: {
//             name: 'test garden',
//             description: 'a rad test garden',
//             url: 'cooltestgarden.com',
//             events: [],
//             address: 'cool place, nz',
//             lat: 123,
//             lon: -123,
//             fake: 'asdf'
//           }
//         })
//       }

//       return getGarden(consume)
//         .then((garden) => {
//           expect(dispatch).toHaveBeenCalledWith({ type: SET_WAITING })
//           expect(dispatch).toHaveBeenCalledWith({
//             type: SET_GARDEN,
//             garden: {
//               name: 'test garden',
//               description: 'a rad test garden',
//               url: 'cooltestgarden.com',
//               events: [],
//               address: 'cool place, nz',
//               lat: 123,
//               lon: -123
//             }
//           })
//           return null
//         })
//     })
//   })

//   describe('-> GET /gardens/:id api call rejection', () => {
//     it('dispatches error correctly', () => {
//       getState.mockImplementation(() => ({ user: { gardenId: null } }))
//       function consume () {
//         return Promise.reject(new Error('mock error'))
//       }
//       return getGarden(consume)
//         .then(() => {
//           expect(dispatch.mock.calls[1][0].errorMessage).toBe('mock error')
//           return null
//         })
//     })
//   })
// })
