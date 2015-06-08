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
	
3. HTML structure

  ```html
  <table class="clickable-table">
    <thead>
      <tr>
        <th>Column A</th>
        <th>Column B</th>
      </tr>
    </thead>
    <tbody>
      <tr data-href="http://google.de" data-event="eventName">
        <td>Data A</td>
        <td><a href="http://www.deoldsax.de">DeOldSax</a></td>
      </tr>
      <tr data-event="testEvent">
        <td>Data C</td>
        <td><a href="https://github.com/DeOldSax">github @deoldsax<a/></td>
      </tr>
      <tr data-href="https://github.com/" data-event="eventA" data-remote="false">
        <td class="disable-row-click">Data A</td>
        <td>Data B</td>
      </tr>
      <tr data-href="http://api.jquery.com/">
        <td>Data A</td>
        <td>Data B</td>
      </tr>
    </tbody>
  </table>
  ```

4. Call the plugin:
  
  * default
  ```javascript
  $(document).ready(function() {
    $('.clickable-table').clickableTable();
  });
  ```
  
  * with callback
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
  * ``<a></a>`` and ``<button></button>`` inside ``<td></td>`` are excluded by default
  * add ``disable-row-click`` to ``<td class="disable-row-click"></td>`` to exclude whole ``<td></td>``
