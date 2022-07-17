import { get } from '../../utils'

interface IMeeting {
  id: number
}

interface IMeetingList {
  list: []
}

export const getTemplate = (data?: IMeeting) => {
  return get<IMeetingList>('/project/template', data)
}
