
function downloadIcsFile(event) {
    
    const formatIcsDate = (isoString) => {
        return isoString.replace(/-/g, '').replace(/:/g, '');
    };

    const timeZone = 'Australia/Sydney';

    const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//CPC Fete//Event Calendar//EN',
        'BEGIN:VTIMEZONE',
        `TZID:${timeZone}`,
        'BEGIN:STANDARD',
        'DTSTART:19700405T030000',
        'RRULE:FREQ=YEARLY;BYMONTH=4;BYDAY=1SU',
        'TZOFFSETFROM:+1100',
        'TZOFFSETTO:+1000',
        'TZNAME:AEST',
        'END:STANDARD',
        'BEGIN:DAYLIGHT',
        'DTSTART:19701025T020000',
        'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU',
        'TZOFFSETFROM:+1000',
        'TZOFFSETTO:+1100',
        'TZNAME:AEDT',
        'END:DAYLIGHT',
        'END:VTIMEZONE',
        'BEGIN:VEVENT',
        `UID:${new Date().getTime()}@cpcfete.com`,
        `DTSTAMP:${formatIcsDate(new Date().toISOString().substring(0, 19))}Z`, // Timestamp can be UTC
        // The event times now reference the Sydney time zone we defined above.
        `DTSTART;TZID=${timeZone}:${formatIcsDate(event.startTime)}`,
        `DTEND;TZID=${timeZone}:${formatIcsDate(event.endTime)}`,
        `SUMMARY:${event.title} - CPC Fete 2025`,
        `DESCRIPTION:${event.description}`,
        `LOCATION:CPC Fete - ${event.location} | 388-394 Crown St, Surry Hills`,
        'END:VEVENT',
        'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${event.title.replace(/ /g, '_')}.ics`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}