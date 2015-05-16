# clickable-tr-jquery

`.js`

```javascript
  $(document).ready(function() {
    $('.clickable-table').clickableTable({
        eventC : Cplaceholder
    });
});

function eventA( e ) {
    console.log("Running eventA: ");
}

function anotherOne( e ) {
    console.log("I am another function");
}

function Cplaceholder( e ) {
    console.log("I am functionC");
}
```

`.html`

```html
  <table class="clickable-table">
    <thead>
      <tr>
        <th>Column A</th>
        <th>Column B</th>
        <th>Column C</th>
        <th>Column D</th>
        <th>Column E</th>
      </tr>
    </thead>
    <tbody>
      <tr data-href="http://google.de" data-event="eventA">
        <td>Data A</td>
        <td>Data B</td>
        <td>Data C</td>
        <td>Data D</td>
        <td><a href="http://www.deoldsax.de">DeOldSax</a></td>
      </tr>
      <tr data-event="eventC">
        <td>Data A</td>
        <td>Data B</td>
        <td>Data C</td>
        <td><a href="https://news.ycombinator.com/news">HN<a/></td>
        <td>Data E</t>d
      </tr>
      <tr data-href="http://www.web.de" data-event="eventA" data-remote="false">
        <td>Data A</td>
        <td>Data B</td>
        <td>Data C</td>
        <td>Data D</td>
        <td>Data E</td>
      </tr>
      <tr data-href="http://api.jquery.com/">
        <td>Data A</td>
        <td>Data B</td>
        <td>Data C</td>
        <td>Data D</td>
        <td>Data E</td>
      </tr>
    </tbody>
  </table>
```
