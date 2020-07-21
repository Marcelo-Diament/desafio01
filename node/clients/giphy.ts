import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

export default class GiphyClient  extends ExternalClient {
  
    constructor(context: IOContext, options?: InstanceOptions) {
    super('https://api.giphy.com/v1/gifs/', context, options)
  }

  public translate (term: string) {
    
    return this.http.get(`translate`, {
        params:{
            s:term,
            api_key: "dp2scGnUcDee5yLRI1qJMTRTAAJey9Tl"
        }
    })
  }
}