const Util = {
    getNewTimestamp(date) {
        return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'long' }).format(date);
    }
}
