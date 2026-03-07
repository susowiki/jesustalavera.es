import { createClient } from 'contentful'

export default defineEventHandler(async () => {
    const config = useRuntimeConfig()

    const client = createClient({
        space: config.contentfulSpaceId,
        accessToken: config.contentfulAccessToken,
    })

    try {
        const entries = await client.getEntries({
            content_type: '1kUEViTN4EmGiEaaeC6ouY',
            limit: 1,
            include: 2,
        })

        const author = entries.items[0]

        if (!author) {
            return {
                name: 'Jesús Talavera',
                bio: '',
                imageUrl: '',
                twitter: '',
                linkedin: '',
            }
        }

        const fields = author.fields as Record<string, any>
        const profilePhoto = fields.profilePhoto as any

        let imageUrl = ''
        if (profilePhoto?.fields?.file) {
            const url = (profilePhoto.fields.file as any).url as string
            imageUrl = url.startsWith('//') ? `https:${url}` : url
        }

        return {
            name: (fields.name as string) || 'Jesús Talavera',
            bio: (fields.biography as string) || '',
            imageUrl,
            twitter: (fields.twitterProfile as string) || '',
            linkedin: (fields.linkedinProfile as string) || '',
        }
    } catch (error) {
        console.error('Failed to fetch author from Contentful:', error)
        return {
            name: 'Jesús Talavera',
            bio: '',
            imageUrl: '',
            twitter: '',
            linkedin: '',
        }
    }
})
