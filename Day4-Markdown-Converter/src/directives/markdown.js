import showdown from 'showdown';
const converter = new showdown.Converter();

const rules = [
    [/#{6}\s?([^\n]+)\n/g, '<h6>$1</h6>'],
    [/#{5}\s?([^\n]+)\n/g, '<h5>$1</h5>'],
    [/#{4}\s?([^\n]+)\n/g, '<h4>$1</h4>'],
    [/#{3}\s?([^\n]+)\n/g, '<h3>$1</h3>'],
    [/#{2}\s?([^\n]+)\n/g, '<h2>$1</h2>'],
    [/#{1}\s?([^\n]+)\n/g, '<h1>$1</h1>'],
    [/\*\*([^*]+)\*\*/g, '<b>$1</b>'],
    [/\*([^*]+)\*/g, '<i>$1</i>'],
    [/([^\n]+)\n/g, '<p>$1</p>']
]

export default {
    bind(el) {
        let markdown = el.textContent;
        // rules.forEach(([rule, template]) => {
        //     html = html.replace(rule, template);
        // })

        el.innerHTML = converter.makeHtml(markdown);
    }
}