/* eslint-disable @typescript-eslint/no-unused-expressions */
class Search {
    public search
    constructor(search: string){
        this.search = search
    }

    searchInput(){
        let answer = fetch(this.search);
        return answer
    }
}

export default Search;