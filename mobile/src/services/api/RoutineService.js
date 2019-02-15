import RestClient from './RestClient';
import Moment from 'moment'
import {
    RECURRENCES,
    RECURRENCES_DELETE,
    RECURRENCES_UPDATE,
    RECURRENCES_UPDATE_CAR,
    RECURRENCES_UPDATE_STATUS, SCHEDULE_URL
} from "../../../redux/URLs";



class RoutineService {

    constructor() {
        this.client = new RestClient();
    }

    async fetch() {
        let request =  await this.client.get(RECURRENCES);
        console.log(request)
        return request.data.data
    }

    async weekly() {
        let request =  await this.client.get(SCHEDULE_URL);
        return request.data.data;
    }

    async changeIntentionStatus(intention_id, status) {
        return await this.client.post(RECURRENCES_UPDATE_STATUS(intention_id), {status})
    }

    /*
      "schedule" "Y-m-d H:i"1
      "mode" 0, 1
      "car_id"
      "spaces"
      "days" array 0..6 (0 domingo)
      "start_address_id"
      "end_address_id"
    */
    async create(data) {
        return await this.client.post(RECURRENCES, toRoutine(data))
    }

    async update(data) {
        return await this.client.post(RECURRENCES_UPDATE(data.id), toRoutine(data))
    }

    async updateCar(data) {
        return await this.client.post(RECURRENCES_UPDATE_CAR(data.id), data)
    }

    async delete(routineId) {
        return await this.client.post(RECURRENCES_DELETE(routineId));
    }

}

const toRoutineDays = (item) => {
    let result = [];
    if (item.monday) result.push(1)
    if (item.tuesday) result.push(2)
    if (item.wednesday) result.push(3)
    if (item.thursday) result.push(4)
    if (item.friday) result.push(5)
    if (item.saturday) result.push(6)
    if (item.sunday) result.push(0)
    return result.join(',')
}

const toRoutine = (data) => {
    let json = {
        id: data.id,
        schedule: Moment(data.time).format('YYYY-MM-DD HH:mm:ss'),
        type: data.mode,
        start_name: data.startAddressName,
        start_address: data.startAddress.address,
        end_name: data.endAddressName,
        end_address: data.endAddress.address,
        car_plate: data.plate,
        car_label: data.label,
        car_color: data.color,
        update_recurrence:true,
        end_schedule: Moment(data.time).add(data.tolerance, 'm').format('YYYY-MM-DD HH:mm:ss'),
        end_time: Moment(data.time).add(data.tolerance, 'm').format('HH:mm'),
        start_address_id: data.startAddress.id,
        end_address_id: data.endAddress.id,
        days: toRoutineDays(data)
    }
    return json
}
export default new RoutineService()
