import { useState, useEffect, useCallback } from 'react'

export const useDate = (receivedDate: string) => {
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [shortDate, setShortDate] = useState('')

    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']

    useEffect(() => {
        const date = new Date(receivedDate)

        const weekDay = weekDays[date.getDay()]
        setDay(weekDay)

        const addZero = (num: number) => {
            if (num < 10) {
                return `0${num}`
            }
            return num
        }

        const day = addZero( date.getDate() )
        const mouth = addZero( date.getMonth() + 1 )
        const year = date.getFullYear().toString().slice(2)
        setShortDate(`${day}.${mouth}.${year}`)

        const hours = date.getHours()
        const minutes = date.getMinutes()

        setTime(`${hours}:${minutes}`)
    }, [])

    return [day, time, shortDate]
}