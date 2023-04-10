interface SearchAnswers {    
    "elapsedMilliseconds": number,
    "count": number,
    "countFacets": {
        "hasimage": number,
        "ondisplay": number
    },
    "artObjects": [
        {
            "links": {
                "self": string,
                "web": string
            },
            "id": string,
            "objectNumber": string,
            "title": string,
            "hasImage": boolean,
            "principalOrFirstMaker": string,
            "longTitle": string,
            "showImage": boolean,
            "permitDownload": boolean,
            "webImage": {
                "guid": string,
                "offsetPercentageX": number,
                "offsetPercentageY": number,
                "width": number,
                "height": number,
                "url": string
            },
            "headerImage": {
                "guid": string,
                "offsetPercentageX": number,
                "offsetPercentageY": number,
                "width": number,
                "height": number,
                "url": string
            },
            "productionPlaces": string[
            ]
        }
    ],
    "facets": [
        {
            "facets": [
                {
                    "key": string,
                    "value": number
                }
            ],
            "name": string,
            "otherTerms": number,
            "prettyName": number
        },
        {
            "facets": [
                {
                    "key": string,
                    "value": number
                }
            ],
            "name": string,
            "otherTerms": number,
            "prettyName": number
        },
        {
            "facets": [
                {
                    "key": string,
                    "value": number
                },
               
            ],
            "name": string,
            "otherTerms": number,
            "prettyName": number
        },
        {
            "facets": [
                {
                    "key": string,
                    "value": number
                }
            ],
            "name": string,
            "otherTerms": number,
            "prettyName": number
        },
        {
            "facets": [
                {
                    "key": string,
                    "value": number
                }
            ],
            "name": string,
            "otherTerms": number,
            "prettyName": number
        },
        {
            "facets": [
                {
                    "key": string,
                    "value": number
                }
            ],
            "name": string,
            "otherTerms": number,
            "prettyName": number
        },
        {
            "facets": [
                {
                    "key": string,
                    "value": number
                }
            ],
            "name": string,
            "otherTerms": number,
            "prettyName": number
        }
    ]
}

const fetcher = async (url:string, type:string) => { 
    const response = await fetch(url)
    if(type === "search"){
        const data: Promise<SearchAnswers> = await response.json()
        return data;
    } else if (type === "call"){
        const data: Promise<any> = await response.json()
        return data;
    } else {
        throw new Error("API Call Error: fetcher")
    }
}

export default fetcher;