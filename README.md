# clickable-tr-jquery

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="jquery-clickable-tr.js"></script>
	```
	
3. Html structure

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

4. Call the plugin:
  
  **default**
  ```javascript
  $(document).ready(function() {
    $('.clickable-table').clickableTable();
  });
  ```
  
  **with callback**
  ```javascript
  $(document).ready(function() {
    $('.clickable-table').clickableTable({
      eventName : callback
    });
  });

  function callback(e) {
    console.log(e);
  }

  function testEvent(e) {
    console.log(e);
  }
  ```
5. How to exclude nested elements from click event?
  * ``<a></a>`` and ``<button></button>`` tags are excluded by default
  * add ``disable-row-click`` to ``<td class="disable-row-click"></td>`` exclude it
