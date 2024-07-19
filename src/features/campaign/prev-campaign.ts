export type PrevCampaign = { 
  name: string
  description?: string
  status: 'draft' | 'scheduled' | 'sent'
  createdOn: Date
  sentOn?: Date
  scheduledOn?: Date
  metric?: 'delivered' | 'opened' | 'clicked' | 'bounced' | 'unsubscribed'
}