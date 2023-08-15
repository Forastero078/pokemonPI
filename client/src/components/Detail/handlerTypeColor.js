import styles from './Detail.module.css'


export default function handlerTypeColor(type) {
    switch (type.name) {
        case 'grass':
            return styles.grass

        case 'fire':
            return styles.fire

        case 'water':
            return styles.water

        case 'bug':
            return styles.bug

        case 'fighting':
            return styles.fighting

        case 'flying':
            return styles.flying

        case 'ground':
            return styles.ground

        case 'poison':
            return styles.poison

        case 'rock':
            return styles.rock

        case 'ghost':
            return styles.ghost

        case 'steel':
            return styles.steel

        case 'electric':
            return styles.electric

        case 'psychic':
            return styles.psychic

        case 'ice':
            return styles.slice

        case 'dragon':
            return styles.dragon

        case 'dark':
            return styles.dark

        case 'fairy':
            return styles.fairy

        case 'unknown':
            return styles.unknown

        case 'shadow':
            return styles.shadow

        case 'normal':
            return styles.normal

        default:
            return styles.none
    }
}
