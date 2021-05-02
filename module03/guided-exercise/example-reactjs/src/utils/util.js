const Util = {
    getNewTimeStamp(date) {
        return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'long' }).format(date);
    }
}

export default Util.getNewTimeStamp;