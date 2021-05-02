const Util = {
    formatDate(date) {
        return new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date);
    },

    getNewTimestamp() {
        return Util.formatDate(new Date());
    }
}

export default Util.getNewTimestamp;