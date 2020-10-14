export type HeaderIconsT = 'search' | 'notification' | 'eye' | 'profile' | 'sub-menu'

export type NavigationIconsT = 'profile' | 'medical' | 'messages' | 'tests' | 'help'

export interface AppointmentsArrayI {
    appointments: [] | never[],
    loading: boolean | null,
    error: string | null,
    length?: number | undefined,
}

export interface AppointmentPropsI {
    name: string,
    photo: any,
    type: string,
    date: string,
    location: string
}