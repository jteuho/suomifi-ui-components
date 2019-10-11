```js
import { SearchInput } from 'suomifi-ui-components';

<SearchInput
  onBlur={event => console.log(event.target.value)}
  labelText="Search..."
/>;
```