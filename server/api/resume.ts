import { createClient } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Document } from '@contentful/rich-text-types'

function formatDate(dateString: string) {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date)
}

function formatPeriod(start?: string, end?: string) {
    if (!start) return ''
    try {
        const startStr = formatDate(start)
        const endStr = end ? formatDate(end) : 'Present'
        if (startStr === endStr) return `${startStr}`
        return `${startStr} — ${endStr}`
    } catch (e) {
        return start
    }
}

export default defineEventHandler(async () => {
    const config = useRuntimeConfig()

    const client = createClient({
        space: config.contentfulSpaceId,
        accessToken: config.contentfulAccessToken,
    })

    try {
        const entries = await client.getEntries({
            content_type: 'resume',
            limit: 1,
            include: 2, // Include linked items
        })

        const resume = entries.items[0]

        if (!resume) {
            return { experience: [], education: [], skills: [] }
        }

        const fields = resume.fields as Record<string, any>

        // Helper to map a resumeCard array from Contentful
        const mapCards = (cards: any[]) => {
            if (!cards || !Array.isArray(cards)) return []

            return cards.map((card) => {
                const itemFields = card.fields || {}

                let logoUrl = ''
                if (itemFields.logo && itemFields.logo.fields && itemFields.logo.fields.file) {
                    const url = itemFields.logo.fields.file.url
                    const baseUrl = url.startsWith('//') ? `https:${url}` : url
                    // Resize to 140x140 using Contentful Images API
                    logoUrl = `${baseUrl}?w=140&h=140&fit=fill`
                }

                return {
                    role: itemFields.position || itemFields.companyName || '',
                    company: itemFields.position ? itemFields.companyName : '',
                    period: formatPeriod(itemFields.startDate, itemFields.endDate),
                    description: itemFields.description
                        ? documentToHtmlString(itemFields.description as Document)
                        : '',
                    logo: logoUrl,
                    logoUrl: itemFields.logoUrl || '',
                }
            })
        }

        const assets = await client.getAssets({
            'fields.title[match]': 'Resume Jesus Talavera',
            limit: 1,
        })
        let resumeUrl = ''
        const firstAsset = assets.items[0]
        if (firstAsset) {
            const file = (firstAsset.fields as any)?.file
            if (file && file.url) {
                resumeUrl = file.url.startsWith('//') ? `https:${file.url}` : file.url
            }
        }

        return {
            title: (fields.title as string) || '',
            experience: mapCards(fields.experience),
            education: mapCards(fields.education),
            skills: (fields.skills as string[]) || [],
            updatedAt: (resume as any)?.sys?.updatedAt || '',
            resumeUrl,
        }
    } catch (error) {
        console.error('Failed to fetch resume from Contentful:', error)
        return { experience: [], education: [], skills: [] }
    }
})
