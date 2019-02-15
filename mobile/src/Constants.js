import { Platform } from 'react-native';

export const IMAGES = {
   car : require('./../resources/img/car.png'),
}

export const FONTS = {
    primary: Platform.OS === 'ios' ? 'OFFICINASERIFSTD-BOOK' : 'officinaserifstd_book',
    secondary: Platform.OS === 'ios' ? 'OFFICINASERIFSTD-BOOK' : 'officinaserifstd_bold',
    alternate: ''
}

export const KEYS = {
    
    schedule: {
        title: 'Minha Rotina',
        msgEmptySchedule: 'Você ainda não possui uma rotina.',
        btnCreateRoutine: 'Criar Rotina',
        btnList: 'Ver lista de espera'
    }
}
