import moment from 'moment';

export function formatDate(dateString) {
    const parsed = moment(new Date(dateString));

    if(!parsed.isValid()) { //parse.isValid()==false
        //ако датата е невалидна, трябва да върнем сегашната дата и час
        return Date.now();
    }

    return parsed.format('DD/MM/YY HH:mm');
}

export function getCountdownParts(eventDate) {
    const duration = moment.duration(
        moment(new Date(eventDate)) //дата на събитието
        .diff( //разлика с
            new Date() //текуща дата
        )
    );
    //дата на събитието - текуща дата = разлика
    //разлика -> {дни, часове, минути, секунди}
    return {
        days: parseInt(duration.as('days')),
        hours: duration.get('hours'),
        minutes: duration.get('minutes'),
        seconds: duration.get('seconds')
    };
}