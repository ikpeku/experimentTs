
import axios from "axios"

export interface ReminderProp {
    id: number
    title: string
}

export class Reminder {
    http = axios.create({baseURL: "https://jsonplaceholder.typicode.com/"})

    async getData(){
        const response = await this.http.get<ReminderProp[]>("/todos")
        return response.data
    }

    async addData(title: string){
        const response = await this.http.post<ReminderProp[]>("/todos", {title})
        return response.data
    }

    async searchData(title: string){
        const response = await this.http.get<ReminderProp[]>("/todos/?"+title)
        return response.data
    }

    async deleteData(id: number){
        const response = await this.http.delete("/todos/" + id)
        return response.data
    }


}

