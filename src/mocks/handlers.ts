import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/campaigns/1', async () => {
    
    return HttpResponse.json({
      id: 1,
      name: 'Campaign #1',
      status: 'sent',
      createdOn: new Date(),
      description: 'Campaign #1 description',
      sentOn: new Date(),
      metric: 'delivered',
    })
  }),
]