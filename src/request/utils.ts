
export const sanityConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: 'prod',
    apiVersion: '2024-08-13',
    useCdn: false
}

export const getSanityUrl = (query: string) => {
    const { projectId, dataset, apiVersion, useCdn } = sanityConfig;
    const encodedQuery = encodeURI(query).replace(/%20/g, '+');
    return `https://${projectId}.${useCdn ? 'apicdn' : 'api'}.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodedQuery}`;
}

export const isPlaywright = !!process.env.IS_PLAYWRIGHT