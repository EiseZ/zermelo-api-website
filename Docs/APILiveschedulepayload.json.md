# Liveschedule payload
* response: response data
    * status: status code default https status
    * message: n/a
    * details: n/a
    * eventId: n/a
    * startRow: n/a
    * endRow: n/a
    * totalRows: n/a
    * data: payload array
        * dataitem: see Data item

## Data item
* week: year + week i.e. 202204 = forth week of 2022
* user: leerlingnummer
* status: n/a
* replacements: n/a
* appointments: array of containing appointment

## appointment
* status: n/a
* actions: list of possible appointments
* start: start time in unix
* end: end time in unix
* cancelled: if hour is cancelled
* appointmetType: Usually "lesson"
* online: n/a
* startTimeSlotName: possibilities "u1" to "u7"
* endTimeSlotName: possibilities "u1" to "u7"
* subjects: array of possibility \["fce"\] to be expanded
* groups: array of possibility \["4h.fce2"\] to be expanded
* locations: array of possibility \["001"\] to be expanded
* teachers: array of possibility \["bal"\] to be expanded
* onlineTeachers: n/a
* capacity: n/a
* expectedStudentCount: n/a
* expectedStudentCountOnline: n/a
* changeDescription: n/a
* schedulerRemark: n/a
* content: n/a
* id: appointment id
* actions: array of possible actions

## actions
* appointment: object of type appointment
* status: status
* allowed: dictating if post request is allowed
* post: link to enroll in lesson "/api/v3/liveschedule/enrollment?enroll=APPOINTMETID&unenroll=APPOINTMENTID"

# Liveschedule request source
Get "https://hml.zportal.nl/api/v3/liveschedule?student=LEERLINGNUMMER&week=WEEK&fields=appointmentInstance,start,end,startTimeSlotName,endTimeSlotName,subjects,groups,locations,teachers,cancelled,changeDescription,schedulerRemark,content,appointmentType"