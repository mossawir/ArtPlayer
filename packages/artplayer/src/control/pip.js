import { append, tooltip } from '../utils';

export default function pip(option) {
    return art => ({
        ...option,
        tooltip: art.i18n.get('Mini player'),
        mounted: $control => {
            const {
                events: { proxy },
                icons,
                i18n,
                player,
            } = art;

            append($control, icons.pip);

            proxy($control, 'click', () => {
                player.pipToggle = true;
            });

            art.on('pipChange', value => {
                tooltip($control, i18n.get(value ? 'Exit mini player' : 'Mini player'));
            });
        },
    });
}
