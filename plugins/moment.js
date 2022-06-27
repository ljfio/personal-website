export default function ({ $moment }) {
    $moment.relativeTimeRounding(Math.floor);

    $moment.relativeTimeThreshold('s', 60);
    $moment.relativeTimeThreshold('m', 60);
    $moment.relativeTimeThreshold('h', 24);
    $moment.relativeTimeThreshold('d', 7);
    $moment.relativeTimeThreshold('w', 4);
    $moment.relativeTimeThreshold('M', 12);
}