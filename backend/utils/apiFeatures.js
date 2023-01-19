class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }


search() {
    const keyword = this.queryStr.keyword ? {
        name: {
            $regex: this.queryStr.keyword,
            $options: 'i'
        }
    } : {}
    this.query = this.query.find({ ...keyowrd });
    return this;
}
    filter() {

    }

}

module.exports =APIFeatures;