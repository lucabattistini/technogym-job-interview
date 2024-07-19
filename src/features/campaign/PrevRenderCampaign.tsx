import { useEffect, useState } from 'react'
import { PrevCampaign } from './prev-campaign'
import { createCampaignReportMessage } from './prev-create-campaign-report-message'
import { printReport } from './print-report'

export function RenderCampaign() {
  const [campaign, setCampaign] = useState<PrevCampaign>()

  useEffect(() => { 
    const fetchCampaign = async () => {
      const response = await fetch('/api/campaigns/1')
      const data = await response.json()

      setCampaign(data)
    }

    fetchCampaign()
  }, [])

  const onPrintReportClick = () => {
    if (!campaign) return

    const message = createCampaignReportMessage(campaign)

    if (message) {
      printReport(message)
    }
  }

  if (!campaign) return null

  return (
    <div>
      <h1>{campaign.name} ({campaign.status})</h1>
      <p>Created on {campaign.createdOn.toString()}</p>

      {campaign.description && <p>{campaign.description}</p>}

      {campaign.status === 'scheduled' && campaign.scheduledOn && <p>Scheduled on {campaign.scheduledOn.toString()}</p>}

      {campaign.status === 'sent' && campaign.sentOn && campaign.metric && <p>Sent on {campaign.sentOn.toString()} ({campaign.metric})</p>}

      <button onClick={onPrintReportClick}>Print report</button>
    </div>
  )
}