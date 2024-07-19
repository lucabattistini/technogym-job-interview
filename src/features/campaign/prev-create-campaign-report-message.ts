import { PrevCampaign } from "./prev-campaign"

export function createCampaignReportMessage(campaign: PrevCampaign) {
  if (campaign.status === 'draft') {
    return 'Cannot create report for draft campaign'
  }

  if (campaign.status === 'scheduled' && campaign.scheduledOn) {
    return `Campaign ${campaign.name} is scheduled for ${campaign.scheduledOn.toString()}`
  }

  if (campaign.status === 'sent' && campaign.sentOn && campaign.metric) {
    return `Campaign ${campaign.name} was sent on ${campaign.sentOn.toString()} and the metric is ${campaign.metric}`
  }
}